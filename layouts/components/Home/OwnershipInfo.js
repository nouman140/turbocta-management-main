"use client";
import {
  faCaretRight,
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import step1 from "../../../public/images/First.png";
import step2 from "../../../public/images/second.png";
import step3 from "../../../public/images/third.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function OwnershipInfo() {
  const { uid, user } = useSelector((state) => state.authUser);
  const [numberOfCompanies, setNumberOfCompanies] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const handleChange = () => {
    const inputValue = parseInt(numberOfCompanies);
    let cost = 79;
    if (inputValue > 1) {
      cost += (inputValue - 1) * 39;
    }
    setTotalCost(cost);
  };
  return (
    <div className="bg-theme-light">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1">
          <h3 className="text-center font-semibold">
            Choose a plan to meet your compliance needs
          </h3>
          {/* <p className="mt-4 text-black">
            Under the Corporate Transparency Act, businesses are mandated to
            submit a Beneficial Ownership Information Report. Failure to comply
            or provide inaccurate information can lead to penalties, including
            fines up to $10,000 and possible imprisonment. Simplify the filing
            process with our dashboard, ensuring swift and stress-free
            compliance. Welcome to TurboCTA – your seamless solution for
            regulatory adherence.
          </p> */}
          {/* <h5 className="mt-4">
            COMPLETE YOUR REPORT IN{" "}
            <span className="text-primary">3 EASY STEPS</span>
            <FontAwesomeIcon
              className="mx-2 text-xl font-extrabold text-black"
              icon={faCaretRight}
            />{" "}
          </h5> */}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-5 flex flex-col shadow-sm">
            <div className="flex h-full flex-col justify-between overflow-hidden px-3 rounded-lg bg-white shadow-md">
              <div>
                {/* <Image src={step1} className="p-3" alt="Step 1" /> */}
                <h5 className="mx-3 mt-2 text-primary">
                  Secure compliance assurance for only $99 annually
                </h5>
                <h5 className="text-md mx-3 mt-5">BOI Report</h5>
                <h5 className="text-md mx-3 mt-2">Price: $99</h5>
                <p
                  title=" Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the new ruling."
                  className="second-break-point mx-3  mt-3 text-black"
                >
                  Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the new ruling.
                </p>
                {uid != null && user.subscription != undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="https://app.fincenfetch.com/"
                  >
                    <button className="button mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : uid != null && user.subscription == undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="/checkout"
                  >
                    <button className="button  mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="flex items-center justify-center"
                    href="/auth/Login"
                  >
                    <button className="button mb-3 ml-4 mr-4   mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                )}
                <p className="mx-3 mt-1  text-black">
                  Beneficial Ownership Information Report includes:
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Customized faderally required report
                  </span>
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Simplified process to help you file accurately with the
                    government
                  </span>
                </p>
                <p className="flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Confirmation of successful submission to the Financial
                    Crimes Enforcement Network (FinCEN)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col shadow-sm">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white px-3 shadow-md">
              <div>
                {/* <Image src={step1} className="p-3" alt="Step 1" /> */}
                <h5 className="mx-3 mt-2 text-primary">
                  Streamlined FinCEN Reporting for only $299
                </h5>

                <h5 className="text-md mx-3 mt-5">BOI Report</h5>
                <h5 className="text-md mx-3 mt-2">Pricing: $299</h5>
                <p
                  title="Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the latest regulation stipulated by the
                  Corporate Transparency Act."
                  className="second-break-point mx-3  mt-3 text-black"
                >
                  Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the latest regulation stipulated by the
                  Corporate Transparency Act.
                </p>

                {uid != null && user.subscription != undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="https://app.fincenfetch.com/"
                  >
                    <button className="button mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : uid != null && user.subscription == undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="/checkout"
                  >
                    <button className="button  mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="flex items-center justify-center"
                    href="/auth/Login"
                  >
                    <button className="button mb-3 ml-4 mr-4   mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                )}
                <p className="mx-3 mt-1  text-black">
                  Beneficial Ownership Information Report includes:
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Annual reports to satisfy ongoing state filing requirements.
                  </span>
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Personalized alerts notifying you of your requirements
                  </span>
                </p>
                <p className="flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Ongoing Beneficial Ownership Information Report filing for
                    any changes to indentifying information
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col shadow-sm">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white px-3 shadow-md">
              <div className="mb-2">
                {/* <Image src={step1} className="p-3" alt="Step 1" /> */}
                <h5 className="mx-3 mt-2 text-primary">
                  Click to Submit & Experience peace of mind
                </h5>
                <h5 className="text-md mx-3 mt-5">BOI Report</h5>
                <h5 className="text-md mx-3 mt-2">Pricing: $699</h5>
                <p
                  title="Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the latest regulation stipulated by the
                  Corporate Transparency Act with legal review of one of our on
                  staff attorneys."
                  className="second-break-point mx-3  mt-3 text-black"
                >
                  Beneficial Ownership Information Report (BOIR). We'll handle
                  the filing and transmit your details to FinCEN, ensuring your
                  compliance with the latest regulation stipulated by the
                  Corporate Transparency Act with legal review of one of our on
                  staff attorneys.
                </p>

                {uid != null && user.subscription != undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="https://app.fincenfetch.com/"
                  >
                    <button className="button mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : uid != null && user.subscription == undefined ? (
                  <Link
                    className="flex items-center justify-center"
                    href="/checkout"
                  >
                    <button className="button  mb-3 ml-4 mr-4 mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="flex items-center justify-center"
                    href="/auth/Login"
                  >
                    <button className="button mb-3 ml-4 mr-4   mt-3 w-full self-start rounded px-6 py-2 text-white">
                      ORDER NOW
                    </button>
                  </Link>
                )}
                <p className="mx-3 mt-1  text-black">
                Beneficial Ownership Information Report plus:
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Legal review by board certified lawyer with expertise in BOI
                    and Fincen Compliance.
                  </span>
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Annual reports to satisfy ongoing state filing requirements.
                  </span>
                </p>
                <p className=" flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Personalized alerts notifying you of your requirements
                  </span>
                </p>
                <p className="flex justify-start font-bold">
                  <FontAwesomeIcon
                    className="theme-color mx-2 mt-1 px-1 text-xl font-extrabold"
                    icon={faCircleCheck}
                  />
                  <span className=" text-gray-500">
                    Ongoing Beneficial Ownership Information Report filing for
                    any changes to indentifying information
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="calculate mt-10 grid gap-4 rounded p-10  sm:grid-cols-1 md:grid-cols-2">
          <div class="">
            <h3 className="text-white">
              One-time fee or multiple companies? We've got you covered!
            </h3>
            <p className="mt-5 text-white">
              <span className="theme-color">
                $79 includes your initial report and any updated reports{" "}
              </span>
              you need for 2024. Plus your
              <span className="theme-color">
                {" "}
                additional companies get a 50% discount to just $39.
              </span>
            </p>
            <p className="mt-4 text-white">
              Cancel anytime, and enjoy complimentary report updates as long as
              you're using TurboCTA.
            </p>
            <i className="mt-2 text-white">
              Free tip: Updated reports are required when an owner changes their
              residence.
            </i>
          </div>
          <div className="md:flex md:items-center md:justify-center">
            <div className="p-0">
              {totalCost > 0 && (
                <p className="mb-2 mt-4 text-white">
                  Total Cost: ${totalCost}{" "}
                  {uid != null && user.subscription != undefined ? (
                    <Link
                      href="https://app.fincenfetch.com/"
                      className="text-yellow-600 underline"
                    >
                      File Now
                    </Link>
                  ) : uid != null && user.subscription == undefined ? (
                    <Link
                      href="/checkout"
                      className="text-yellow-600 underline"
                    >
                      File Now
                    </Link>
                  ) : (
                    <Link
                      href="/auth/Login"
                      className="text-yellow-600 underline"
                    >
                      File Now
                    </Link>
                  )}
                </p>
              )}
              <input
                type="number"
                className="mb-4 w-full rounded-md border border-gray-300 bg-gray-200 px-4 py-2"
                placeholder="Enter the number of companies you have"
                value={numberOfCompanies}
                onChange={(e) => {
                  setNumberOfCompanies(e.target.value);
                }}
              />
              <button
                className="button w-full rounded py-2 font-bold text-black"
                onClick={handleChange}
              >
                Calculate
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
