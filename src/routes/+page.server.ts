// src/routes/rsvp/+page.server.ts
import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private"; // <-- dynamic runtime env

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const name = (form.get("name") || "No name").toString().trim();
    const attending = form.get("attending")?.toString();
    const plusOne = form.get("plusOne")?.toString();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required";
    if (!attending) errors.attending = "Please select yes or no";
    if (Object.keys(errors).length) return fail(400, { errors });

    // Read secrets at runtime (Netlify Functions)
    const RESEND_API_KEY = env.RESEND_API_KEY;
    const RSVP_FROM = env.RSVP_FROM || "onboarding@resend.dev"; // use your verified domain in prod
    const RSVP_TO = (env.RSVP_TO || "delivered@resend.dev")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return fail(500, { errors: { form: "Server misconfigured." } });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `RSVP: ${name} — attending: ${attending}, plus-one: ${plusOne ?? "n/a"}`;
    const html = `
      <h2>New RSVP</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Attending:</strong> ${attending}</p>
      <p><strong>Plus one:</strong> ${plusOne ?? "—"}</p>
    `;
    const text = `New RSVP
Name: ${name}
Attending: ${attending}
Plus one: ${plusOne ?? "-"}`;

    try {
      const { data, error } = await resend.emails.send({
        from: RSVP_FROM,
        to: RSVP_TO,
        subject,
        html,
        text,
        // If you collect an email in the RSVP form, set replyTo to that instead:
        // replyTo: form.get('email')?.toString(),
      });

      if (error || !data?.id) {
        console.error("Resend error:", error);
        return fail(500, {
          errors: { form: "Email failed to send. Please try again." },
        });
      }

      console.log("RSVP email sent, id:", data.id);
      return { success: true };
    } catch (e) {
      console.error("Unexpected send error:", e);
      return fail(500, {
        errors: { form: "Unexpected error. Please try again." },
      });
    }
  },
};
