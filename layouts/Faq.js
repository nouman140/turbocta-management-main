import { markdownify } from "@lib/utils/textConverter";
import FAQS from "./components/Home/FAQS";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section -mt-14">
      <div className="bg-primary">
        <div className="container py-24">
          <h2 className=" text-center text-white">FAQ</h2>
          <h4 className="mt-8 text-center text-white">
            Comprehensive handbook for beneficial ownership information
            reporting” to “Answers for for beneficial ownership information
            reporting”
          </h4>
          <p className="mt-5 text-center text-white">
            Please be aware that the information provided here is intended for
            clarification purposes only and does not modify any legal
            obligations mandated by statutes or regulations. For comprehensive
            details, please consult the Beneficial Ownership Information
            Reporting Rule at fincen.gov/boi.
          </p>
        </div>
      </div>
      <div className="container ">
        <FAQS />
      </div>
    </section>
  );
}

export default Faq;
