import Image from "next/image";

type InsuranceOptionsProps = {
    compact?: boolean;
    showPrivatePay?: boolean;
};

function PaymentCardIcon() {
    return (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6EDE4]">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-[#405347]"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3 9h18" />
                <path d="M7 15h4" />
            </svg>
        </div>
    );
}

export default function InsuranceOptions({
    compact = false,
    showPrivatePay = true,
}: InsuranceOptionsProps) {
    return (
        <div
            className={`grid gap-5 ${showPrivatePay
                    ? "md:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
        >
            {showPrivatePay && (
                <article className="group flex min-h-[260px] flex-col items-center justify-center rounded-[20px] border border-[#E9E1D7] bg-[#FFFCF8] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(44,58,49,0.08)]">
                    <PaymentCardIcon />

                    <h3 className="mt-5 font-serif text-[24px] text-[#253B46]">
                        Private Pay
                    </h3>

                    {!compact && (
                        <p className="mt-3 max-w-[300px] text-[16px] leading-7 text-[#4D5D66]">
                            We welcome self-pay clients and offer transparent, upfront
                            pricing. Payment is due at the time of service.
                        </p>
                    )}
                </article>
            )}

            <article className="group flex min-h-[260px] flex-col items-center justify-center rounded-[20px] border border-[#E9E1D7] bg-[#FFFCF8] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(44,58,49,0.08)]">
                <div className="relative h-[72px] w-full max-w-[250px]">
                    <Image
                        src="/images/insurance/united-healthcare.png"
                        alt="UnitedHealthcare"
                        fill
                        className="object-contain"
                        sizes="250px"
                    />
                </div>

                <h3 className="mt-4 font-serif text-[24px] text-[#253B46]">
                    UnitedHealthcare
                </h3>

                {!compact && (
                    <p className="mt-3 max-w-[310px] text-[16px] leading-7 text-[#4D5D66]">
                        Chizara Therapeutic Services accepts UnitedHealthcare insurance.
                        Coverage and benefits may vary by individual plan.
                    </p>
                )}
            </article>

            <article className="group flex min-h-[260px] flex-col items-center justify-center rounded-[20px] border border-[#E9E1D7] bg-[#FFFCF8] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(44,58,49,0.08)]">
                <div className="relative h-[82px] w-full max-w-[270px]">
                    <Image
                        src="/images/insurance/carefirst-bluechoice.png"
                        alt="CareFirst BlueCross BlueShield BlueChoice"
                        fill
                        className="object-contain"
                        sizes="270px"
                    />
                </div>

                <h3 className="mt-3 font-serif text-[22px] leading-snug text-[#253B46]">
                    CareFirst BlueCross BlueShield
                </h3>

                <p className="mt-1 text-[15px] text-[#637078]">
                    CareFirst BlueChoice
                </p>

                {!compact && (
                    <p className="mt-3 max-w-[310px] text-[16px] leading-7 text-[#4D5D66]">
                        Chizara Therapeutic Services accepts CareFirst BlueCross
                        BlueShield. Coverage and benefits may vary by plan.
                    </p>
                )}
            </article>
        </div>
    );
}