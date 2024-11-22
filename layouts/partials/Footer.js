"use client";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-white.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { subscribeEmail } from "store/actions/emailAction";
const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
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
    <footer className="section calculate pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-2" key={col.name}>
                {markdownify(col.name, "h4", "theme-color")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1 text-white" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-6">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(
              "Enter your email to receive important Corporate Transparency Act alerts and updates released by FinCEN.",
              "span",
              "mt-3 mb-6 text-white"
            )}
            <div className="mt-5 flex">
              <input
                type="email"
                class="mb-4 w-full border border-gray-300 bg-gray-200 px-4 "
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <button
                className="button mb-4 w-96  font-bold text-black"
                disabled={loading}
                onClick={() => {
                  if (error == "") {
                    const detail = {
                      email: email,
                    };
                    dispatch(
                      subscribeEmail(detail, () => {
                        setEmail("");
                      })
                    );
                  } else {
                    alert(error);
                  }
                }}
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </div>
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(
            "Copyright © 2024 TurboCTA",
            "p",
            "text-sm text-center text-white"
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
