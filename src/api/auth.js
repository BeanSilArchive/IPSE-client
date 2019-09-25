import axios from "axios";

import { path } from "./apipath";

export const register = (
  { id, password, name, schoolName, schoolSeq, email } // 회원가입
) => {
  console.log({ id, password, name, schoolName, schoolSeq, email });
  return axios.post(path + "/api/auth/register", {
    id: id,
    password: password,
    name: name,
    school_name: schoolName,
    school_seq: schoolSeq,
    email: email
  });
};

export const login = (
  { id, password } // 로그인
) => axios.post(path + "/api/auth/login", { id, password });

export const checkUser = (
  { token } // 유저 일반 정보 반환
) =>
  axios.get(path + "/api/auth/checkUser", {
    headers: {
      token: token
    }
  });

export const emailCheck = (
  { key } // 이메일 인증
) => axios.get(path + "api/auth/confirmEmail?key=" + key);

export const checkEmailValid = (
  { token } // 이메일 인증 확인
) =>
  axios.get(path + "/api/auth/checkValidation", {
    headers: {
      token: token
    }
  });

export const changePassword = (
  { user_id, password } // 비밀번호 변경
) =>
  axios.patch(path + "api/auth/changePw", {
    user_id,
    password
  });

export const emailSendChangePassWord = (
  { user_id } // 비밀번호 변경 이메일 전송
) =>
  axios.patch(path + "api/auth/sendChangePw", {
    user_id
  });

export const checkPW = (
  { token, password } // 비밀번호 일치 여부 확인
) =>
  axios.post(path + "api/auth/checkPw", {
    headers: {
      token: token
    },
    password
  });

export const deleteUser = (
  { user_id } // 회원 삭제
) =>
  axios.delete(path + "api/auth/deleteUser", {
    user_id
  });

export const updateUser = (
  { name, school, grade, _class, number } // 회원 일반 정보 수정
) =>
  axios.patch(path + "api/auth/updateGeneral", {
    name,
    school,
    grade,
    _class,
    number
  });
