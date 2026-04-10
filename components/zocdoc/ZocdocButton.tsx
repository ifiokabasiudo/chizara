"use client";

import { useEffect } from "react";

export default function ZocdocButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://offsiteschedule.zocdoc.com/plugin/embed";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://www.zocdoc.com/practice/chizara-therapeutic-services-175734?lock=true&isNewPatient=false&referrerType=widget"
        className="zd-plugin block"
        data-type="book-button"
        data-practice-id="175734"
        title="Chizara Therapeutic Services"
      >
        <img
          src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=175734&practice_id=pt_HcAaaA_L8UauDgwKPjoKpw"
          alt="Chizara Therapeutic Services"
          className="border-0"
        />
      </a>
    </div>
  );
}