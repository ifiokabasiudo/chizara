import Link from "next/link";
import InsuranceOptions from "./InsuranceOptions";

export default function PricingInsuranceSection() {
    return (
        <section className="relative overflow-hidden bg-[#FBF9F5] py-20 sm:py-24 lg:py-28">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 top-10 h-[330px] w-[330px] rounded-full bg-[#F7E8DF]/80" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.32em] text-[#405347]">
                        Pricing & Insurance
                    </p>

                    <h2 className="font-serif text-4xl leading-[1.08] text-[#243A43] sm:text-5xl lg:text-[62px]">
                        Transparent Care,
                        <br />
                        Accessible Support
                    </h2>

                    <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[#53636B]">
                        We believe in clear, honest information about fees and insurance
                        options so you can focus on what matters most — your well-being.
                    </p>
                </div>

                <div className="mt-12">
                    <InsuranceOptions />
                </div>

                <div className="mt-8 max-w-5xl space-y-4">
                    <p className="text-[16px] leading-7 text-[#4E5D64]">
                        We also provide{" "}
                        <Link
                            href="/what-is-a-superbill"
                            className="text-[#DF927D] underline decoration-[#DF927D]/40 underline-offset-4 transition hover:text-[#C77C68]"
                        >
                            superbills
                        </Link>{" "}
                        upon request, which you may submit to your insurance provider for
                        possible reimbursement for eligible out-of-network mental health
                        services.
                    </p>

                    <p className="text-[16px] leading-7 text-[#4E5D64]">
                        If you have questions about your coverage, copay, deductible, or
                        benefits, please contact your insurance provider before beginning
                        therapy.
                    </p>
                </div>

                <div className="mt-8">
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-3 rounded-full bg-[#405347] px-8 py-4 text-[15px] font-medium text-white transition hover:bg-[#314137]"
                    >
                        View Full Pricing

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path d="M5 12h14" />
                            <path d="m14 7 5 5-5 5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}