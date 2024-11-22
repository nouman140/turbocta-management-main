import {
  faAngleDoubleRight,
  faCheckDouble,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function WhyChoose() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="bg-theme-light">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1">
          <h6 className="text-center font-bold text-primary">
            SIMPLE YEAR-ROUND COMPLIANCE FOR ONLY $99
          </h6>
          <h4 className="mt-3 text-center text-black">
            What makes TurboCTA your best choice for BOI reporting?
          </h4>
          <p className="mt-3 text-center text-black">
            Forget about endless hours of FinCEN filing research, expensive
            assistance fees, and perplexing plan options. With us, it's
            straightforward: one plan, $99 annually, all-inclusive. Plus, enjoy
            a 50% discount on additional companies! Cancel anytime hassle-free.
          </p>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            {/* <FontAwesomeIcon
              className="text-xl font-extrabold text-primary"
              icon={faAngleDoubleRight}
            /> */}
            <h5 className="mt-3 text-black">Compliance in Minutes</h5>
            <p className="mt-3 text-black">
              Bypass the FinCEN regulation guide. Our platform securely gathers
              and files all Corporate Transparency Act information, allowing you
              to concentrate on expanding your business.
            </p>
          </div>
          <div>
            {/* <FontAwesomeIcon
              className="text-xl font-extrabold text-primary"
              icon={faCheckDouble}
            /> */}
            <h5 className="mt-3 text-black">Free Updated Reports</h5>
            <p className="mt-3 text-black">
              Stay Informed: Prevent penalties with our complimentary updated
              reports.
            </p>
          </div>
          <div>
            {/* <FontAwesomeIcon
              className="text-xl font-extrabold text-primary"
              icon={faHandsHelping}
            /> */}
            <h5 className="mt-3 text-black">Ongoing Support</h5>
            <p className="mt-3 text-black">
            Get complimentary alerts to ensure compliance and avoid penalties. Obtain immediate confirmation of accurately filed reports for precise submission to FinCEN.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {" "}
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
    </div>
  );
}
