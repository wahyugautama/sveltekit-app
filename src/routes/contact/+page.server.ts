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
      const { data: sent, error } = await resend.emails.send({
        from: `"${name}" <onboarding@resend.dev>`, // display the sender name
        to: "delivered@resend.dev",
        replyTo: email, // so you can reply directly to the user
        subject: `New contact form submission from ${name}`,
        // build the HTML body including all fields
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
        // optional: also include a plain-text fallback
        text: `
          Contact Form Submission

          Name: ${name}
          Email: ${email}

          Message:
          ${message}
        `,
      });

      if (error) {
        console.error("❌ Test send failed:", error);
        return { status: 500, errors: { server: "Test send failed" } };
      }

      console.log("✅ Email sent. ID:", sent.id);

      // Retrieve it again to confirm payload
      try {
        const details = await resend.emails.get(sent.id);
        console.log("📬 Retrieved email details:", details);
      } catch (fetchErr) {
        console.error("❌ Could not fetch email details:", fetchErr);
      }

      return { success: true };
    } catch (err) {
      console.error("❌ Resend error:", err);
      return { status: 500, errors: { server: "Failed to send email" } };
    }
  },
};
