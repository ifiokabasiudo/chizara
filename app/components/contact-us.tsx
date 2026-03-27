"use client";

import CustomDropdown from "../schedule-form/components/dropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
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

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <section className="bg-[#3f4a41] text-white py-32 px-6 md:px-24">
        <div className="w-full mx-auto grid md:grid-cols-2 gap-16">
          <div className="">
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="text-sm leading-7 opacity-80 mb-10">
              If you’re considering therapy, taking the first step can feel
              overwhelming. You don’t have to do it alone. We’re here to answer
              your questions, discuss your needs, and help you determine whether
              our services are the right fit for you. Reach out today to begin
              your journey toward healing and emotional wellbeing.
            </p>

            <a
              href="/schedule-form"
              className="border border-white px-10 py-3 rounded-full hover:cursor-pointer"
            >
              Get In Touch With Our Therapist
            </a>
          </div>

          {/* <form className="space-y-8">
            <div>
              <label className="text-sm">Name (required)</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="First Name"
                />
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Email (required)</label>
              <input className="w-full mt-2 rounded-full px-5 py-3 border border-white text-black" />
            </div>

            <div>
              <label className="text-sm">
                What questions do you have for us? (required)
              </label>
              <textarea className="w-full mt-2 rounded-3xl px-5 py-4 border border-white text-black h-36"></textarea>
            </div>

            <button className="border border-white px-12 py-3 rounded-full hover:cursor-pointer">
              SEND
            </button>
          </form> */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-white w-full bg-[#3f4a41]"
          >
            <h1 className="text-3xl mb-5">Schedule a Consultation</h1>
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
              {/* <label className="block mb-2">Service of Interest</label> */}
              {/* <select
                    name="service"
                    required
                    className="w-full rounded-full px-4 py-3 bg-[#3f4a41] border"
                  >
                    <option value="">Select a service</option>
                    <option>Individual Counseling</option>
                    <option>Child Therapy</option>
                    <option>Teen Therapy</option>
                    <option>Couples Counseling</option>
                    <option>Marital / Pre-Marital Counseling</option>
                    <option>Group Therapy</option>
                  </select> */}
              <CustomDropdown
                label="Service of Interest"
                name="service"
                required
                placeholder="Select a service"
                options={[
                  { label: "Individual Counseling", value: "individual" },
                  { label: "Child Therapy", value: "child" },
                  { label: "Teen Therapy", value: "teen" },
                  { label: "Couples Counseling", value: "couples" },
                  {
                    label: "Marital / Pre-Marital Counseling",
                    value: "marital",
                  },
                  { label: "Group Therapy (Seasonal)", value: "group" },
                ]}
                setIsGroupTherapy={setIsGroupTherapy}
                isGroupModal={true}
              />
            </div>

            <div className="flex justify-between gap-5">
              {(isGroupTherapy === "group" ||
                ["Grief", "New Parents Support", "Divorcee"].includes(
                  isGroupTherapy,
                )) &&
                ["Grief", "New Parents Support", "Divorcee"].map(
                  (item, index) => (
                    <div
                      key={index}
                      onClick={() => setIsGroupTherapy(item)}
                      className={`w-full rounded-full border py-3 text-center cursor-pointer ${isGroupTherapy == item && `bg-white text-[#3f4a41]`}`}
                    >
                      {item}
                    </div>
                  ),
                )}
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
              {/* <label className="block mb-2">Preferred Session Type</label>
                  <select
                    name="meetingType"
                    required
                    className="w-full rounded-full px-4 py-3 bg-[#3f4a41] border"
                  >
                    <option value="">Select one</option>
                    <option>Virtual</option>
                    <option>Phone</option>
                  </select> */}
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
              <label className="block mb-2">
                What questions do you have for us?
              </label>
              <textarea
                name="message"
                // required
                rows={5}
                className="w-full rounded-2xl px-4 py-3 bg-transparent border"
              />
            </div>

            <p className="text-sm text-gray-300 mt-6 max-w-md">
              * Please note: Chizara Therapeutic Services is a private-pay
              practice and does not accept insurance. Superbills are available
              upon request for possible reimbursement.
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
        </div>
      </section>
      <footer className="bg-[#3f4a41] text-white text-center py-6 text-xs">
        Copyright © {year} Chizara Therapeutic Services. All Rights Reserved.
      </footer>
    </>
  );
}
