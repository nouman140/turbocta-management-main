import React, { useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  ElementsConsumer,
  ApplePayButton,
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "store/actions/checkoutAction";
import { getUser } from "store/actions/authAction";
import { useRouter } from "next/router";
let stripePromise = loadStripe(
  "pk_test_51OzbyjLMVjLXM79opDHfp6oHOUUbD9jseQxSVVKA0zHSoO5GB3XUJMFW0W3PGPhlA1AmOUETTn6naYgloCFXvoUf00owGm1suz"
);
export default function StripeCheck() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, uid } = useSelector((state) => state.authUser);
  const [paymentLoader, setPaymentLoader] = useState(false);
  const [stripeError, setStripeError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const handleStripError = (message) => {
    setStripeError(true);
    setErrorMessage(message);
    setTimeout(() => {
      setStripeError(false);
      setErrorMessage("");
    }, 3000);
  };
  return (
    <div className="mt-5 shadow-sm">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-8">
          <h5 className="text-center">Checkout</h5>
          {/* <hr className="mt-3"/> */}
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setPaymentLoader(true);
                    const cardElement = elements.getElement(CardNumberElement);
                    const cardElement2 = elements.getElement(CardExpiryElement);
                    const cardElement3 = elements.getElement(CardCvcElement);
                    let { error } = await stripe.createPaymentMethod({
                      type: "card",
                      card: cardElement,
                      card: cardElement2,
                      card: cardElement3,
                    });
                    if (error) {
                      handleStripError(error.message);
                      setPaymentLoader(false);
                    } else {
                      const result = await stripe.createToken(cardElement);
                      if (result.error) {
                        handleStripError(error.message);
                        setPaymentLoader(false);
                      } else {
                        let body = {
                          token: result.token.id,
                          email: user?.email,
                          userId: uid,
                          amountInCents: parseInt("80") * 100,
                        };
                        dispatch(
                          checkout(body, () => {
                            setPaymentLoader(false);
                            dispatch(getUser(uid));
                            router.push("/");
                            router.push('https://app.fincenfetch.com/');
                          })
                        );
                      }
                    }
                  }}
                >
                  <label className="form_label">Card number</label>
                  <div
                    className="form-control mt-2 flex w-full rounded  border bg-white p-2  outline-none ring-0"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    <div
                      style={{
                        flexBasis: "90%",
                      }}
                    >
                      <CardNumberElement
                        className=""
                        required
                        options={{
                          placeholder: "4242 4242 4242 4242",
                          style: {
                            base: {
                              // backgroundColor: "#232733",
                              fontSize: "16px",
                            },
                            invalid: {
                              color: "#9e2146",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="form_label">Expiry Date</label>
                      <div className="mt-2 flex items-center shadow-sm">
                        <i className="fa fa-calendar"></i>
                        <div className="w-full">
                          <CardExpiryElement
                            className="w-full rounded  border bg-white p-2  outline-none ring-0"
                            required
                            options={{
                              placeholder: "MM/YY",
                              style: {
                                base: {
                                  fontSize: "16px",
                                },
                                invalid: {
                                  color: "#9e2146",
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form_label">CVC/CVV</label>
                      <div className="mt-2 flex items-center shadow-sm">
                        <div className="w-full">
                          <CardCvcElement
                            className="w-full rounded  border bg-white p-2  outline-none ring-0"
                            required
                            options={{
                              placeholder: "...",
                              style: {
                                base: {
                                  fontSize: "16px",
                                },
                                invalid: {
                                  color: "#9e2146",
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {stripeError && (
                    <p className="my-1 mb-0 text-red-500">{errorMessage}</p>
                  )}
                  <button
                    className="btn-block mt-4 rounded-lg bg-primary px-6 py-3 text-white"
                    type="submit"
                    disabled={paymentLoader}
                  >
                    {paymentLoader ? "Loading" : "Pay"}
                  </button>
                </form>
              )}
            </ElementsConsumer>
          </Elements>
        </div>
      </div>
    </div>
  );
}
