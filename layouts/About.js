import React from "react";
import Hero from "./components/About/Hero";
import OurSelf from "./components/About/OurSelf";
import FileCTA from "./components/About/FileCTA";
import ReportCTA from "./components/About/ReportCTA";
import TurboctaPlatform from "./components/About/TurboctaPlatform";
import GetStarted from "./components/About/GetStarted";
export default function About() {
  return (
    <>
      <Hero />
      <OurSelf />
      <FileCTA />
      <ReportCTA />
      {/* <TurboctaPlatform /> */}
      <GetStarted />
    </>
  );
}
