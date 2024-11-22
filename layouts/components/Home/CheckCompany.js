import React from "react";
import company from "../../../public/images/hero-section.jpg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function CheckCompany() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="bg-white">
      <div className="container  mx-auto py-20">
        <div class="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h5 className="text-md font-semibold text-primary">
              Are You Required To File?
            </h5>
            <h4 className="mt-5 text-black">
              Curious if you need to file a FinCEN Report? Uncover the answer in
              seconds!
            </h4>
            <p className="mt-2 text-black">Avoid Costly Penalties - Act Now!</p>
            <p className="mt-8">
              Join millions of businesses across the U.S. in fulfilling
              mandatory FinCEN beneficial ownership reports for 2024. Failure to
              comply can result in daily penalties of $500 or a staggering $10K
              fine!
            </p>
            <p className="mt-2 ">Effortless Compliance in 1 Minute</p>
            <p className="mt-5">
              Use our free analyzer tool now to instantly determine if your LLC,
              Corporation, or S Corp requires a FinCEN filing. Don't wait - most
              small companies are not exempt from this critical reporting
              requirement.
            </p>
            <p className="mt-2 ">
              Check your compliance status in just 1 minute and safeguard your
              business from expensive fines. Take the first step towards
              worry-free FinCEN reporting today.
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Start for Free
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Start for Free
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Start for Free
                </button>
              </Link>
            )}
          </div>
          <div>
            <Image src={company} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
