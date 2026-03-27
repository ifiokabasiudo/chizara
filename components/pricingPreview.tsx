export default function PricingPreview() {
  return (
    <section className="py-24 px-6 text-center bg-[#f3f3ef]">
      <h2 className="text-4xl text-[#3f4a41] mb-6">
        Pricing & Insurance
      </h2>

      <p className="max-w-2xl mx-auto text-gray-700 mb-6 text-lg">
        Chizara Therapeutic Services is a private-pay practice and does not
        accept insurance at this time.
      </p>

      <p className="max-w-2xl mx-auto text-gray-700 mb-10">
        We do provide{" "}
        <a
          href="/what-is-a-superbill"
          className="underline text-[#e8a693] hover:opacity-80"
        >
          superbills
        </a>{" "}
        upon request, which you can submit to your insurance provider for
        possible reimbursement.
      </p>

      <a
        href="/pricing"
        className="bg-[#3f4a41] text-white px-10 py-3 rounded-full hover:opacity-90"
      >
        View Full Pricing
      </a>
    </section>
  );
}