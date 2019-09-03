import React from "react";
import styled from "styled-components";
import oc from "open-color";

import DateCounter from "components/DateCounter";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`;

const ContentDiv = styled.div`
  margin: auto 0;
  display: block;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 5rem;
  margin: 0 auto;

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
  width: 12rem;
  height: 3.5rem;
  margin: 15px;
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

const Info = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <Logo>EntryGSM</Logo>
        <SubHeading>광주소프트웨어마이스터고등학교 원서접수</SubHeading>
        <Description>온라인으로 간편하게 원서접수하세요</Description>
        <EntryButton>접수하기</EntryButton>
        <DateDiv>
          <DateCounter endDate={"09/04/20 0:12:43"} />
          <span>접수 마감까지 남은 시간</span>
        </DateDiv>
      </ContentDiv>
    </Wrapper>
  );
};

export default Info;
