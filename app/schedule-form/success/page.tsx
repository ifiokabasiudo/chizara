"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f9f6] px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Message Sent Successfully
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for reaching out to Chizara Therapeutic Services.  
          Your message has been received, and someone from our team will
          contact you shortly to follow up.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#3f4a41] px-8 py-3 text-white font-medium hover:bg-[#2f372f] transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
