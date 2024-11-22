import React from "react";
import partnerOne from "../../../public/images/Partner-03.jpg";
import Image from "next/image";
export default function TurboctaPlatform() {
  return (
    <div className="bg-theme-light">
      <div className="container mx-auto py-20">
        <div class="mb-8 mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center py-10 ">
                <Image
                  src={partnerOne}
                  className="p-3"
                  height={200}
                  width={200}
                  alt="Step 1"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-black">The TurboCTA system</h3>
            <p className="mt-8 text-black">
              The TurboCTA platform is designed to facilitate both the initial
              and updated filings seamlessly. While some companies are exempt
              from filing CTA reports, as this regulation primarily targets
              small companies, it's essential to note that you are not required
              to file CTA reports if your company has more than 20 employees AND
              annual sales of $5,000,000 or more. Additionally, certain other
              companies are exempt based on their involvement in specific
              industries that already mandate registration. We continually
              update this list so that you can utilize our free company check
              tool to determine if filing is necessary. TurboCTA also offers a
              suite of tools for the compliance and incorporation services
              industry. Our partners, Powered by TurboCTA, leverage our tools to
              streamline CTA compliance for their clients. For more information
              on licensing TurboCTA tools, simply reach out and contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
