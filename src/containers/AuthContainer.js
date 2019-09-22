import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";

import Signin from "components/Auth/Signin";
import Signup from "components/Auth/Signup";

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1500px;
  height: 80%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px gray;
  border-radius: 5px;
`;

const CancelButtonWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const CancelButton = styled(ClearIcon)`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  margin: 30px;
`;

const AuthContainer = ({ toggleModal }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Positioner>
      <LoginBox>
        <CancelButtonWrapper>
          <CancelButton style={{ fontSize: `3rem` }} onClick={toggleModal} />
        </CancelButtonWrapper>
        {isSignUp ? (
          <Signup setIsSignUp={setIsSignUp} />
        ) : (
          <Signin setIsSignUp={setIsSignUp} />
        )}
      </LoginBox>
    </Positioner>
  );
};

export default AuthContainer;
