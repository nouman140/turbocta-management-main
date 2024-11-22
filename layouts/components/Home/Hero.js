import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import verified from "../../../public/images/verified.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Hero() {
  const { uid, user } = useSelector((state) => state.authUser);
  const [active, setActive] = useState(1);
  const questions = [
    {
      step: "Question 1",
      question:
        "Does your company make over $5,000,000 and employ more than 20 full-time employees?",
      position: 1,
    },
    {
      step: "Question 2",
      question:
        "Does your company make over $5,000,000 and employ more than 20 full-time employees?",
      position: 2,
    },
    {
      step: "You have to file",
      question:
        "You do not have an exemption and must file a report based on the provided answers. Failing to file before the deadline subjects your company to fines of $500 per day or $10,000.",
      position: 3,
    },
    {
      step: "You are exempt from filing",
      question: "It appears you are exempt based on the provided answers.",
      position: 4,
    },
  ];
  const handleRestart = () => {
    setActive(1);
  };
  const handleAnswer = (answer) => {
    if (active === 1) {
      setActive(answer === "yes" ? 4 : 2);
    } else if (active === 2) {
      setActive(answer === "yes" ? 4 : 3);
    }
  };
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container  mx-auto py-20">
          <div class="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="hero-heading sm:text-md font-extrabold text-white">
                File your{" "}
                <span className="theme-color">Beneficial Ownership Report</span>{" "}
                in
                <br /> Minutes for $99
              </h1>
              <p className="mt-5 font-semibold text-white">
                Achieve seamless compliance with our streamlined and secure
                FinCEN BOI filing platform. Unlock the power of effortless
                filing and stay ahead of regulatory requirements.
              </p>
              <div className="mb-4 mt-4">
                <FontAwesomeIcon
                  className="theme-color text-xl	 font-extrabold"
                  icon={faCheck}
                />
                &nbsp; &nbsp;
                <span className="font-semibold text-white">
                  Effortless Filing with Regulatory Guidance
                </span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="theme-color text-xl	 font-extrabold"
                  icon={faCheck}
                />
                &nbsp; &nbsp;
                <span className="font-semibold text-white">
                  Fast Delivery of FinCEN Confirmation Transcripts
                </span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="theme-color text-xl	 font-extrabold"
                  icon={faCheck}
                />
                &nbsp; &nbsp;
                <span className="font-semibold text-white">
                  Stay Compliant Year-Round with Free Report Updates
                </span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="theme-color text-xl	 font-extrabold"
                  icon={faCheck}
                />
                &nbsp; &nbsp;
                <span className="font-semibold text-white">
                  Easily Add Unlimited Beneficial Owners with No Restrictions
                </span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="theme-color text-xl	 font-extrabold"
                  icon={faCheck}
                />
                &nbsp; &nbsp;
                <span className="font-semibold text-white">
                  Expert Review of Reports Prior to Filing
                </span>
              </div>
            </div>
            <div>
              <div className="mt-5 shadow-sm">
                <div className="main-card overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="p-8">
                    <h4 className="text-md font-extrabold">
                      Are You Required To File?
                    </h4>
                    <p className="mt-4">
                      Find out if you're company is exempt from filing by
                      answering 2 simple questions.
                    </p>
                    {questions.map(
                      (q) =>
                        q.position === active && (
                          <div key={q.position} className="mt-8">
                            <h5 className="text-md font-extrabold">{q.step}</h5>
                            <p className="mt-4">{q.question}</p>
                            {q.position !== 3 && q.position !== 4 && (
                              <div className="mt-8">
                                <button
                                  className="button btns rounded px-10 py-2 text-black"
                                  onClick={() => handleAnswer("yes")}
                                >
                                  Yes
                                </button>
                                <button
                                  className="button btns mx-3 rounded px-12 py-2 text-black"
                                  onClick={() => handleAnswer("no")}
                                >
                                  No
                                </button>
                              </div>
                            )}
                            {q.position === 3 &&
                              (uid != null && user.subscription != undefined ? (
                                <Link href="https://app.fincenfetch.com/">
                                  <button
                                    className="button mt-8 rounded px-12 py-2 text-black"
                                    onClick={() => setActive(1)}
                                  >
                                    Go File
                                  </button>
                                </Link>
                              ) : uid != null &&
                                user.subscription == undefined ? (
                                <Link href="/checkout">
                                  <button
                                    className="button mt-8 rounded px-12 py-2 text-black"
                                    onClick={() => setActive(1)}
                                  >
                                    Go File
                                  </button>
                                </Link>
                              ) : (
                                <Link href="/auth/Login">
                                  <button
                                    className="button mt-8 rounded px-12 py-2 text-black"
                                    onClick={() => setActive(1)}
                                  >
                                    Go File
                                  </button>
                                </Link>
                              ))}
                          </div>
                        )
                    )}
                    {active === 4 && (
                      <button
                        className="button mt-8 rounded px-12 py-2 text-black"
                        onClick={handleRestart}
                      >
                        Restart
                      </button>
                    )}

                    {uid != null && user.subscription != undefined ? (
                      <Link href="https://app.fincenfetch.com/">
                        <button className="order    mt-6 rounded px-20 py-2 font-extrabold text-black">
                          Order now
                        </button>
                      </Link>
                    ) : uid != null && user.subscription == undefined ? (
                      <Link href="/checkout">
                        <button className="order  mt-6 rounded px-20 py-2 font-extrabold text-black">
                          Order now
                        </button>
                      </Link>
                    ) : (
                      <Link href="/auth/Login">
                        <button className="order  mt-6 rounded px-20 py-2 font-extrabold text-black">
                          Order now
                        </button>
                      </Link>
                    )}
                  </div>

                  <div className="mx-8 my-8 flex items-center">
                    <Image
                      src={verified}
                      height="60"
                      width="60"
                      alt="verified"
                    />
                    <span className="mx-2 text-sm">
                      See why over 10,000 businesses already use our simple and
                      secure BOI reporting platform.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
