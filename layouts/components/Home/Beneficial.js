import React from "react";
import banaficial1 from "../../../public/images/forth.png";
import chemist from "../../../public/images/fifth.png";
import engeenier from "../../../public/images/sixth.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Beneficcial() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="bg-white">
      <div className="container  mx-auto py-20">
        <div class="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h4 className="mt-5 text-black">
              What do updated beneficial ownership information reports entail?
            </h4>
            <p className="mt-8">
              Ensure Seamless Compliance with FREE FinCEN Report Updates!
              According to the Corporate Transparency Act, timely updates to
              your FinCEN report are obligatory whenever there’s a modification
              in ownership or company details—typically stemming from an owner’s
              residential address change or office relocation. Sidestep
              penalties by filing updated reports within 30 days of any
              alteration.
            </p>
            <p className="mt-5">
              With our service, compliance is not only instant but also{" "}
               <span className="font-semibold text-black">
                hassle-free and without cost.
              </span>{" "}
              Distinguished from other platforms, we preload your previous
              report for quick edits. Effortlessly update your BOI report in
              minutes, not hours, ensuring compliance with the 30-day
              requirement effortlessly and without additional fees.
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            )}
          </div>
          <div>
            <Image src={banaficial1} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
        <div class="mt-10 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <Image src={chemist} className="rounded p-3" alt="Step 1" />
          </div>
          <div>
            <h4 className="mt-5 text-black">
              What do corrected beneficial ownership information reports
              involve?
            </h4>
            <p className="mt-8">
              Errors in FinCEN filings are prevalent, frequently attributed to
              the platform's perplexing interface and intricate requirements.
              Should you identify a mistake, you have 30 days to rectify your
              report and prevent penalties.
            </p>
            <p className="mt-5">
              With TurboCTA’s $99 bundle, you'll gain{" "}
              <span className="font-semibold text-black">FRee</span> amendments!
              TurboCTA streamlines each step, making compliance effortless. Bid
              farewell to headaches and welcome seamless, hassle-free compliance
              today!
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
        <div class="mt-10 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h4 className="mt-5 text-black">
              What if I am a beneficial owner affiliated with multiple reporting
              companies?
            </h4>
            <p className="mt-8">
              For each company you possess, a beneficial ownership report is
              mandated. With TurboCTA, handling this process is seamless. Easily
              add as many companies as necessary to your dashboard to
              consolidate all Corporate Transparency Act tools and records
              conveniently.
            </p>
            <p className="mt-5">
              With TurboCTA, the first company costs only $99 per year,
              inclusive of free updated reports for as long as you remain
              active. Plus, enjoy a{" "}
              <span className="font-semibold text-black">50% discount</span> on
              additional companies!
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started with turbocta
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started with turbocta
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Get Started with turbocta
                </button>
              </Link>
            )}
          </div>
          <div>
            <Image src={engeenier} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
