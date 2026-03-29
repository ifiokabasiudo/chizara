"use client";
import { useState } from "react";
import CustomDropdown from "../schedule-form/components/dropdown";
import { useRouter } from "next/navigation";

export default function SupervisionForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
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

  //kuroinu

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-white w-full bg-[#3f4a41] p-8 md:p-20"
    >
      <h1 className="text-5xl mb-10">Request Supervision</h1>
      <p className="text-sm text-gray-300 max-w-md mb-6">
        * Services are currently available to Maryland residents only.
      </p>
      <input type="hidden" name="formType" value="supervision" />

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

      {/* LICENSE TYPE */}
      <div>
        <CustomDropdown
          label="Current Status"
          name="licenseStatus"
          required
          placeholder="Select your status"
          options={[
            { label: "LGPC (Seeking Supervision)", value: "lgpc" },
            { label: "Graduate Student (Internship)", value: "student" },
            { label: "Other", value: "other" },
          ]}
          setIsGroupTherapy={() => {}}
          isGroupModal={false}
        />
      </div>

      {/* LOCATION */}
      <div>
        <label className="block mb-2">State of Practice</label>
        <input
          name="location"
          placeholder="e.g. Maryland"
          className="w-full rounded-full px-4 py-3 bg-transparent border"
        />
      </div>

      {/* AVAILABILITY */}
      <div>
        <label className="block mb-2">Availability</label>
        <textarea
          name="availability"
          required
          rows={3}
          className="w-full rounded-2xl px-4 py-3 bg-transparent border"
          placeholder="Example: Evenings after 5pm, weekends"
        />
      </div>

      {/* GOALS */}
      <div>
        <label className="block mb-2">
          What are you hoping to gain from supervision?
        </label>
        <textarea
          name="goals"
          rows={4}
          className="w-full rounded-2xl px-4 py-3 bg-transparent border"
          placeholder="Briefly describe your goals or areas of focus"
        />
      </div>

      <p className="text-sm text-gray-300 mt-6 max-w-md">
        * Supervision services are provided by Maryland board-approved LCPC
        supervisors. Availability is limited and based on fit.
      </p>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="rounded-full px-10 py-3 border hover:bg-white hover:text-black transition hover:cursor-pointer"
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}