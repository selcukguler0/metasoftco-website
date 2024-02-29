"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface IPrevState {
  error: boolean | undefined;
  message: string | undefined;
}

export async function sendMail(
  prevState: IPrevState,
  formData: FormData
) {
  if (!formData) {
    console.log("Form verisi alınamadı.");

    return {
      error: true,
      message: "Form verisi alınamadı.",
    };
  }

  try {
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(email, message);

    if (!email || !message) {
      return {
        error: true,
        message: "Email ve mesaj alanları boş bırakılamaz.",
      };
    }

    const data = await resend.emails.send({
      from: "İletişim Talebi <onboarding@resend.dev>",
      to: ["info@metasoftco.com"],
      subject: "Hello world",
      text: "Hello world",
      react: EmailTemplate({
        email: email as string,
        message: message as string,
      }),
    });
    console.log("data", data);
    return {
      error: false,
      message: "Mesajınız başarıyla gönderildi.",
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "Bir hata oluştu, lütfen tekrar deneyin.",
    };
  }
}
