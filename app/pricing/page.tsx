export default function PricingPage() {
  return (
    <main className="bg-[#f8f8f6] px-6 py-24 font-[Playfair_Display]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl text-[#3f4a41] mb-10">
          Fees & Payment Information
        </h1>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl text-[#3f4a41] mb-6">Session Fees</h2>

          <div className="space-y-4 text-lg text-gray-700">
            <p>Initial Assessment / Evaluation: $200</p>
            <p>Individual Therapy: $155 per session</p>
            <p>Couples / Marital / Family Therapy: $175 per session</p>
            <p>Group Therapy: $90 per session</p>
          </div>
        </section>

        {/* Insurance */}
        <section className="mb-16">
          <h2 className="text-3xl text-[#3f4a41] mb-6">Insurance</h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Chizara Therapeutic Services does not accept insurance and
              operates as a private-pay practice.
            </p>

            <p>
              However, we provide{" "}
              <a
                href="/what-is-a-superbill"
                className="underline text-[#e8a693]"
              >
                superbills
              </a>{" "}
              upon request, which you may submit to your insurance provider for
              possible reimbursement.
            </p>

            <p>
              We strongly recommend contacting your insurance provider before
              beginning therapy to confirm whether they accept superbills and
              reimburse out-of-network services.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="/schedule-form"
            className="bg-[#e8a693] text-white px-10 py-3 rounded-full"
          >
            Schedule a Session
          </a>
        </div>
      </div>
    </main>
  );
}