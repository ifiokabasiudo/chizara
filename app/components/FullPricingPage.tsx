import Link from "next/link";
import InsuranceOptions from "./InsuranceOptions";

const sessionFees = [
    {
        service: "Initial Assessment / Evaluation",
        price: "$200",
    },
    {
        service: "Individual Therapy",
        price: "$155 per session",
    },
    {
        service: "Couples / Marital / Family Therapy",
        price: "$175 per session",
    },
    {
        service: "Group Therapy",
        price: "$90 per session",
    },
];

export default function PricingPage() {
    return (
        <main className="relative overflow-hidden bg-[#FBF9F5]">
            <div className="pointer-events-none absolute -right-24 top-32 h-[360px] w-[360px] rounded-full bg-[#F7E8DF]/80" />

            <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
                <div className="max-w-4xl">
                    <h1 className="font-serif text-4xl leading-tight text-[#243A43] sm:text-5xl lg:text-[58px]">
                        Fees & Payment Information
                    </h1>

                    <p className="mt-4 max-w-3xl text-[18px] leading-8 text-[#53636B]">
                        We believe in clear, upfront information so you can focus on what
                        matters most — your well-being.
                    </p>
                </div>

                {/* Fees */}
                <div className="mt-12 max-w-3xl">
                    <h2 className="font-serif text-3xl text-[#253B46]">
                        Session Fees
                    </h2>

                    <div className="mt-5 divide-y divide-[#E5DDD4] border-y border-[#E5DDD4]">
                        {sessionFees.map((fee) => (
                            <div
                                key={fee.service}
                                className="flex flex-col gap-1 py-4 text-[#344C57] sm:flex-row sm:items-center sm:justify-between"
                            >
                                <span className="text-[17px]">
                                    {fee.service}
                                </span>

                                <span className="font-serif text-[18px]">
                                    {fee.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insurance */}
                <section className="mt-16">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-3xl text-[#253B46] sm:text-4xl">
                            Insurance & Payment Options
                        </h2>

                        <p className="mt-4 text-[17px] leading-7 text-[#53636B]">
                            Chizara Therapeutic Services currently accepts the following
                            payment options and insurance:
                        </p>
                    </div>

                    <div className="mt-8">
                        <InsuranceOptions />
                    </div>

                    <div className="mt-8 max-w-5xl space-y-4">
                        <p className="text-[16px] leading-7 text-[#4E5D64]">
                            We also provide{" "}
                            <Link
                                href="/what-is-a-superbill"
                                className="text-[#E39580] underline decoration-[#E39580]/40 underline-offset-4"
                            >
                                superbills
                            </Link>{" "}
                            upon request, which you may submit to your insurance provider
                            for possible reimbursement for eligible out-of-network mental
                            health services.
                        </p>

                        <p className="text-[16px] leading-7 text-[#4E5D64]">
                            Coverage, copays, deductibles, and reimbursement vary by plan.
                            We encourage you to contact your insurance provider before
                            beginning therapy to confirm your benefits.
                        </p>
                    </div>

                    <div className="mt-9">
                        <Link
                            href="/schedule-form"
                            className="inline-flex rounded-full bg-[#E79B86] px-8 py-4 text-[15px] font-medium text-white transition hover:bg-[#D78873]"
                        >
                            Schedule a Session
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}