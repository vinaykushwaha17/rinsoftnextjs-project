import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    await connectDB();
    const { name, email, phone, subject, message } = await request.json();
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    return Response.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: 'Failed to send message', error: error.message },
      { status: 500 }
    );
  }
}
