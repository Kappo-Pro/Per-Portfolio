'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const { error } = await supabase
      .from('messages')
      .insert([
        { name, email, message }
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return { error: 'Failed to send message. Please try again later.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Action error:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
