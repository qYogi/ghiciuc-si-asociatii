import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

const ZOHO_EMAIL = process.env.ZOHO_EMAIL!;
const ZOHO_PASSWORD = process.env.ZOHO_PASSWORD!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, tel, email, message, website } = body;

    // Honeypot check
    if (website) {
      console.log("Bot detected");
      return NextResponse.json({ status: "ok" });
    }

    // Validation
    const requiredFields = { name, email, tel, message };
    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value)
        return NextResponse.json(
          { error: `Lipseste ${field}` },
          { status: 400 },
        );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalid" }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: ZOHO_EMAIL,
      subject: `New message from ${name}`,
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

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

// Add CORS headers if needed
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
