import React, { createRef, useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";

import {
  Wrapper,
  Spacer,
  ImageDiv,
  SvgImage2,
  ContentDiv,
  Heading,
  SubHeading,
  DownLoadLink,
  Button
} from "styles/HomeStyle";

import downloadfile from "asset/2020학년도입학전형요강(최종).pdf";

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

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Wrapper ref={Reference}>
        <Spacer />
        <ImageDiv scroll={scroll ? 1 : 0}>
          <SvgImage2 scroll={scroll ? 1 : 0} />
        </ImageDiv>
        <Spacer />
        <ContentDiv>
          <Heading scroll={scroll ? 1 : 0}>
            수험자 안내사항을
            <br />
            확인하세요
          </Heading>
          <SubHeading scroll={scroll ? 1 : 0}>
            입학전형요강 PDF파일을 다운받을 수 있습니다.
          </SubHeading>
          <DownLoadLink href={downloadfile} download>
            <Button scroll={scroll ? 1 : 0}>
              <Icon>get_app</Icon>
              다운로드
            </Button>
          </DownLoadLink>
        </ContentDiv>
        <Spacer />
      </Wrapper>
    </>
  );
};

export default Info;
