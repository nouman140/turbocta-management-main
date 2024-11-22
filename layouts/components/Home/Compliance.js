import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instructionEmail } from "store/actions/emailAction";

export default function Compliance() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.mails);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e?.target?.value);
    if (e?.target?.value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(e?.target?.value)) {
        setError("Invalid email address");
      } else {
        setError("");
      }
    }
  };
  return (
    <div className="bg-white">
      <div className="calculate  container mx-auto rounded py-20">
        <div className=" grid  grid-cols-1   rounded">
          <div className="p-0">
            <h3 className="text-center text-white">
              Prevent Penalties with our Complimentary Compliance Updates
            </h3>
            <p className="p-8 text-center text-white">
              Stay informed about evolving FinCEN regulations as this reporting
              requirement unfolds in 2024. Submit your email to receive our
              straightforward instructions on beneficial ownership reporting.
              Rest assured, we never share emails or inundate your inbox.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded">
          <div className="p-0">
            <input
              type="email"
              className="sm:w-50 mb-4 block rounded-md border border-gray-300 bg-gray-200 p-0 px-4 py-2 md:w-96"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <button
              className="button sm:w-50 rounded  py-2 font-bold text-black md:w-96"
              disabled={loading}
              onClick={() => {
                if (error == "") {
                  const detail = {
                    email: email,
                  };
                  dispatch(
                    instructionEmail(detail, () => {
                      setEmail("");
                    })
                  );
                } else {
                  alert(error);
                }
              }}
            >
              {loading ? "Loading..." : "Send Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
