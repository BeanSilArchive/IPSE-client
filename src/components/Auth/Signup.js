import React, { useState, useReducer } from "react";
import styled from "styled-components";
import oc from "open-color";

import * as authApi from "api/auth";

import SchoolModal from "Modal/School";

import { ReactComponent as Img1 } from "asset/signup_image_1.svg";

import ContactsIcon from "@material-ui/icons/Contacts";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";

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
  width: 25vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .tree {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;

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

  .person1 {
    /* animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.6s; */
  }

  .person2 {
    /* animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.9s; */
  }
  .suitcase {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
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
  height: 60%;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
  padding-right: 20%;
  box-sizing: border-box;

  #Login {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border: none;
    width: 45%;
    height: 100%;
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
    height: 100%;
    border-radius: 5px;
    letter-spacing: 0.5px;
    background-color: rgb(255, 255, 255);
    font-size: 1.3rem;
    cursor: pointer;
    outline: none;
  }

  ${props => (props.spinner ? `display:none` : ``)};
`;

const SchoolButton = styled.div`
  border: none;
  width: 120px;
  height: 40px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: ${oc.gray[8]};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  flex: 1;
`;

const ErrMsg = styled.p`
  color: ${oc.red[7]};
  margin: 1rem 0;
  font-size: 1rem;
`;

const Spinner = styled.div`
  ${props => (props.spinner ? `display:block` : `display:none`)};

  width: 100%;
  padding-right: 20%;
  box-sizing: border-box;
  .spinner {
    margin: auto;
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 30px;
  }

  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 10px;
    margin-right: 2px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Signin = ({ setIsSignUp }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    password: "",
    name: "",
    email: ""
  });

  const { id, password, name, email } = state;
  const [modal, setModal] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [schoolSeq, setSeq] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [spinner, setSpinner] = useState(false);

  const onChange = e => {
    dispatch(e.target);
  };

  const onSubmit = e => {
    e.preventDefault();
    setErrMsg("");

    if (id === "") {
      setErrMsg("아이디를 입력해 주세요.");
      return;
    } else if (password === "") {
      setErrMsg("비밀번호를 입력해 주세요.");
      return;
    } else if (name === "") {
      setErrMsg("이름을 입력해 주세요.");
      return;
    } else if (schoolName === "") {
      setErrMsg("학교를 입력해 주세요.");
      return;
    } else if (email === "") {
      setErrMsg("이메일을 입력해 주세요.");
      return;
    } else if (password.length < 8) {
      setErrMsg("비밀번호는 8글자 이상으로 설정해 주세요.");
      return;
    }

    setSpinner(true);

    authApi
      .register({ id, password, name, schoolName, schoolSeq, email })
      .then(result => {
        setIsSignUp(false);
        setSpinner(false);
      })
      .catch(result => {
        console.log(result.response.data.error);
        if (result.response.data.error === "002") {
          setErrMsg("이미 존재하는 아이디입니다.");
        }
        if (result.response.data.error === "001") {
          setErrMsg("잘못된 입력값입니다.");
        }
        setSpinner(false);
      });
  };

  return (
    <>
      <Wrapper>
        <Left>
          <SvgImage />
        </Left>
        <Right>
          <h1>처음이신가요?</h1>
          <span>회원가입 후 잎새로 간편하게 원서접수하세요.</span>
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
            <div id="Second">
              <PersonIcon />
              <input
                type="name"
                placeholder="이름"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div id="Second">
              <SchoolIcon />
              <input
                style={{ pointerEvents: `none` }}
                type="schoolName"
                placeholder="학교"
                name="schoolName"
                value={schoolName}
                onChange={onChange}
              />
              <SchoolButton onClick={() => setModal(true)}>
                학교찾기
              </SchoolButton>
              {modal ? (
                <SchoolModal
                  setModal={setModal}
                  setSchoolName={setSchoolName}
                  setSeq={setSeq}
                />
              ) : (
                ``
              )}
            </div>
            <div id="Second">
              <EmailIcon />
              <input
                type="email"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <ErrMsg>{errMsg}</ErrMsg>
            <Spinner spinner={spinner}>
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </Spinner>
            <ButtonWrapper spinner={spinner}>
              <button id="Login" type="submit">
                회원가입
              </button>
              <Spacer />
              <button
                id="Register"
                type="button"
                onClick={() => setIsSignUp(false)}
              >
                취소
              </button>
            </ButtonWrapper>
          </Form>
        </Right>
      </Wrapper>
    </>
  );
};

export default Signin;
