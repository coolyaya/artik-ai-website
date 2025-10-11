import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";
import ConfirmEmail from "../src/emails/ConfirmEmail";
import InternalEmail from "../src/emails/InternalEmail";

const Schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  notes: z.string().optional(),
  timeslot: z.string().optional(),
});

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method === "GET") return res.status(200).json({ ok: true, method: "GET" });

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed", method: req.method });

  try {
    const data = Schema.parse(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return res.status(500).json({ ok: false, error: "Email service not configured" });
    }

    const resend = new Resend(resendApiKey);

    const toUser = resend.emails.send({
      from: "ArtikAi <onboarding@resend.dev>", // change to noreply@yourdomain.com after domain verification
      to: data.email,
      subject: "We received your demo request",
      react: ConfirmEmail({ name: data.name, timeslot: data.timeslot }),
      replyTo: "sales@yourdomain.com",
    });

    const toTeam = resend.emails.send({
      from: "ArtikAi <onboarding@resend.dev>",
      to: ["sales@yourdomain.com"],
      subject: "New demo request",
      react: InternalEmail(data),
    });

    await Promise.all([toUser, toTeam]);
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(400).json({ ok: false, error: err?.message ?? "Invalid input or email failed" });
  }
}
