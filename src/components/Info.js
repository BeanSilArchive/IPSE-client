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
  margin: auto;
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
`;

const Info = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <Logo>EntryGSM</Logo>
        <h2>광주소프트웨어마이스터고등학교 원서접수</h2>
        <span>온라인으로 간편하게 원서접수하세요</span>
        <EntryButton>접수하기</EntryButton>
        <DateCounter endDate={"09/04/19 0:12:43"} />
        <span>접수 마감까지 남은 시간</span>
      </ContentDiv>
    </Wrapper>
  );
};

export default Info;
