import { render } from "@react-email/render";
import { EmailLayout } from "@/app/components/email-layout";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.BOOKING_EMAIL;

console.log("Receiver email is:", receiverEmail);

export async function POST(req: Request) {
  console.log("Receiver email is:", receiverEmail);
  
  const formData = await req.formData();

  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const email = formData.get("email")?.toString();
  const service = formData.get("service")?.toString();
  const meetingType = formData.get("meetingType")?.toString();
  const phone = formData.get("phone")?.toString() || "N/A";
  const availability = formData.get("availability")?.toString();
  const message = formData.get("message")?.toString() || "none";
  const groupType = formData.get("groupType")?.toString() || "none";

  console.log("It reached here 1...");

  if (
    !firstName ||
    !email ||
    !lastName ||
    !service ||
    !message ||
    !meetingType ||
    !availability ||
    !phone
  ) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    if (!receiverEmail) {
      return Response.json(
        { error: "Receiver email not configured" },
        { status: 500 },
      );
    }

    const html = await render(
      <EmailLayout
        firstName={firstName}
        lastName={lastName}
        email={email}
        service={service}
        meetingType={meetingType}
        phone={phone}
        availability={availability}
        message={message}
        groupType={groupType}
      />,
    );

    console.log("Here too");

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      replyTo: email,
      subject: `New Therapy Appointment Request from ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      console.log("This is the error: ", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
