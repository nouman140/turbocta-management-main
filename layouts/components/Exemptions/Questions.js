import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Questions() {
  const { uid, user } = useSelector((state) => state.authUser);
  const [answers, setAnswers] = useState({
    employee_count1: "",
    employee_count2: "",
    employee_count3: "",
  });
  const [showResult, setShowResult] = useState(false);

  const handleRadioChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const allNo = () => {
    return Object.values(answers).every((answer) => answer === "no");
  };

  const anyYes = () => {
    return Object.values(answers).some((answer) => answer === "yes");
  };

  const handleCheckResult = () => {
    setShowResult(true);
  };
  return (
    <div className="bg-white">
      <div class="container mx-auto flex flex-col items-center py-20">
        <div
          className={`mb-8 grid grid-cols-1 justify-items-center ${
            showResult ? "hidden" : ""
          }`}
        >
          <div>
            <h5 className="w-full max-w-xl whitespace-normal text-black">
              Question 1:
            </h5>
            <h4 className="w-full max-w-xl whitespace-normal text-black">
              Does your company have 21 or more full-time employees?
            </h4>
            <div className="mt-3 flex flex-col items-start">
              <div>
                <input
                  type="radio"
                  id="yes1"
                  name="employee_count1"
                  value="yes"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count1", "yes")}
                />
                <label htmlFor="yes1">Yes</label>
                <br />
                <input
                  type="radio"
                  id="no1"
                  name="employee_count1"
                  value="no"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count1", "no")}
                />
                <label htmlFor="no1">No</label>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div
          className={`mb-8 grid grid-cols-1 justify-items-center ${
            showResult ? "hidden" : ""
          }`}
        >
          <div>
            <h5 className="w-full max-w-xl whitespace-normal text-black">
              Question 2:
            </h5>
            <h4 className="w-full max-w-xl whitespace-normal text-black">
              Did your company report sales exceeding $5,000,000 on your last
              year's business tax return?
            </h4>
            <div className="mt-3 flex flex-col items-start">
              <div>
                <input
                  type="radio"
                  id="yes2"
                  name="employee_count2"
                  value="yes"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count2", "yes")}
                />
                <label htmlFor="yes2">Yes</label>
                <br />
                <input
                  type="radio"
                  id="no2"
                  name="employee_count2"
                  value="no"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count2", "no")}
                />
                <label htmlFor="no2">No</label>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          class={`mb-8 grid grid-cols-1 justify-items-center ${
            showResult ? "hidden" : ""
          }`}
        >
          <div class="">
            <h5 className="w-full max-w-xl whitespace-normal text-black">
              Question 3:
            </h5>
            <h4 class="w-full max-w-xl whitespace-normal text-black">
              Is your business accurately described by any of the following?
            </h4>
            <p class="max-w-lg text-wrap text-black">
              Is your business classified as a securities reporting issuer
              mandated to file supplementary and periodic information under
              section 15(d) of the Securities Exchange Act of 1934?
            </p>
            <p class="max-w-lg text-wrap text-black">
              Entity exercising governmental authority on behalf of a State or
              Tribe.
            </p>
            <p class="max-w-lg text-wrap text-black">Registered Bank.</p>
            <p class="max-w-lg text-wrap text-black">
              Registered Credit union.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Registered depository institution holding company.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Registered money services business.
            </p>
            <p class="max-w-lg text-wrap text-black">
              SEC-registered broker or dealer in securities.
            </p>
            <p class="max-w-lg text-wrap text-black">
              SEC registered securities exchange or clearing agency.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Company registered under the Commodity Exchange Act.
            </p>
            <p class="max-w-lg text-wrap text-black">
              SEC-registered investment company or investment adviser.
            </p>
            <p class="max-w-lg text-wrap text-black">
              SEC-registered venture capital fund adviser.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Registered Insurance company.
            </p>
            <p class="max-w-lg text-wrap text-black">
              State-licensed insurance producer.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Commodity Exchange Act registered entity.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Registered accounting firm.
            </p>
            <p class="max-w-lg text-wrap text-black">Public utility company.</p>
            <p class="max-w-lg text-wrap text-black">
              Financial market utility firm designated by the Financial
              Stability Oversight Council.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Pooled investment vehicle operated by an SEC registered person.
            </p>
            <p class="max-w-lg text-wrap text-black">Tax-exempt entity.</p>
            <p class="max-w-lg text-wrap text-black">
              Entity that exclusively exists to provide financial assistance or
              governance to a tax-exempt entity.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Entity 100% owned by an exempt entity.
            </p>
            <p class="max-w-lg text-wrap text-black">
              Inactive entity established before 1/1/2020, holding no assets,
              not engaged in any business activities, devoid of foreign owners,
              and having neither sent nor received money or undergone ownership
              changes in the past 12 months.F
            </p>
            <div class="mt-3 flex flex-col items-start">
              <div>
                <input
                  type="radio"
                  id="yes3"
                  name="employee_count3"
                  value="yes"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count3", "yes")}
                />
                <label for="yes3">Yes</label>
                <br />
                <input
                  type="radio"
                  id="no3"
                  name="employee_count3"
                  value="no"
                  className="mr-2"
                  onChange={() => handleRadioChange("employee_count3", "no")}
                />
                <label for="no3">No</label>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* Check Result Button */}
        <button
          className={`rounded bg-primary px-12 py-2 text-white ${
            showResult ? "hidden" : ""
          }`}
          onClick={handleCheckResult}
        >
          Check Result
        </button>
        {/* Conditional rendering of success or loser message */}
        {showResult && (
          <div className="mt-3">
            {allNo() ? (
              <div>
                <h3 className="text-center text-black">
                  You must <span className="text-blue-500">file a report!</span>
                </h3>
                <p className="max-w-lg text-wrap text-center text-black">
                  Based off the answers you selected, FinCEN will require your
                  business to file a yearly Corporate Transparency Act report.
                  Click the button below to get started.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  {uid != null && user.subscription != undefined ? (
                    <Link href="https://app.fincenfetch.com/">
                      <button
                        className={`rounded bg-primary px-12 py-2 text-white `}
                      >
                        Start Filing
                      </button>
                    </Link>
                  ) : uid != null && user.subscription == undefined ? (
                    <Link href="/checkout">
                      <button
                        className={`rounded bg-primary px-12 py-2 text-white `}
                      >
                        Start Filing
                      </button>
                    </Link>
                  ) : (
                    <Link href="/auth/Login">
                      <button
                        className={`rounded bg-primary px-12 py-2 text-white `}
                      >
                        Start Filing
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-center text-black">
                  You do not need to file a report with FinCEN.
                </h3>
                <p className="max-w-lg text-wrap text-center text-black">
                  Based off the answers you selected, FinCEN would not require
                  your business to file a yearly Corporate Transparency Act
                  report.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <Link href="/">
                    <button
                      className={`rounded bg-primary px-12 py-2 text-white `}
                    >
                      Return Home
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
