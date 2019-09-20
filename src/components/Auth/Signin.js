import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Img1 } from "asset/Auth_main.svg";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ClearIcon from "@material-ui/icons/Clear";

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
  background-color: rgb(248, 250, 251);
  box-sizing: border-box;
  box-shadow: 0px 0px 3px gray;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
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

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SvgImage = styled(Img1)`
  width: 30vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .avatar {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;

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

  .check {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.6s;

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

  .box {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.9s;

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

  .leaf {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;

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

    @media (max-width: 1200px) {
      width: 100vw;
    }
  }
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  animation-name: FadeInItems;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;

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

  h1 {
    margin: 0px;
    margin-right: auto;
    font-size: 3rem;
    font-weight: 300;
    margin-left: 10%;
  }
  span {
    margin-top: 5%;
    margin-right: auto;
    margin-left: 10%;
    margin-bottom: 8%;
  }
`;

const Form = styled.form`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  #First {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 80%;
    background-color: rgb(239, 242, 245);
    height: 30%;
    margin-left: 10%;
    display: flex;
    align-items: center;
    svg {
      margin-left: 20px;
      font-size: 2em;
    }
    input {
      background-color: rgb(239, 242, 245);
      height: 95%;
      width: 100%;
      border: none;
      font-size: 1.1em;
      padding-left: 20px;
      font-family: "Noto Sans KR", "Noto Sans", sans-serif;

      &::placeholder {
        font-family: "Noto Serif KR", serif;
      }
    }
  }
  #Second {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 80%;
    background-color: #ffffff;
    height: 30%;
    margin-left: 10%;
    display: flex;
    align-items: center;
    svg {
      margin-left: 20px;
      font-size: 2em;
    }
    input {
      height: 95%;
      width: 100%;
      border: none;
      font-size: 1.1em;
      padding-left: 20px;
      font-family: "Noto Sans KR", "Noto Sans", sans-serif;

      &::placeholder {
        font-family: "Noto Serif KR", serif;
      }
    }
  }
  #Save-pwd {
    display: flex;
    width: 100%;
    height: 20%;
    font-size: 1rem;
    flex-direction: row;
    align-items: center;
    a {
      margin-left: auto;
      margin-right: 10%;
      text-decoration: none;
      color: black;
    }
    .round {
      position: relative;
      margin-left: 10%;
    }
    .round label {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      cursor: pointer;
      height: 28px;
      left: 0;
      position: absolute;
      top: 0;
      width: 28px;
    }
    .round label:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
    }
    .round input[type="checkbox"] {
      visibility: hidden;
    }
    .round input[type="checkbox"]:checked + label {
      background-color: #66bb6a;
      border-color: #66bb6a;
    }
    .round input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }
    span {
      margin: 0px;
      margin-top: 5px;
      margin-left: 20px;
    }
    button {
    }
  }
  #btn {
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction: row;
    margin-left: 10%;
    margin-top: 5%;
    #Login {
      box-shadow: 0px 0px 3px gray;
      border: none;
      width: 30%;
      height: 50%;
      border-radius: 50px;
      margin-right: 20px;
      color: white;
      letter-spacing: 0.5px;
      background-color: rgb(80, 142, 242);
      font-size: 1rem;
      outline: none;
    }
    #Register {
      box-shadow: 0px 0px 3px gray;
      border: none;
      width: 30%;
      height: 50%;
      border-radius: 50px;
      letter-spacing: 0.5px;
      background-color: rgb(255, 255, 255);
      font-size: 1rem;
      outline: none;
    }
  }
`;

const Signin = ({ toggleModal }) => {
  return (
    <Positioner>
      <LoginBox>
        <CancelButtonWrapper>
          <CancelButton style={{ fontSize: `3rem` }} onClick={toggleModal} />
        </CancelButtonWrapper>
        <Wrapper>
          <Left>
            <SvgImage />
          </Left>
          <Right>
            <h1>환영합니다 :)</h1>
            <span>
              광주소프트웨어 마이스터고등학교 원서접수 프로그램
              <br />
              잎새에 오신 것을 환영합니다.
            </span>
            <Form>
              <div id="First">
                <EmailIcon />
                <input type="id" placeholder="아이디" />
              </div>
              <div id="Second">
                <VpnKeyIcon />
                <input type="password" placeholder="비밀번호" />
              </div>
              <div id="Save-pwd">
                <Link to="/">Forget Password?</Link>
              </div>
              <div id="btn">
                <button id="Login" type="submit">
                  Login Now
                </button>
                <button id="Register" type="button">
                  Create Account
                </button>
              </div>
            </Form>
          </Right>
        </Wrapper>
      </LoginBox>
    </Positioner>
  );
};

export default Signin;
