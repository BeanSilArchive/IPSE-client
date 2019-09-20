import React from "react";
import { createGlobalStyle } from "styled-components";

import HomeHeader from "components/HomeHeader";
import Info from "components/Home/Info";
import Notice from "components/Home/Notice";
import QnAInfo from "components/Home/QnAInfo";

const GlobalStyle = createGlobalStyle`
  body{
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat;
  scroll-snap-type: y mandatory;
  }
`;

const HomeContainer = () => {
  return (
    <>
      <GlobalStyle />
      <HomeHeader />
      <Info />
      <Notice />
      <QnAInfo />
    </>
  );
};

export default HomeContainer;
