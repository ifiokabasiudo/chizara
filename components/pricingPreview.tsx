export default function PricingPreview() {
  return (
    <section className="py-24 px-6 bg-[#f3f3ef] flex justify-center">
      <div>
        <h2 className="text-4xl text-[#3f4a41] mb-6">
          Pricing & Insurance
        </h2>

        <div className="mx-auto text-gray-700 mb-8 text-lg">
          <p className="mb-4">
            Chizara Therapeutic Services currently accepts the following payment
            options and insurance:
          </p>

          <ul className="list-disc list-inside inline-block text-left space-y-2">
            <li>Private Pay</li>
            <li>United Healthcare Insurance</li>
          </ul>
        </div>

        <p className="mx-auto text-gray-700 mb-10">
          We also provide{" "}
          <a
            href="/what-is-a-superbill"
            className="underline text-[#e8a693] hover:opacity-80"
          >
            superbills
          </a>{" "}
          upon request, which you may submit to your insurance provider for
          possible reimbursement when applicable.
        </p>

        <a
          href="/pricing"
          className="bg-[#3f4a41] text-white px-10 py-3 rounded-full hover:opacity-90"
        >
          View Full Pricing
        </a>
      </div>
    </section>
  );
}