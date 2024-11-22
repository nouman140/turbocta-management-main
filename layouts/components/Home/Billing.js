import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Billing() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="bg-white">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1">
          <h6 className=" font-bold text-primary">BOIR FILING COMPARISON</h6>
          <h4 className="mt-4 text-black">
            Access exclusive benefits for your BOI filing at unbeatable prices
          </h4>
          <p className="mt-8 text-black">
            Opting for TurboCTA ensures swift compliance, allowing you to focus
            on running your business. We provide all the benefits to simplify
            beneficial ownership information reporting without overspending on
            compliance.
          </p>
          <table className="mt-12 w-full table-auto border-collapse border border-primary">
            <thead className="bg-primary">
              <tr>
                <th className="px-4 py-2" colSpan="2"></th>
                <th className="px-4 py-2 text-white">TurboCTA</th>
                <th className="px-4 py-2 text-white">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Initial Report Cost
                </td>
                <td className="px-4 py-2 text-center">$99</td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  $99 to $900
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Updated Report Cost
                </td>
                <td className="px-4 py-2 text-center">Free</td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  $49 to $400
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Easy Explained Reporting Process
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Monthly Compliance Alerts
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Compliance Dashboard
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-blue-500">
                <td className="px-4 py-2" colSpan="2">
                  Compliance Certificates
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Multiple Companies Supported
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              {/* Add border-b class to all rows except the last one */}
              <tr className="border-b border-primary">
                <td className="px-4 py-2" colSpan="2">
                  Invite Other Owners to Add Information
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2" colSpan="2">
                  Store Info for Future Fast Report Updates
                </td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCheckCircle}
                  />
                </td>
                <td className="px-4 py-2 text-center" colSpan="2">
                  <FontAwesomeIcon className="text-red-600" icon={faTimes} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
  );
}
