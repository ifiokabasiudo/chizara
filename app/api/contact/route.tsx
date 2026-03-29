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
  const formType = formData.get("formType")?.toString();

  // supervision fields
  const licenseStatus = formData.get("licenseStatus")?.toString();
  const location = formData.get("location")?.toString() || "N/A";
  const goals = formData.get("goals")?.toString() || "Not provided";

  console.log("It reached here 1...");

  if (formType === "supervision") {
    if (!firstName || !lastName || !email || !licenseStatus || !availability) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
  } else {
    // default = therapy form
    if (
      !firstName ||
      !email ||
      !lastName ||
      !service ||
      !meetingType ||
      !availability
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
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
        type={formType}
        firstName={firstName}
        lastName={lastName}
        email={email}
        availability={availability}
        // therapy
        service={service}
        meetingType={meetingType}
        phone={phone}
        message={message}
        groupType={groupType}
        // supervision
        licenseStatus={licenseStatus}
        location={location}
        goals={goals}
      />,
    );

    const subject =
  formType === "supervision"
    ? `New Supervision Request from ${firstName} ${lastName}`
    : `New Therapy Appointment Request from ${firstName} ${lastName}`;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      replyTo: email,
      subject,
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
