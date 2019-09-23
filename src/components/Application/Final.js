import React, { useState, useReducer, createRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import oc from "open-color";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Address from 'Modal/Address';
import { Link } from 'react-router-dom';

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
  width: 1500px;
  @media (max-width: 1500px) {
    width: 100%;
  }
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    margin: 0px;
  }

  #section1 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  }

  #section2 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.6s;
  }

  #section3 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.9s;
  }

  #section4 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
  }

  #section5 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;
  }

  #section06 {
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1.8s;
  }

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

const WhiteBox = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 20px 20px 0px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const InputBox = styled.div`
  border: 1px solid black;
  width: 160px;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  flex: 1;

  span {
    margin: 0 15px;
    font-size: 1.05rem;
  }

  label {
    cursor: pointer;
    font-size: 11px;
    padding-left: 15px;
    padding-top: 7px;
  }

  input {
    height: 100%;
    width: 80%;
    border: none;
    outline: none;
    background-color: #ffffff;
    margin-left: 14px;
    font-size: 1.4rem;
    margin-bottom: 3px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-right: 0px;
    }

    input {
      height: 100%;
      width: 50%;
      border: none;
      outline: none;
      background-color: #ffffff;
      margin-left: 14px;
      font-size: 1.2rem;
      margin-bottom: 3px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const NowDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "." + mm + "." + dd;
  return today;
};

const Flex = styled.div`
  width: 90%;
`;

const Picture = styled.div`
  border: 1px solid black;
  width: 10%;
  max-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 14px;
    text-align: center;
  }

  button {
    margin-top: 20px;
  }
`;

const Animation1 = styled.div`
  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;`
      : ``}
`;

const Animation2 = styled.div`
  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 1s;`
      : ``}

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

const Animation3 = styled.div`
  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 1.5s;`
      : ``}

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
const Animation4 = styled.div`
  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 2s;`
      : ``}

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

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.name
  };
}

const Final = () => {
    const [state, dispatch] = useReducer(reducer, {
      applicantName: "",
      applicantSex: "",
      applicantBirthday: "",
      applicantHometel: "",
      applicantPhone: "",
      applicantAddress: "",
      guardianName: "",
      guardianRelation: "",
      guardianHomeTel: "",
      guardianPhone: "",
      teacherName: "",
      teacherPhone: "",
      schoolName: "",
      schoolDay: "",
      schoolLocation: "",
      schoolTel: ""
    });
  
    const {
      applicantName,
      applicantSex,
      applicantBirthday,
      applicantHometel,
      applicantPhone,
      applicantAddress,
      guardianName,
      guardianRelation,
      guardianHomeTel,
      guardianPhone,
      teacherName,
      teacherPhone,
      schoolName,
      schoolDay,
      schoolLocation,
      schoolTel
    } = state;
  

    const onChange = e => {
      dispatch(e.target);
      e.preventDefault();
    };
    

    return (
<Wrapper>
      <ContentDiv>
        <h2 id="section1">인적 사항 - 지원자</h2>
        <WhiteBox id="section1">
          <Row>
            <Flex>
              <Row>
                <InputBox>
                  <label>이름</label>
                  <input
                    placeholder="홍길동"
                    name="applicantName"
                    value={applicantName}
                    onChange={onChange}
                  />
                </InputBox>
                <InputBox>
                  <label>성별</label>
                  <input
                    placeholder={NowDate()}
                    name="applicantSex"
                    onChange={onChange}
                  />
                </InputBox>
                <InputBox>
                  <label>생년월일</label>
                  <input
                    placeholder={NowDate()}
                    name="applicantBirthday"
                    onChange={onChange}
                  />
                </InputBox>
              </Row>
              <Row>
                <InputBox>
                  <label>집전화</label>
                  <input
                    placeholder="062-649-6806"
                    name="applicantHometel"
                    onChange={onChange}
                  />
                </InputBox>
                <InputBox>
                  <label>핸드폰</label>
                  <input
                    placeholder="010-1234-5678"
                    name="applicantPhone"
                    onChange={onChange}
                  />
                </InputBox>
              </Row>
              <Row>
                <InputBox>
                  <label>주소</label>
                  <input
                    placeholder="광주광역시 광산구 상무대로 312, 광주소프트웨어마이스터고등학교"
                    name="applicantAddress"
                    onChange={onChange}
                
                  />
                </InputBox>
              </Row>
            </Flex>
            <Picture>
              <span>
                증명 사진을 <br />
                넣어주세요
              </span>
              <button type="submit">업로드 하기</button>
            </Picture>
          </Row>
        </WhiteBox>

        <h2 id="section2">인적 사항 - 보호자</h2>
        <WhiteBox id="section2">
          <Row>
            <InputBox>
              <label>이름</label>
              <input
                placeholder="홍길동"
                name="guardianName"
                onChange={onChange}
              />
            </InputBox>
            <InputBox>
              <label>지원자와의 관계</label>
              <div>
                <span>지원자 홍길동의</span>
                <input
                  placeholder="부 / 모 / 조부 / 조모"
                  name="guardianRelation"
                  onChange={onChange}
                />
              </div>
            </InputBox>
          </Row>
          <Row>
            <InputBox>
              <label>집전화</label>
              <input
                placeholder="062-649-6806"
                name="guardianHomeTel"
                onChange={onChange}
              />
            </InputBox>
            <InputBox>
              <label>핸드폰</label>
              <input
                placeholder="010-1234-5678"
                name="guardianPhone"
                onChange={onChange}
              />
            </InputBox>
          </Row>
        </WhiteBox>

        <h2 id="section3">인적 사항 - 담임 선생님</h2>
        <WhiteBox id="section3">
          <Row>
            <InputBox>
              <label>이름</label>
              <input
                placeholder="홍길동"
                name="teacherName"
                onChange={onChange}
              />
            </InputBox>
            <InputBox>
              <label>핸드폰</label>
              <input
                placeholder="010-1234-5678"
                name="teacherPhone"
                onChange={onChange}
              />
            </InputBox>
          </Row>
        </WhiteBox>

        <h2 id="section4">지원자 현황 - 출신 중학교</h2>
        <WhiteBox id="section4">
          <Row>
            <InputBox>
              <label>중학교</label>
              <input
                placeholder="광산중학교"
                name="schoolName"
                onChange={onChange}
              />
            </InputBox>
            <InputBox>
              <label>졸업예정일</label>
              <input
                placeholder={NowDate()}
                name="schoolDay"
                onChange={onChange}
              />
            </InputBox>
          </Row>
          <Row>
            <InputBox>
              <label>지역명</label>
              <input
                placeholder="광주광역시 광산구"
                name="schoolLocation"
                onChange={onChange}
              />
            </InputBox>
            <InputBox>
              <label>연락처</label>
              <input
                placeholder="062-649-6806"
                name="schoolTel"
                onChange={onChange}
              />
            </InputBox>
          </Row>
        </WhiteBox>

        <h2 id="section5">지원자 현황 - 전형 구분</h2>
        <WhiteBox id="section5">
          <FormGroup aria-label="position" name="position" row>
            <Row style={{ width: `100%` }}>
              <FormControlLabel
                style={{}}
                name="end"
                control={<Checkbox color="primary" />}
                label="일반전형"
                labelPlacement="일반전형"
                checked={false}
                style={{ width: `100%` }}
              />
              <FormControlLabel
                name="end"
                control={<Checkbox color="primary" />}
                label="마이스터인재전형"
                labelPlacement="마이스터인재전형"
                style={{ width: `100%` }}
              />
              <FormControlLabel
                id="social"
                name="end"
                control={<Checkbox color="primary" />}
                label="사회통합전형 - 기회균등전형"
                labelPlacement="사회통합전형 - 기회균등전형"
                checked={false}
                style={{ width: `100%` }}
              />
              <FormControlLabel
                id="social"
                name="end"
                control={<Checkbox color="primary" />}
                label="사회통합전형 - 사회다양성전형"
                labelPlacement="사회통합전형 - 사회다양성전형"
                checked={false}
                style={{ width: `100%` }}
              />
              <FormControlLabel
                name="end"
                control={<Checkbox color="primary" />}
                label="특별전형(정원외)"
                labelPlacement="특별전형(정원외)"
                checked={false}
                style={{ width: `100%` }}
              />
            </Row>
          </FormGroup>
        </WhiteBox>
        <div id="section06" style={{border: "1px solid black", borderRadius: "5px", marginBottom: "20px"}}>
          <Link to="/calcgrade" style={{justifyContent: "center", alignItems: "center", display: "flex", marginBottom: "20px", marginTop: "20px"}}>다음으로</Link>
        </div>

      </ContentDiv>
    </Wrapper>
    )
}

export default Final