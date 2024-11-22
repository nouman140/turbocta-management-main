import React from "react";
import StripeCheckout from "./components/StripeCheckout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import stripe from "../public/images/payment.png";
export default function Checkout() {
  let stripePromise = loadStripe(
    "pk_test_51OzbyjLMVjLXM79opDHfp6oHOUUbD9jseQxSVVKA0zHSoO5GB3XUJMFW0W3PGPhlA1AmOUETTn6naYgloCFXvoUf00owGm1suz"
  );
  return (
    <div className="bg-white">
      <div className="container  mx-auto py-20">
        <div class="grid gap-16 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="">
            <Elements stripe={stripePromise}>
              <StripeCheckout />
            </Elements>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={stripe}
              className=""
              height={300}
              width={300}
              alt="Step 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
