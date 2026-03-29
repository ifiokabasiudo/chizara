"use client";
import { useState } from "react";
import CustomDropdown from "./components/dropdown";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isGroupTherapy, setIsGroupTherapy] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // const formData = new FormData(e.currentTarget);
    const form = e.currentTarget; // ✅ store reference
    const formData = new FormData(form);

    if (formData.get("service") === "group" && !formData.get("groupType")) {
      alert("Please select a group therapy type.");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      form.reset();
      router.push("/schedule-form/success");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-white w-full bg-[#3f4a41] p-8 md:p-20"
    >
      <h1 className="text-5xl mb-15">Schedule a Consultation</h1>
      c
      {/* NAME */}
      <div>
        <label className="block mb-2">Name (required)</label>
        <div className="flex gap-4">
          <input
            name="firstName"
            required
            placeholder="First Name"
            className="w-full rounded-full px-4 py-3 bg-transparent border"
          />
          <input
            name="lastName"
            required
            placeholder="Last Name"
            className="w-full rounded-full px-4 py-3 bg-transparent border"
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label className="block mb-2">Email (required)</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-full px-4 py-3 bg-transparent border"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block mb-2">Phone Number</label>
        <input
          name="phone"
          className="w-full rounded-full px-4 py-3 bg-transparent border"
        />
      </div>

      {/* SERVICE */}
      <div>
        <CustomDropdown
          label="Service of Interest"
          name="service"
          required
          placeholder="Select a service"
          options={[
            { label: "Individual Counseling", value: "individual" },
            // { label: "Child Therapy", value: "child" },
            { label: "Teen Therapy", value: "teen" },
            { label: "Couples Counseling", value: "couples" },
            { label: "Marital / Pre-Marital Counseling", value: "marital" },
            { label: "Group Therapy (Seasonal)", value: "group" },
          ]}
          setIsGroupTherapy={setIsGroupTherapy}
          isGroupModal={true}
        />
      </div>

      <div className="flex justify-between gap-5">
        {(isGroupTherapy === "group" ||
          ["Grief", "Parents", "Divorcee"].includes(isGroupTherapy)) &&
          ["Grief", "Parents", "Divorcee"].map((item, index) => (
            <div
              key={index}
              onClick={() => setIsGroupTherapy(item)}
              className={`w-full rounded-full border py-3 text-center cursor-pointer ${isGroupTherapy == item && `bg-white text-[#3f4a41]`}`}
            >
              {item}
            </div>
          ))}
      </div>
      <input
        type="hidden"
        name="groupType"
        value={
          ["Grief", "Parents", "Divorcee"].includes(isGroupTherapy)
            ? isGroupTherapy
            : ""
        }
      />

      {/* MEETING TYPE */}
      <div>
        <CustomDropdown
          label="Preferred Session Type"
          name="meetingType"
          required
          placeholder="Select session type"
          options={[
            { label: "Virtual Session", value: "virtual" },
            { label: "Phone Session", value: "phone" },
          ]}
          setIsGroupTherapy={() => {}}
          isGroupModal={false}
        />
      </div>

      {/* AVAILABILITY */}
      <div>
        <label className="block mb-2">Availability (days & times)</label>
        <textarea
          name="availability"
          required
          rows={4}
          className="w-full rounded-2xl px-4 py-3 bg-transparent border"
          placeholder="Example: Mondays & Wednesdays after 5pm"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block mb-2">What questions do you have for us?</label>
        <textarea
          name="message"
          // required
          rows={5}
          className="w-full rounded-2xl px-4 py-3 bg-transparent border"
        />
      </div>

      <p className="text-sm text-gray-300 mt-6 max-w-md">
        * Please note: Chizara Therapeutic Services is a private-pay practice
        and does not accept insurance. Superbills are available upon request for
        possible reimbursement.
      </p>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="rounded-full px-10 py-3 border hover:bg-white hover:text-black transition hover:cursor-pointer"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
