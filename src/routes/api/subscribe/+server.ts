import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

const RESEND_API_KEY = env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = env.RESEND_AUDIENCE_ID;
const RESEND_BASE_URL = "https://api.resend.com";

// Debug GET to verify route
export const GET: RequestHandler = () => {
  console.log("[subscribe] GET /api/subscribe");
  return json({ ok: true });
};

export const POST: RequestHandler = async ({ request }) => {
  console.log("[subscribe] POST payload received");

  // Validate env
  if (!RESEND_API_KEY) {
    console.error("Missing Resend API key");
    return json({ message: "Missing Resend API key" }, { status: 500 });
  }
  if (!RESEND_AUDIENCE_ID) {
    console.error("Missing Resend Audience ID");
    return json({ message: "Missing Resend Audience ID" }, { status: 500 });
  }

  // Parse and validate input
  const { email } = await request.json();
  if (!email) {
    console.error("Email is required");
    return json({ message: "Email is required" }, { status: 400 });
  }

  // Correct endpoint for creating contacts
  const response = await fetch(
    `${RESEND_BASE_URL}/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        audience_id: RESEND_AUDIENCE_ID,
      }),
    }
  );

  const text = await response.text();
  console.log(`[Resend API] status=${response.status} response=${text}`);

  if (!response.ok) {
    let message = "Subscription failed";
    try {
      message = JSON.parse(text).message || message;
    } catch {}
    return json({ message }, { status: response.status });
  }

  return json({ message: "Subscribed successfully" }, { status: 200 });
};
