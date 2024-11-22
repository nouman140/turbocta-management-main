import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactEmail } from "store/actions/emailAction";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.mails);
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [detail, setDetail] = useState(initialState);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "email" && value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Invalid email address");
      } else {
        setError("");
      }
    }
  };
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (error == "") {
                  dispatch(
                    sendContactEmail(detail, () => {
                      setDetail(initialState);
                    })
                  );
                } else {
                  alert("Please enter the valid email!");
                }
              }}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  value={detail.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  value={detail.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {error && (
                  <span className="float-left text-red-600">{error}</span>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  value={detail.message}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <button
                type="submit"
                className="rounded bg-primary px-12 py-2 text-white"
                disabled={loading}
              >
                {loading ? "Loading..." : "Send Now"}
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
