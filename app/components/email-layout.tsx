import * as React from "react";

interface EmailLayoutProps {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  meetingType: string;
  phone: string;
  availability: string;
  message: string;
  groupType: string;
}

export function EmailLayout({
  firstName,
  lastName,
  email,
  service,
  meetingType,
  phone,
  availability,
  message,
  groupType,
}: EmailLayoutProps) {
  return (
    <div>
      <h2>New Consultation Booking</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Service:</strong> {service}
      </p>
      {groupType !== "none" && (
        <p>
          <strong>Service:</strong> {groupType}
        </p>
      )}
      <p>
        <strong>Meeting Type:</strong> {meetingType}
      </p>
      <p>
        <strong>Availability:</strong> {availability}
      </p>
      <p>
        <strong>Extra Message (Questions):</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
