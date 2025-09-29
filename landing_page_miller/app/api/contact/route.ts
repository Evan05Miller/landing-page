import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, business, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${business ? `<p><strong>Business:</strong> ${business}</p>` : ''}
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0; color: #0369a1;">
            <strong>Reply directly to this email to respond to ${name}.</strong>
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="color: #64748b; font-size: 14px; text-align: center;">
          This email was sent from the ScaleUp contact form.
        </p>
      </div>
    `;

    const textContent = `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      ${business ? `Business: ${business}` : ''}

      Message:
      ${message}

      Reply directly to this email to respond to ${name}.

      ---
      This email was sent from the ScaleUp contact form.
    `;

    // Send email using Resend
    await resend.emails.send({
      from: 'ScaleUp Contact <onboarding@resend.dev>', // Or your custom domain if verified
      to: 'edmiller@udel.edu',
      subject: `New Contact Form Submission from ${business || name}`,
      html: htmlContent,
      text: textContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Resend email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
