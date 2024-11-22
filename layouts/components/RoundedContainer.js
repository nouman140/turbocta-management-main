import React from "react";

const RoundedContainer = ({ children, className = "", isPadding = true }) => {
  let paddingClass = isPadding ? "p-4 md:p-6" : "";
  return (
    <div className={` container my-11 ${className}`}>
      <div
        className={`border min-h-screen  border-black rounded-3xl  border-opacity-40 ${paddingClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default RoundedContainer;
