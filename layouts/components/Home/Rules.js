import React from "react";
import mouse from "../../../public/images/seven.png";
import qualifies from "../../../public/images/eight.png";
import files from "../../../public/images/nine.png";
import calculations from "../../../public/images/calculations.jpg";
import womentable from "../../../public/images/womentable.jpg";
import reviewing from "../../../public/images/reviewing.jpg";
import mandesk from "../../../public/images/mandesk.jpg";
import womanpapaer from "../../../public/images/NewOwnership.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Rules() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="mt-16 bg-theme-light">
      <div className="container mx-auto py-20">
        <div class="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-black">
              What Does the Beneficial Ownership Information Reporting
              Requirement Entail?
            </h3>
            <p className="mt-8 text-black">
              The Beneficial Ownership Information Reporting Rule, integral to
              the Corporate Transparency Act, institutes a fresh reporting
              obligation supervised by the Financial Crimes Enforcement Network
              (FinCEN), an entity within the U.S. Department of the Treasury.
            </p>
            <p className="mt-8 text-black">
              The objective of this rule is to enhance the transparency of
              company ownership. Its purpose is to aid the U.S. government in
              combating a range of financial crimes, such as money laundering,
              corruption, human trafficking, drug trafficking, tax evasion, and
              scams targeting employees, customers, or other businesses.
            </p>
            <p className="mt-8 text-black">
              By advocating for transparency and accountability in corporate
              ownership, the Beneficial Ownership Information Reporting Rule
              bolsters the U.S. government's endeavors to discourage
              corporations from concealing or benefiting from actions that
              inflict harm on others.
            </p>
          </div>
          <div>
            {" "}
            <Image src={mouse} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            {" "}
            <Image src={qualifies} className="rounded p-3" alt="Step 1" />
          </div>
          <div>
            <h3 className="text-black">Who Qualifies as a Beneficial Owner?</h3>
            <p className="mt-8 text-black">
              A beneficial owner, as defined by the Corporate Transparency Act,
              is an individual who, either directly or indirectly:
            </p>
            <ul className="mt-5 list-disc">
              <li className="text-black">
                Owns or controls a minimum of 25% of your company's ownership
                interests.
              </li>
              <li className="text-black">
                Exercises significant control over your business.
              </li>
            </ul>
            <p className="mt-8 text-black">
              Common examples of individuals who exercise significant control
              may include:
            </p>
            <ul className="mt-5 list-disc">
              <li className="text-black">
                Key decision-makers in the company, such as the manager of an
                LLC.
              </li>
              <li className="text-black">
                High-ranking individuals may include the president, CEO, CFO,
                COO, general counsel, or similar positions, exercising
                substantial control over your business.
              </li>
              <li className="text-black">
                Individuals with the authority to appoint or dismiss specific
                key positions or the majority of the company's board members.
              </li>
              <li className="text-black">
                Any other individuals with the capability to direct the business
                in areas such as sales or purchase of assets, leasing, product
                lines, strategy, investments, or similar critical decisions.
              </li>
            </ul>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-5 rounded px-12 py-2 font-extrabold text-black">
                  Order My Report Now!
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-5 rounded px-12 py-2 font-extrabold text-black">
                  Order My Report Now!
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-5 rounded px-12 py-2 font-extrabold text-black">
                  Order My Report Now!
                </button>
              </Link>
            )}
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-black">
              What are the consequences of not filing the Beneficial Ownership
              Information Report?
            </h3>
            <p className="mt-8 text-black">
              Each business is required to submit a report detailing all
              individuals who control or own the company. Failure to adhere to
              this rule or provide inaccurate information to FinCEN (the
              Financial Crimes Enforcement Network) carries substantial
              penalties under the Corporate Transparency Act.
            </p>
            <p className="mt-8 text-black">
              Failure to file or intentionally provide false information could
              result in imprisonment for up to two years and/or fines of up to
              $10,000. Additionally, you may face daily fines of up to $500 for
              each day of delay.
            </p>
            <p className="mt-8 text-black">
              Even with timely filing, errors can still cause issues. Guarantee
              accuracy, streamline compliance, and evade penalties with our
              intuitive platform.
            </p>
          </div>
          <div>
            {" "}
            <Image src={files} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            {" "}
            <Image src={calculations} className="rounded p-3" alt="Step 1" />
          </div>
          <div>
            <h3 className="text-black">
              When is the deadline for filing the Beneficial Ownership
              Information Report?
            </h3>
            <p className="mt-8 text-black">
              This rule came into effect on January 1, 2024, and compliance is
              mandatory.
            </p>

            <p className="mt-8 text-black">
              The deadline for submitting your report depends on your business's
              commencement date, a detail we can assist you in determining.
            </p>
            <p className="mt-8 text-black">
              If your business commenced operations before January 1, 2024, you
              have until December 31, 2024, to submit your report.
            </p>
            <p className="mt-8 text-black">
              If it started on or after January 1, 2024, you have 90 days from
              when it started.
            </p>
            <p className="mt-8 text-black">
              If your business undergoes significant changes after January 1,
              2024, and you have already submitted an initial report, you have
              30 days to submit a new report. Enjoy complimentary updates with
              TurboCTA.
            </p>
            <p className="mt-8 text-black">
              Ensuring adherence to this regulation is crucial to shield your
              business from legal liabilities, substantial fines, and other
              detrimental outcomes. Initiate the filing process today to
              mitigate risks and safeguard your business.
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  File My Report Now!
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  File My Report Now!
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  File My Report Now!
                </button>
              </Link>
            )}
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-black">
              How Can I Get a Beneficial Ownership Information Report?
            </h3>
            <p className="mt-8 text-black">
              Our Beneficial Ownership Information Report service guarantees a
              seamless process for fulfilling your reporting obligations. Here's
              how it operates:
            </p>
            <ul className="mt-5 list-disc">
              <li className="text-black">
                <span className="font-semibold">Easy Submission:</span>Our
                platform walks you through the regulation and collects the
                required and correct filing information from you in minutes..
              </li>
              <li className="text-black">
                <span className="font-semibold">Report Review:</span>Our expert
                filing team will review your details for accuracy before filing
                your report to FinCEN.
              </li>
              <li className="text-black">
                <span className="font-semibold">Timely Filing:</span>We'll
                promptly handle the filing process with the Financial Crimes
                Enforcement Network (FinCEN) on your behalf, ensuring your
                report is submitted on time.
              </li>
              <li className="text-black">
                <span className="font-semibold">Confirmation:</span>After
                filing, we'll confirm successful completion, giving you peace of
                mind that you've met the compliance requirement.
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <Image src={womentable} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            {" "}
            <Image src={reviewing} className="rounded p-3" alt="Step 1" />
          </div>
          <div>
            <h3 className="text-black">
              What details are encompassed in the Beneficial Ownership
              Information Report?
            </h3>
            <p className="mt-8 text-black">
              The report comprises vital information concerning your business
              and its proprietors:
            </p>

            <p className="mt-8 text-black">
              Ensuring adherence to this regulation is vital to shield your
              business from legal liabilities, hefty fines, and other adverse
              consequences. Begin filing today to mitigate risks and safeguard
              your business.
            </p>
            <ul className="mt-5 list-disc">
              <li className="text-black">
                <span className="font-semibold">Company Information:</span>This
                includes your business's full legal name, any trade names,
                address, federal tax ID number (or EIN), and the jurisdiction
                where it was created.
              </li>
              <li className="text-black">
                <span className="font-semibold">Owner Details:</span>The report
                includes the full legal names, birth dates, current addresses,
                and images of acceptable identification documents (such as
                passports or driver's licenses) for each owner. If the person
                who filed your entity formation documents (the applicant) is not
                one of the beneficial owners, their information will also get
                collected.
              </li>
            </ul>
            <p className="mt-8 text-black">
              Our service simplifies FinCEN reporting, saving you time and
              ensuring precision. Take the first step toward effortless
              reporting – get started today and be compliant in minutes!
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mx-3 mb-3 mt-3 self-start rounded px-6 py-2 text-black">
                  Start My Filling Process!
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mx-3 mb-3 mt-3 self-start rounded px-6 py-2 text-black">
                  Start My Filling Process!
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mx-3 mb-3 mt-3 self-start rounded px-6 py-2 text-black">
                  Start My Filling Process!
                </button>
              </Link>
            )}
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-black">
              How are LLCs integrated into the Beneficial Ownership Information
              Reporting Rule?
            </h3>
            <p className="mt-8 text-black">
              Owners of LLCs must adhere to the new reporting regulation,
              regardless of whether the company is single-member or
              multi-member. This entails submitting crucial company and owner
              information to FinCEN.
            </p>
          </div>
          <div>
            {" "}
            <Image src={mandesk} className="rounded p-3" alt="Step 1" />
          </div>
        </div>
        <div class="mt-8 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div>
            {" "}
            <Image src={womanpapaer} className="rounded p-3" alt="Step 1" />
          </div>
          <div>
            <h3 className="text-black">
              Who is exempt from filing a Beneficial Ownership Information
              Report?
            </h3>
            <p className="mt-8 text-black">
              Certain entities, such as publicly traded companies, tax-exempt
              nonprofits, specific large operating companies, and others meeting
              particular criteria, are exempt from this obligation. The
              Financial Crimes Enforcement Network delineates 23 types of exempt
              entities and identifies individuals who do not meet the criteria
              as beneficial owners under this regulation.
            </p>

            <p className="mt-8 text-black">
              Explore whether your company qualifies for an exemption from the
              Beneficial Ownership Information Reporting Rule using our
              convenient "Verify My Company" tool, streamlining the process to
              allow you to concentrate on your business.
            </p>
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Check My Status
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Check My Status
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="button mt-12 rounded px-12 py-2 font-extrabold text-black">
                  Check My Status
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
