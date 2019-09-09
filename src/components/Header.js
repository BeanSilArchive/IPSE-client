import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: white;
  //box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`;

const ContentDiv = styled.div`
  width: 1700px;
  @media (max-width: 1700px) {
    width: 100%;
  }
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  span {
    margin: 0 15px;
    font-size: 1.05rem;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const LoginButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[7]};
  font-size: 1rem;
  font-weight: 600;
  width: 5rem;
  height: 2rem;
  margin: 0 15px;
  cursor: pointer;
  border-radius: 50px;
  color: ${oc.gray[7]};

  &:hover {
    border: 2px solid ${oc.gray[8]};
    background-color: ${oc.gray[1]};
    color: ${oc.gray[8]};
  }
`;

const Header = () => {
  return (
    <Positioner>
      <ContentDiv>
        <h1 style={{ margin: `15px` }}>EntryGSM</h1>
        <Spacer />
        <span>안내사항</span>
        <span>원서접수</span>
        <span>Q&A</span>
        <LoginButton href="/Auth">로그인</LoginButton>
      </ContentDiv>
    </Positioner>
  );
};

export default Header;
