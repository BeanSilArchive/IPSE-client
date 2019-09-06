import React from "react";
import styled from "styled-components";
import oc from "open-color";

import DateCounter from "components/DateCounter";

import { ReactComponent as Img1 } from "asset/info_image_1.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
  box-sizing: border-box;
  display: flex;
`;

const ContentDiv = styled.div`
  margin-top: 200px;
  margin-left: 150px;
  box-sizing: border-box;
  display: block;
  min-width: 550px;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.span`
  font-size: 4rem;
  margin: 0;

  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SubHeading = styled.h2`
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.7s;
`;

const Description = styled.span`
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.9s;
`;

const EntryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 2rem;
  font-weight: 600;
  width: 20rem;
  height: 3.5rem;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${oc.gray[9]};
  letter-spacing: 2px;

  &:hover {
    background-color: ${oc.gray[9]};
    color: ${oc.gray[0]};
  }

  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DateDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  animation-name: MoveUp;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;

  padding-bottom: 15px;

  @keyframes MoveUp {
    0% {
      opacity: 0;
      padding-top: 15px;
      padding-bottom: 0px;
    }
    50% {
      opacity: 0;
      padding-top: 15px;
      padding-bottom: 0px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
      padding-bottom: 15px;
    }
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  animation-name: MoveUpImage;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 15px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
    }
  }
`;

const Info = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <Text1>
          온라인으로
          <br />
          간편하게 원서접수
        </Text1>
        <SubHeading>광주소프트웨어마이스터고등학교 원서접수 시스템</SubHeading>
        <EntryButton>지금 접수하기</EntryButton>
        <DateDiv>
          <DateCounter endDate={"09/14/19 0:12:43"} />
          <span>접수 마감까지 남은 시간</span>
        </DateDiv>
      </ContentDiv>
      <ImageDiv>
        <Img1 style={{ width: `100%`, margin: `auto 0` }} />
      </ImageDiv>
    </Wrapper>
  );
};

export default Info;
