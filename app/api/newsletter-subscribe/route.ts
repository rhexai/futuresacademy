import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'Futures Academy Newsletter <onboarding@resend.dev>',
      to: ['bd.scriptlabsdigital@gmail.com'], 
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h1>New Newsletter Subscription</h1>
        <p>A new user has subscribed to the Futures Academy newsletter.</p>
        <p><strong>Email Address:</strong> ${email}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
