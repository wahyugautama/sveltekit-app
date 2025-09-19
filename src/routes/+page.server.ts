// src/routes/rsvp/+page.server.ts
import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { RESEND_API_KEY, RSVP_FROM, RSVP_TO } from "$env/static/private";
// Or use $env/dynamic/private if you need runtime-injected envs instead of statically replaced ones.

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const name = (form.get("name") || "No name").toString().trim();
    const attending = form.get("attending")?.toString();
    const plusOne = form.get("plusOne")?.toString();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required";
    if (!attending) errors.attending = "Please select yes or no";

    if (Object.keys(errors).length) {
      // Tells enhance() this is a validation failure
      return fail(400, { errors });
    }

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
        from: RSVP_FROM || "onboarding@resend.dev", // Prefer a verified domain!
        to: RSVP_TO ? [RSVP_TO] : ["delivered@resend.dev"], // For live use, set RSVP_TO in .env
        subject,
        html,
        text,
        replyTo: RSVP_FROM,
      });

      if (error) {
        console.error("Resend error:", error);
        return fail(500, {
          errors: { form: "Email failed to send. Please try again." },
        });
      }

      console.log("RSVP email sent, id:", data?.id);
      return { success: true };
    } catch (e) {
      console.error("Unexpected send error:", e);
      return fail(500, {
        errors: { form: "Unexpected error. Please try again." },
      });
    }
  },
};
