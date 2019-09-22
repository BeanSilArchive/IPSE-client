import axios from "axios";

import { path } from "./apipath";

export const register = ({
  id,
  password,
  name,
  schoolName,
  schoolSeq,
  email
}) =>
  axios.post(path + "/api/auth/register", {
    id,
    password,
    name,
    schoolName,
    schoolSeq,
    email
  });

export const login = ({ id, password }) =>
  axios.post(path + "/api/auth/login", { id, password });

export const checkUser = ({ token }) =>
  axios.get(path + "/api/auth/checkUser", {
    headers: {
      token: token
    }
  });
