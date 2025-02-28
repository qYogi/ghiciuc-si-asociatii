import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const ZOHO_EMAIL = process.env.ZOHO_EMAIL!;
const ZOHO_PASSWORD = process.env.ZOHO_PASSWORD!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, tel, email, message, website } = req.body;

  if (website) {
    console.log("Bot detected");
    return res.status(200).json({ status: "ok" });
  }

  const requiredFields = { name, email, tel, message };
  for (const [field, value] of Object.entries(requiredFields)) {
    if (!value) return res.status(400).json({ error: `Lipseste ${field}` });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email invalid" });
  }

  //Configure transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: ZOHO_EMAIL,
      pass: ZOHO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: ZOHO_EMAIL, // Send to myself
      subject: `New message from ${name}`,
      text: message,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 10px; border: 1px solid #ddd;">
    <h2 style="color: #003f8a;">New Contact Form Submission</h2>
    <p><strong>Nume:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${tel}</p>
    <p><strong>Mesaj:</strong></p>
    <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #001c42;">
      ${message}
    </blockquote>
  </div>
`,
    });

    return res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
