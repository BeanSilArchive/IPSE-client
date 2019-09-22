import axios from "axios";

import { path } from "./apipath";

export const schoolSearch = ({
  searchText
}) =>
  axios.get(path + "/api/api/application/searchSchoolList?gubun=&searchText=" + searchText);
   

export const applicantInput = ({ 
    sex, 
    birthday,
    home_phone,
    phone,
    graduation_date,
    graduation_option,
    protector_name,
    relation,
    protector_home_phone,
    protector_phone,
    teacher_name,
    teacher_phone,
    school_number,
    type
}) =>
  axios.post(path + "/api/auth/checkUser", {
    sex, 
    birthday,
    home_phone,
    phone,
    graduation_date,
    graduation_option,
    protector_name,
    relation,
    protector_home_phone,
    protector_phone,
    teacher_name,
    teacher_phone,
    school_number,
    type
  });

export const deleteApplication = ({ token }) =>
  axios.get(path + "api/application/application", {
    headers: {
      token: token
    }
  });
