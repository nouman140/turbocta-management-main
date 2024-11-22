import React from "react";
import AboutOne from "../../../public/images/About-one.png";
import PartnerTwo from "../../../public/images/About-two.png";
import PartnerThree from "../../../public/images/About-three.png";
import Image from "next/image";
export default function OurSelf() {
  return (
    <div className=" -mt-40 ">
      <div className="container  mx-auto py-20">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" z-10 flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center">
                <Image
                  src={AboutOne}
                  className=" p-3"
                  height={200}
                  width={400}
                  alt="Step 1"
                />
              </div>
              <p className="p-4 text-center text-black">
                Effortless and Cost-effective Corporate Transparency Act Filings
              </p>
            </div>
          </div>
          <div className=" z-10 flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center">
                <Image
                  src={PartnerTwo}
                  className=" p-3"
                  height={200}
                  width={250}
                  alt="Step 1"
                />
              </div>
              <p className="p-4 text-center text-black">
                Seamless Updating of existing Beneficial Owner Reports
              </p>
            </div>
          </div>
          <div className=" z-10 flex flex-col shadow-md">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
              <div className="flex items-center justify-center">
                <Image
                  src={PartnerThree}
                  className=" p-3"
                  height={200}
                  width={400}
                  alt="Step 1"
                />
              </div>
              <p className="p-4 text-center text-black">
                Stay Informed with the Latest News and Compliance Alerts
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16  mt-14 grid grid-cols-1">
          <h4 className="text-center text-black">
            Our goal is to simplify CTA filing while ensuring compliance with
            the latest laws
          </h4>
          <p className="mt-6 text-center text-black">
            Balancing all the tasks needed to run a profitable business is
            challenging on its own, without additional obligations. New
            legislation such as the Corporate Transparency Act can seem
            overwhelming and carries significant penalties for non-compliance.
            However, compliance doesn't have to be time-consuming or costly! Our
            comprehensive services cover everything you need to ensure easy
            compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
