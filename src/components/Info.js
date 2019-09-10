import React, { useState, useEffect, createRef } from "react";
import {
  Wrapper,
  Spacer,
  ContentDiv,
  Heading,
  SubHeading,
  Button,
  DateDiv,
  ImageDiv,
  SvgImage1
} from "styles/HomeStyle";

import DateCounter from "components/DateCounter";

const Info = () => {
  const [scroll, setScroll] = useState(false);
  const [Reference, setReference] = useState(() => createRef());

  const posTop = () => {
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else if (document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = Reference.current;
    const top = posTop();
    const elementPositionY = element.getBoundingClientRect().top + top;
    const scrollPositionY = window.scrollY
      ? window.scrollY
      : window.pageYOffset;
    const windowHeight = window.innerHeight;
    if (scrollPositionY + windowHeight >= elementPositionY + 700) {
      setScroll(true);
    }
  };
  return (
    <Wrapper ref={Reference}>
      <Spacer />
      <ContentDiv>
        <Heading scroll={scroll}>
          온라인으로
          <br />
          간편하게 원서접수
        </Heading>
        <SubHeading scroll={scroll}>
          광주소프트웨어마이스터고등학교 원서접수 시스템
        </SubHeading>
        <Button scroll={scroll}>지금 접수하기</Button>
        <DateDiv>
          <DateCounter endDate={"09/14/19 0:12:43"} />
          <span>접수 마감까지 남은 시간</span>
        </DateDiv>
      </ContentDiv>
      <Spacer />
      <ImageDiv scroll={scroll}>
        <SvgImage1 />
      </ImageDiv>
      <Spacer />
    </Wrapper>
  );
};

export default Info;
