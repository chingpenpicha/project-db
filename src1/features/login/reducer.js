import axios from "axios";

const SET_FIELD = "SET_FIELD";
const SET_TYPE = "SET_TYPE";
const LOGIN_VERIFY = "LOGIN_VERIFY";
const LOGIN_VERIFY_FULFILLED = "LOGIN_VERIFY_FULFILLED";
const LOGIN_VERIFY_STUDENT = "LOGIN_VERIFY_STUDENT";
const LOGIN_VERIFY_TEACHER = "LOGIN_VERIFY_TEACHER";
const LOGIN_VERIFY_STUDENT_FULFILLED = "LOGIN_VERIFY_STUDENT_FULFILLED";
const LOGIN_VERIFY_TEACHER_FULFILLED = "LOGIN_VERIFY_TEACHER_FULFILLED";

const initialState = {
  userId: '',
  userIdTmp : '',
  password: '',
  userType: '',
  loginSuccess : '',
  userInformation:[],
};

export default (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case SET_TYPE:
      return {
        ...state,
        userType: action.userT
      };
    case LOGIN_VERIFY_STUDENT_FULFILLED:
      return {
        ...state,
        loginSuccess: action.payload.valid,
        userInformation: action.payload
      };
    case LOGIN_VERIFY_TEACHER_FULFILLED:
      return {
        ...state,
        loginSuccess: action.payload.valid,
        userInformation: action.payload
      };
    default:
      return state;
  }
};

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const setType = userT => ({
  type: SET_TYPE,
  userT
});

export const loginVerifyStudent = (username, password) => ({
  type: LOGIN_VERIFY_STUDENT,
  payload: axios
    .post("http://localhost:8000/student_reg", {
      username: username,
      password: password
    })
    .then(function(response) {
      console.log(username);
      if (response.data.valid == "true") {
        return response.data;
      } else {
        return {
          valid: "false",
          Fname: "null",
          Lname: "null",
          faculty: "null"
        };
      }
    })
});

export const loginVerifyTeacher = (username, password) => ({
  type: LOGIN_VERIFY_TEACHER,
  payload: axios
    .post("http://localhost:8000/teacher_reg", {
      username: username,
      password: password
    })
    .then(function(response) {
      console.log(username);
      if (response.data.valid == "true") {
        return response.data;
      } else {
        return {
          valid: "false",
          Fname: "null",
          Lname: "null",
          faculty: "null"
        };
      }
    })
});
