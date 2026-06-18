import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { parentName, studentName, phone, email, age, track } = data;

    const { data: resendData, error } = await resend.emails.send({
      from: 'Futures Academy Enrollment <onboarding@resend.dev>',
      to: ['bd.scriptlabsdigital@gmail.com'],
      subject: `New Enrollment: ${studentName}`,
      html: `
        <h1>New Enrollment Received</h1>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Student Age:</strong> ${age}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Preferred Track:</strong> ${track}</p>
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
