import { createElement } from "react";
import { NextResponse } from "next/server";
import { FormPayload } from "@/types/contact";
import { BookingEmail } from "@/emails/booking-email";
import { ContactEmail } from "@/emails/contact-email";
import { resend } from "@/lib/resend";


export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FormPayload;

    const email =
      body.type === "booking"
        ? {
            subject: `📅 New Booking - ${body.name}`,
            react: createElement(BookingEmail, body),
          }
        : {
            subject: `📩 ${body.subject}`,
            react: createElement(ContactEmail, body),
          };

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: body.email,
      subject: email.subject,
      react: email.react,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}