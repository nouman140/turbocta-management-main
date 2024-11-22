import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Checkout from "@layouts/Checkout";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Exemptions from "@layouts/Exemptions";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import PrivacyPolicy from "@layouts/PrivacyPolicy";
import RefundPolicy from "@layouts/RefundPolicy";
import TermOfServices from "@layouts/TermOfServices";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import Login from "pages/auth/Login";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;
  console.log(layout, "layout");
  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "privacy-policy" ? (
        <PrivacyPolicy />
      ) : layout === "term-services" ? (
        <TermOfServices />
      ) : layout === "pricing" ? (
        <Pricing data={data} />
      ) : layout === "refund-policy" ? (
        <RefundPolicy />
      ) : layout === "checkout" ? (
        <Checkout />
      ) : layout === "about" ? (
        <About />
      ) : layout === "exemptions" ? (
        <Exemptions />
      ) : layout === "faq" ? (
        <Faq data={data} />
      ) : layout === "login" ? (
        <Login />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const allslugs = getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const regularPage = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: regularPage,
    },
  };
};
