'use server';

import { Resend } from 'resend';

let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    if (!resend) {
      console.error('RESEND_API_KEY is missing');
      return { error: 'Email service not configured. Please set RESEND_API_KEY.' };
    }

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'rkapilkumar2001@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return { success: true };
  } catch (err) {
    console.error('Action error:', err);
    return { error: 'An unexpected error occurred sending your message.' };
  }
}
