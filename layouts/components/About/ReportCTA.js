import React from "react";
import partnerTwo from "../../../public/images/partner-02.png";
import Image from "next/image";
export default function ReportCTA() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-20">
        <div class="mb-8 mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-black">
              What details to incorporate in your CTA Report
            </h3>
            <p className="mt-8 text-black">
              CTA reports will include the company's name, state of
              incorporation, document number, tax number, and branch office
              locations. Additionally, owners or decision-makers meeting the
              reporting threshold must provide their name, address, and
              identifying information to FinCEN. Companies must regularly update
              their reports to maintain accuracy as this information may change
              over time.
            </p>
          </div>
          <div className="-mt-10 flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center py-10 ">
                <Image
                  src={partnerTwo}
                  className="p-3"
                  height={200}
                  width={200}
                  alt="Step 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
