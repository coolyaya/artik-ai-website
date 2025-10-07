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

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const raw = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = Schema.parse(raw);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const toUser = resend.emails.send({
      from: "ArtikAi <noreply@yourdomain.com>",
      to: data.email,
      subject: "We received your demo request",
      react: ConfirmEmail({ name: data.name, timeslot: data.timeslot }),
      reply_to: "sales@yourdomain.com",
    });

    const toTeam = resend.emails.send({
      from: "ArtikAi <noreply@yourdomain.com>",
      to: ["sales@yourdomain.com"],
      subject: "New demo request",
      react: InternalEmail(data),
    });

    await Promise.all([toUser, toTeam]);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ ok: false, error: "Invalid input or email failed" });
  }
}
