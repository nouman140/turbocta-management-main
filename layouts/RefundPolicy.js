import React from "react";

export default function RefundPolicy() {
  return (
    <div className="container mt-5">
      <div className="px-4">
        <div className="rounded-md bg-white px-8 pb-8 shadow-lg">
          <h1 className="text-3xl font-bold">
            TurboCTA for Business Owners Refund Policy
          </h1>
          <br />

          <p className="text-black">
            Welcome to TurboCTA, your trusted platform for filing FinCEN BOI
            reports. We value your business and understand that plans can
            change. To ensure clarity and satisfaction, we have outlined our
            refund policy below:
          </p>
          <br />
          <h3 className="mb-2 text-lg font-bold">
            1. Cancellation Before Report Filing:
          </h3>
          <ul className="mx-6 list-disc text-black">
            <li>
              If you cancel your report order after payment but before we have
              begun the filing process, you are entitled to a full refund.
            </li>
          </ul>
          <h3 className="mb-2 text-lg font-bold">
            2. No Refunds for Filed Reports:
          </h3>
          <ul className="mx-6 list-disc text-black">
            <li>
              Once a report is filed, we are unable to offer a refund. We
              encourage you to review your report thoroughly before submission.
            </li>
          </ul>
          <h3 className="mb-2 text-lg font-bold">
            3. Annual Compliance Package Refunds:
          </h3>
          <ul className="mx-6 list-disc text-black">
            <li>
              If you have purchased an annual compliance package and wish to
              request a refund after filing only your initial report, we will
              refund the difference between the cost of the annual package and
              the one-time report fee.
            </li>
            <li>
              {" "}
              Please note, a processing fee of $25 will be deducted from this
              refund.
            </li>
            <li>
              No refunds can be offered if you have already filed a free updated
              report under the annual package. The cost of an additional
              standard updated report exceeds the difference between the
              one-time and ongoing compliance package costs.
            </li>
          </ul>
          <h3 className="mb-2 text-lg font-bold">
            4. Refund Request Procedure:
          </h3>
          <ul className="mx-6 list-disc text-black">
            <li>
              To initiate a refund, please contact us at support@turbocta.com.
            </li>
            <li>
              {" "}
              Refund requests are processed within two business days, and you
              will receive an email confirmation detailing the refund amount.
            </li>
          </ul>
          <h3 className="mb-2 text-lg font-bold">5. Refund Processing Time:</h3>
          <ul className="mx-6 list-disc text-black">
            <li>
              {" "}
              Refunds may take up to five business days to be credited back to
              your account, depending on your card issuer’s policies. We are
              committed to providing you with exceptional service. For any
              queries or further assistance, please do not hesitate to contact
              our support team. Thank you for choosing TurboCTA for your
              business needs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
