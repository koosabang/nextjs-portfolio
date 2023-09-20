//import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {  
  const  body  = await request.json();  
  const { email,subject,message } = body;
  
  try {    
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["koosabang@hotmail.com", email],
      subject: subject,
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }

}
