import React from "react";
import Header from "components/Header";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageTemplate;
