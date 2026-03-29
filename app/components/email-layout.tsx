import * as React from "react";

interface EmailLayoutProps {
  firstName: string;
  lastName: string;
  email: string;
  service?: string;
  meetingType?: string;
  phone?: string;
  availability: string;
  message?: string;
  groupType?: string;
  type?: string;

  // supervision
  licenseStatus?: string;
  location?: string;
  goals?: string;
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
  type,
  licenseStatus,
  location,
  goals,
}: EmailLayoutProps) {
  const isSupervision = type === "supervision";

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h2>
        {isSupervision
          ? "New Supervision Request"
          : "New Consultation Booking"}
      </h2>

      {/* COMMON */}
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>

      {/* ===================== */}
      {/* SUPERVISION EMAIL */}
      {/* ===================== */}
      {isSupervision ? (
        <>
          <p>
            <strong>Status:</strong> {licenseStatus}
          </p>
          <p>
            <strong>State:</strong> {location || "N/A"}
          </p>
          <p>
            <strong>Availability:</strong> {availability}
          </p>

          <p>
            <strong>Goals:</strong>
          </p>
          <p>{goals || "Not provided"}</p>
        </>
      ) : (
        <>
          {/* ===================== */}
          {/* THERAPY EMAIL */}
          {/* ===================== */}
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Service:</strong> {service}
          </p>

          {groupType && groupType !== "none" && (
            <p>
              <strong>Group Type:</strong> {groupType}
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
          <p>{message || "None"}</p>
        </>
      )}
    </div>
  );
}