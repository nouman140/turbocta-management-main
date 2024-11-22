import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function GetStarted() {
  const { uid, user } = useSelector((state) => state.authUser);
  return (
    <div className="started">
      <div className="started-body w-full p-0 py-12">
        <div className="container  mx-auto py-20">
          <h4 className="my-10 py-16 text-center text-white">
            Get started for free. Pay only when you file.
          </h4>
          <div className="-mt-12 flex items-center justify-center">
            {uid != null && user.subscription != undefined ? (
              <Link href="https://app.fincenfetch.com/">
                <button className="rounded bg-blue-600 px-12 py-2 font-extrabold text-white">
                  Start for free
                </button>
              </Link>
            ) : uid != null && user.subscription == undefined ? (
              <Link href="/checkout">
                <button className="rounded bg-blue-600 px-12 py-2 font-extrabold text-white">
                  Start for free
                </button>
              </Link>
            ) : (
              <Link href="/auth/Login">
                <button className="rounded bg-blue-600 px-12 py-2 font-extrabold text-white">
                  Start for free
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
