import React, { useReducer } from "react";
import styled from "styled-components";
import oc from "open-color";

import * as authApi from "api/auth";

import { Link } from "react-router-dom";
import { ReactComponent as Img1 } from "asset/auth_image_1.svg";

import ContactsIcon from "@material-ui/icons/Contacts";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-name: PopUp;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  opacity: 1;

  @keyframes PopUp {
    0% {
      opacity: 0;
      padding-top: 30px;
    }
    100% {
    }
  }
`;

const SvgImage = styled(Img1)`
  width: 37vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .person {
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

  .avatar {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.9s;
  }

  .line1 {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }
  .line2 {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
  }
  .line3 {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.4s;
  }
  .line4 {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.6s;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  padding-top: 40px;

  h1 {
    margin: 0px;
    margin-right: auto;
    font-size: 3.5rem;
    font-weight: 300;
    font-family: "Do Hyeon";

    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.6s;
  }
  span {
    margin-top: 5%;
    margin-right: auto;
    margin-bottom: 30px;

    font-size: 1.2rem;

    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.9s;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  animation-name: FadeInItems;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;

  #First {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom: 1px solid ${oc.gray[4]};
    width: 80%;
    height: 30%;
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
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-family: "Noto Serif KR", serif;
      }
    }
  }
  #Second {
    /* border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px; */
    width: 80%;
    border-bottom: 1px solid ${oc.gray[4]};
    height: 30%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
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
      &:focus {
        outline: none;
      }

      &::placeholder {
        font-family: "Noto Serif KR", serif;
      }
    }
  }

  #Save-pwd {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    a {
      margin-right: 20%;

      padding: 3px 0;
      color: ${oc.gray[6]};
      &:link {
        text-decoration: none;
      }
      &:visited {
        text-decoration: none;
      }
    }
  }

  #btn {
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction: row;
    padding-right: 20%;
    margin-top: 5%;
    box-sizing: border-box;

    #Login {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      border: none;
      width: 45%;
      height: 50%;
      border-radius: 5px;
      margin-right: 20px;
      color: white;
      letter-spacing: 0.5px;
      background-color: ${oc.gray[9]};
      font-size: 1.3rem;
      cursor: pointer;
      outline: none;
    }
    #Register {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      border: none;
      width: 45%;
      height: 50%;
      border-radius: 5px;
      letter-spacing: 0.5px;
      background-color: rgb(255, 255, 255);
      font-size: 1.3rem;
      cursor: pointer;
      outline: none;
    }
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Signin = ({ setIsSignUp }) => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value
    };
  }

  const [state, dispatch] = useReducer(reducer, {
    id: "",
    password: ""
  });

  const { id, password } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  const onSubmit = e => {
    e.preventDefault();

    authApi
      .login({ id, password })
      .then(result => {
        localStorage.setItem("ipse-token", result.data.token);
        window.location.reload();
      })
      .catch(result => {
        console.log(result);
      });
  };

  return (
    <>
      <Wrapper>
        <Left>
          <SvgImage />
        </Left>
        <Right>
          <h1>어서오세요!</h1>
          <span>
            광주 소프트웨어 마이스터고등학교 원서접수 시스템,
            <br />
            잎새에 오신 것을 환영합니다.
            <br />
            로그인 후 잎새의 다양한 편의기능들을 이용하세요.
          </span>
          <Form onSubmit={onSubmit}>
            <div id="First">
              <ContactsIcon />
              <input
                type="id"
                placeholder="아이디"
                name="id"
                value={id}
                onChange={onChange}
              />
            </div>
            <div id="Second">
              <VpnKeyIcon />
              <input
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div id="Save-pwd">
              <Link to="/">비밀번호를 잊어버리셨나요?</Link>
            </div>
            <div id="btn">
              <button id="Login" type="submit">
                로그인
              </button>
              <Spacer />
              <button
                id="Register"
                type="button"
                onClick={() => setIsSignUp(true)}
              >
                회원가입
              </button>
            </div>
          </Form>
        </Right>
      </Wrapper>
    </>
  );
};

export default Signin;
