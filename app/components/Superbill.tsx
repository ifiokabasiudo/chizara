import Link from "next/link";
import InsuranceOptions from "./InsuranceOptions";

export default function SuperbillPage() {
    return (
        <main className="relative overflow-hidden bg-[#FBF9F5]">
            <div className="pointer-events-none absolute -right-24 top-24 h-[360px] w-[360px] rounded-full bg-[#F7E8DF]/80" />

            <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
                <div className="max-w-3xl">
                    <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#405347]">
                        Insurance & Reimbursement
                    </p>

                    <h1 className="mt-5 font-serif text-5xl leading-tight text-[#233A43] sm:text-6xl">
                        What is a Superbill?
                    </h1>

                    <div className="mt-7 space-y-5 text-[18px] leading-8 text-[#435762]">
                        <p>
                            A superbill is a detailed receipt that includes the services
                            you received during therapy.
                        </p>

                        <p>
                            You can submit this document to your insurance company to
                            request reimbursement for eligible out-of-network mental health
                            services.
                        </p>

                        <p>
                            Reimbursement is not guaranteed and depends on your specific
                            insurance plan.
                        </p>
                    </div>
                </div>

                <section className="mt-14">
                    <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.3em] text-[#405347]">
                        Insurance & Payment Options
                    </p>

                    <InsuranceOptions compact />
                </section>

                <section className="mt-14">
                    <h2 className="font-serif text-3xl text-[#243A43] sm:text-4xl">
                        Common Questions
                    </h2>

                    <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-14">
                        <div>
                            <h3 className="font-serif text-[22px] font-semibold text-[#253B46]">
                                Will I get reimbursed?
                            </h3>

                            <p className="mt-2 text-[16px] leading-7 text-[#53636B]">
                                It depends on your insurance provider and plan. Some plans
                                may reimburse a portion of eligible out-of-network costs.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-[22px] font-semibold text-[#253B46]">
                                How do I use a superbill?
                            </h3>

                            <p className="mt-2 text-[16px] leading-7 text-[#53636B]">
                                After receiving your superbill, submit it directly to your
                                insurance provider according to their reimbursement process.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mt-12">
                    <Link
                        href="/schedule-form"
                        className="inline-flex rounded-full bg-[#E79B86] px-9 py-4 text-[15px] font-medium text-white transition hover:bg-[#D78873]"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </main>
    );
}