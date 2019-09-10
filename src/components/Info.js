import React from "react";
import styled from "styled-components";
import oc from "open-color";

import DateCounter from "components/DateCounter";

import { ReactComponent as Img1 } from "asset/info_image_1.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  color: ${oc.gray[9]};

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const ContentDiv = styled.div`
  margin: auto 0;
  box-sizing: border-box;
  display: block;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Text1 = styled.span`
  font-size: 3.5rem;
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
`;

const DateDiv = styled.div`
  margin-top: 20px;
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
  height: 100%;
  display: flex;
  box-sizing: border-box;

  animation-name: MoveUpImage;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 30px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
    }
  }
`;

const SvgImage = styled(Img1)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .avatar {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;

    @keyframes FadeInItems {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
      }
    }
  }
  .desc {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }

  .person {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
  }

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Info = () => {
  return (
    <Wrapper>
      <Spacer />
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
      <Spacer />
      <ImageDiv>
        <SvgImage />
      </ImageDiv>
      <Spacer />
    </Wrapper>
  );
};

export default Info;
