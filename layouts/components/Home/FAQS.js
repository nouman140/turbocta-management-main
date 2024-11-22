"use client";
import React, { useState } from "react";

export default function FAQS() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const faqsDetail = [
    {
      id: 1,
      title: "What does beneficial ownership information reporting entail?",
      description:
        "Beneficial ownership entails identifying individuals who exert significant control over a company or possess at least 25 percent of its ownership interests. This transparency is vital for combatting illicit activities such as money laundering.",
    },
    {
      id: 2,
      title:
        "Who is required to submit a Beneficial Ownership Information Report?",
      description:
        "Corporations and LLCs must disclose identifying information about business owners or controllers to the Financial Crimes Enforcement Network under the Corporate Transparency Act, unless exempt.",
    },
    {
      id: 3,
      title: "How can I determine if I qualify as a beneficial owner?",
      description:
        "A beneficial owner is an individual who directly or indirectly owns or controls at least 25% of your company’s ownership interests or exercises significant control over your business operations. If you're unsure about your status, seeking advice from one of our experts can provide clarity.",
    },
    {
      id: 4,
      title:
        "What do the requirements for beneficial ownership reporting entail?",
      description:
        "Beneficial ownership reporting necessitates companies to divulge information regarding individuals exercising significant influence over the company or possessing at least 25% of its shares. Companies are required to provide details such as legal names, dates of birth, addresses, and furnish an image of an acceptable identification document, such as a passport or driver’s license, along with pertinent issuing jurisdiction and document ID number.",
    },
    {
      id: 5,
      title: "How do I obtain a Beneficial Ownership Information Report?",
      description:
        "To initiate your Beneficial Ownership Information Report, just click here. TurboCTA will generate a precise report containing identifying details about your business owners or controllers. This report will be promptly submitted to the Financial Crimes Enforcement Network, and you'll receive confirmation of successful submission for seamless compliance and peace of mind. With TurboCTA, you'll also receive timely reminders for filing your report based on your business and formation date.",
    },
    {
      id: 6,
      title: "What is the rationale behind beneficial ownership?",
      description:
        "The objective of beneficial ownership is to identify individuals who exert significant control over a company or possess at least 25 percent of its ownership interests. This fosters transparency and accountability in business operations, mitigating illicit activities such as money laundering.",
    },
    {
      id: 7,
      title: "What is the Corporate Transparency Act?",
      description:
        "The Corporate Transparency Act alters reporting requirements for beneficial ownership information, obligating businesses to identify and document individuals holding 25% or more ownership interest or substantial control. This legislation aims to enhance transparency and combat financial crimes.",
    },
    {
      id: 8,
      title: "What information is required for beneficial ownership?",
      description:
        "A beneficial owner needs to provide their full name, date of birth, address, and a valid identification document like a passport or driver’s license. This document should include details such as the issuing authority and identification number.",
    },
    {
      id: 9,
      title: "What is the beneficial ownership rule?",
      description:
        "The Beneficial Ownership Information Reporting Rule, part of the Corporate Transparency Act, requires identification of individuals benefiting from a legal entity. This rule aims for transparency and aids the government in combating financial crimes like money laundering, corruption, and fraud.",
    },
    {
      id: 10,
      title: "What is the deadline for filing a beneficial ownership report?",
      description:
        "The deadline for filing a beneficial ownership report depends on when the reporting company was created or registered.",
    },
    {
      id: 11,
      title:
        "What happens if there are changes to my business after submitting a Beneficial Ownership Information Report?",
      description:
        "When changes occur in the ownership structure or key identifying details of your business, it’s necessary to update your beneficial ownership information report.  For instance, if there’s a change in ownership due to a minor reaching adulthood or if your company gains tax-exempt status, you’ll need to submit an updated report. Similarly, if there are any inaccuracies in the initially reported information or if there are amendments to your formation documents, an updated report is required.  TurboCTA ensures that updates and changes to reports are made free of charge, allowing you to maintain compliance seamlessly. You’ll have a 30-day window from the date of the change or amendment to file the updated report.",
    },
    {
      id: 12,
      title: "What changes will LLCs experience in 2024?",
      description:
        "Members of Limited Liability Companies (LLCs) will be designated beneficial owners under the Corporate Transparency Act and must file reports with relevant federal agencies, providing detailed business and owner information.",
    },
    {
      id: 12,
      title: "Who is exempt from being listed as a beneficial owner?",
      description:
        "Exemptions from being listed as a beneficial owner include minors, individuals acting as nominees, employees without significant ownership, and those with only inheritance-based interests. To determine if your company qualifies for exemptions, you can use TurboCTA’s Company Exemption Check Tool.",
    },
    {
      id: 13,
      title: "Who qualifies as tax-exempt and may be exempt from reporting?",
      description:
        "Tax-exempt entities recognized by the IRS under section 501(c) of the Internal Revenue Code, political organizations, trusts, and entities losing tax-exempt status within 180 days may be exempt from reporting beneficial ownership information. You can verify your eligibility for exemptions using TurboCTA’s Exemption Check Tool.",
    },
    {
      id: 14,
      title:
        "What companies qualify as a large operating company and may be exempt from reporting?",
      description:
        "Tax-exempt entities recognized by the IRS under section 501(c) of the Internal Revenue Code, political organizations, trusts, and entities losing tax-exempt status within 180 days may be exempt from reporting beneficial ownership information. You can verify your eligibility for exemptions using TurboCTA’s Exemption Check Tool.",
    },
    {
      id: 15,
      title:
        "Is there an easier way for businesses to handle the BOIR process?",
      description:
        "Businesses can navigate the Beneficial Ownership Information Reporting (BOIR) process effectively by utilizing TurboCTA. The platform guides users through each step, ensures accuracy, and facilitates compliance with regulatory guidelines. TurboCTA streamlines the reporting process and reduces the risk of errors, ensuring hassle-free compliance.",
    },
  ];
  // Filter faqsDetail based on searchQuery
  const filteredFaqs = faqsDetail.filter((faq) =>
    faq.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="bg-white">
      <div className="container  mx-auto py-20">
        <div className="grid grid-cols-1">
          <div>
            <div className="border-b-4 border-black py-4">
              <h3 className="mt-5 text-black">Frequently Asked Questions</h3>
            </div>
            <input
              type="text"
              placeholder="Search by title..."
              className="mb-4 mt-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="mt-4">
              {filteredFaqs.map((item) => (
                <div id={`accordion-flush-${item.id}`} key={item.id}>
                  <h4 id={`accordion-flush-heading-${item.id}`}>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 font-medium ${
                        activeAccordion === item.id
                          ? "text-primary"
                          : "text-gray-500"
                      } rtl:text-right dark:border-gray-700 dark:text-gray-400`}
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeAccordion === item.id}
                      aria-controls={`accordion-flush-body-${item.id}`}
                    >
                      <p className="text-sm text-black font-semibold">{item.title}</p>
                      <svg
                        data-accordion-icon
                        className={`h-3 w-3 shrink-0 ${
                          activeAccordion === item.id ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h4>
                  <div
                    id={`accordion-flush-body-${item.id}`}
                    className={`border-b border-gray-200 py-5 dark:border-gray-700 ${
                      activeAccordion === item.id ? "" : "hidden"
                    }`}
                    aria-labelledby={`accordion-flush-heading-${item.id}`}
                  >
                    <p className="mb-2 text-black dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
