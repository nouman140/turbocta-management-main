import React from "react";
import partnerOne from "../../../public/images/About-four.png";
import Image from "next/image";
export default function FileCTA() {
  return (
    <div className="bg-theme-light">
      <div className="container mx-auto py-20">
        <div class="mb-8 mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div className="-mt-10 flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center py-10 ">
                <Image
                  src={partnerOne}
                  className="p-3"
                  height={200}
                  width={300}
                  alt="Step 1"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-black">How to file a CTA Report”</h3>
            <p className="mt-8 text-black">
              FinCEN has unveiled the definitive regulations regarding the
              Corporate Transparency Act. Starting January 1st, 2024, newly
              established companies will have 30 days to file a report, while
              those existing before this date will be granted one year to submit
              their reports. We suggest early preparation to promptly address
              this task and ensure its completion, sparing you from oversight of
              this critical obligation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
