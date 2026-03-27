export default function SuperbillPage() {
  return (
    <main className="bg-[#f8f8f6] px-6 py-24 font-[Playfair_Display]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl text-[#3f4a41] mb-10">
          What is a Superbill?
        </h1>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            A superbill is a detailed receipt that includes the services you
            received during therapy.
          </p>

          <p>
            You can submit this document to your insurance company to request
            reimbursement for out-of-network mental health services.
          </p>

          <p>
            Reimbursement is not guaranteed and depends on your specific
            insurance plan.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl text-[#3f4a41] mb-6">Common Questions</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold">
                Will I get reimbursed?
              </h3>
              <p>
                It depends on your insurance provider and plan. Some plans may
                reimburse a portion of the cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How do I use a superbill?
              </h3>
              <p>
                After receiving your superbill, you submit it directly to your
                insurance provider for review.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="/schedule-form"
            className="bg-[#e8a693] text-white px-10 py-3 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}