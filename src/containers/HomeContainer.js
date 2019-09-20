import React, { useEffect } from "react";

import HomeHeader from "components/HomeHeader";
import Info from "components/Home/Info";
import Notice from "components/Home/Notice";
import QnAInfo from "components/Home/QnAInfo";

const HomeContainer = () => {
  return (
    <>
      <HomeHeader />
      <Info />
      <Notice />
      <QnAInfo />
    </>
  );
};

export default HomeContainer;
