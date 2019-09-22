import React, { useState, useContext } from "react";
import styled from "styled-components";
import oc from "open-color";

import Signin from "components/Auth/Signin";
import AuthContextProvider, { useStateValue } from "context/AuthContext";

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

const LoginButton = styled.button`
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
  outline: none;

  &:hover {
    border: 2px solid ${oc.gray[8]};
    background-color: ${oc.gray[1]};
    color: ${oc.gray[8]};
  }
`;

const LogoutButton = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 1rem;
  font-weight: 600;
  width: 5rem;
  height: 2rem;
  margin: 0 15px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${oc.gray[9]};
  color: white;
  outline: none;

  &:hover {
    background-color: ${oc.gray[9]};
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const Header = () => {
  const [modal, setModal] = useState(false);
  const user = useStateValue();

  const n = null;

  const returnModal = () => {
    if (modal) {
      return (
        <Modal>
          <Signin toggleModal={toggleModal} />
        </Modal>
      );
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const logOut = () => {
    localStorage.removeItem("ipse-token");
    window.location.reload();
  };

  const returnLoginButton = () => {
    console.log(user.isloggedin);

    if (user.isloggedin) {
      return <LogoutButton onClick={logOut}>로그아웃</LogoutButton>;
    } else {
      return <LoginButton onClick={toggleModal}>로그인</LoginButton>;
    }
  };

  return (
    <AuthContextProvider>
      <Positioner>
        <ContentDiv>
          <h1 style={{ margin: `15px`, fontWeight: `400` }}>잎새</h1>
          <Spacer />
          {returnLoginButton()}
        </ContentDiv>
      </Positioner>
      {returnModal()}
    </AuthContextProvider>
  );
};

export default Header;
