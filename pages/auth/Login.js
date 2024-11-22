"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "store/actions/authAction";
import Link from "next/link";
export default function Login() {
  const { uid } = useSelector((state) => state.authUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.user);
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin(formData.email, formData.password, () => {
        setFormData(initialState);
      })
    );
  };
  useEffect(() => {
    if (uid) {
      router.push("/");
    } else {
      router.push("/auth/Login");
    }
  }, [uid]);
  return (
    <section className="section h-full bg-primary">
      <div className="container py-32">
        <div className="row ">
          <div className="col-12 flex items-center justify-center">
            <form
              class="w-96 space-y-6 rounded bg-white p-4 shadow-sm"
              onSubmit={handleSubmit}
            >
              <h3 class="text-center text-xl font-semibold text-gray-900 dark:text-white">
                Sign In
              </h3>
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  value={formData.password}
                  required
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                class="w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:primary focus:ring-4 focus:ring-blue-300 dark:primary dark:hover:bg-primary dark:focus:ring-primary"
                disabled={loader}
              >
                {loader ? (
                  <>
                    {/* <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg> */}
                    loading...
                  </>
                ) : (
                  "Login to your account"
                )}
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ">
                Not registered?{" "}
                <Link
                  href="/auth/Signup"
                  class="text-primary hover:underline dark:text-primary"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
