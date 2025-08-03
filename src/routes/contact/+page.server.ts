// src/routes/contact/+page.server.ts
import type { Actions } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private";

const resend = new Resend(env.RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("name")?.toString() || "No name";
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString() || "";

    if (!email) {
      return { status: 400, errors: { email: "Email is required" } };
    }

    try {
      // 1) SEND to the Resend sandbox inbox
      const { data: sent, error } = await resend.emails.send({
        from: "onboarding@resend.dev", // ← valid “from”
        to: "delivered@resend.dev",
        subject: `Connectivity test from ${name}`,
        html: `<strong>It works!</strong>`,
      });

      if (error) {
        console.error("❌ Test send failed:", error);
        return { status: 500, errors: { server: "Test send failed" } };
      }

      console.log("✅ Test email sent. ID:", sent.id); // now sent.id exists :contentReference[oaicite:0]{index=0}

      // 2) RETRIEVE and log that email to confirm connectivity
      try {
        const details = await resend.emails.get(sent.id);
        console.log("📬 Retrieved test email details:", details);
      } catch (fetchErr) {
        console.error("❌ Could not fetch test email details:", fetchErr);
      }

      return { success: true };
    } catch (err) {
      console.error("❌ Resend error:", err);
      return { status: 500, errors: { server: "Failed to send email" } };
    }
  },
};
