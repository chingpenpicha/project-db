import axios from "axios";

const SET_FIELD = "SET_FIELD";

const MENU = "MENU";
const MENU1 = "MENU1";
const MENU2 = "MENU2";
const MENU4 = "MENU4";
const MENU6 = "MENU6";
const MENU7 = "MENU7";

const GET_REGIST_FULFILLED = "GET_REGIST_FULFILLED";
const GET_REGIST = "GET_REGIST";

const CONFIRM_REGIST = "CONFIRM_REGIST";
const CONFIRM_REGIST_FULFILLED = "CONFIRM_REGIST_FULFILLED";

const DROP_COURSE = "DROP_COURSE";
const DROP_COURSE_FULFILLED = "DROP_COURSE_FULFILLED";

const GET_REGISTW = "GET_REGISTW";
const GET_REGISTW_FULFILLED = "GET_REGISTW_FULFILLED";

const WITHDRAW_COURSE = "WITHDRAW_COURSE";
const WITHDRAW_COURSE_FULFILLED = "WITHDRAW_COURSE_FULFILLED";

const GET_GRADE = "GET_GRADE";
const GET_GRADE_FULFILLED = "GET_GRADE_FULFILLED";

const PAYMENT = "PAYMENT";
const PAYMENT_FULFILLED = "PAYMENT_FULFILLED";

const SET_DOC_NAME = "SET_DOC_NAME";

const GET_DOC = "GET_DOC";
const GET_DOC_FULFILLED = "GET_DOC_FULFILLED";

const REQUEST_DOC = "REQUEST_DOC";
const REQUEST_DOC_FULFILLED = "REQUEST_DOC_FULFILLED";

const initialState = {
  queryDoc: "false",
  queryRegist: "true",
  queryRegistW: "true",
  queryGrade: "true",
  dropCourse: [],
  docName: "",
  gpax: "",
  courseRegist: "-",
  courseRegistW: "-",
  paymentStatus: [],
  docStatus: [],
  ci0: "",
  st0: "",
  ci1: "",
  st1: "",
  ci2: "",
  st2: "",
  ci3: "",
  st3: "",
  ci4: "",
  st4: "",
  ci5: "",
  st5: "",
  ci6: "",
  st6: "",
  ci7: "",
  st7: "",
  ci8: "",
  st8: "",
  ci9: "",
  st9: "",
  gradeResult: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };

    case PAYMENT_FULFILLED:
      return {
        ...state,
        paymentStatus: action.payload
      };

    case CONFIRM_REGIST_FULFILLED:
      return {
        ...state,
        queryRegist: "true",
        queryRegistW: "true"
      };

    case GET_REGIST_FULFILLED:
      return {
        ...state,
        courseRegist: action.payload
      };

    case GET_REGISTW_FULFILLED:
      return {
        ...state,
        courseRegistW: action.payload
      };

    case DROP_COURSE_FULFILLED:
      return {
        ...state,
        queryRegistW: "true",
        queryRegist: "true"
      };

    case WITHDRAW_COURSE_FULFILLED:
      return {
        ...state,
        queryRegistW: "true"
      };

    case MENU1: {
      return {
        ...state,
        queryRegist: "true"
      };
    }

    case MENU2:
      return {
        ...state,
        queryRegistW: "true",
        dropCourse: []
      };

    case MENU4:
      return {
        ...state,
        queryGrade: "true"
      };

    case MENU6:
      return {
        ...state,
        clearSearch: "true"
      };

    case MENU7:
      return {
        ...initialState
      };

    case GET_GRADE_FULFILLED:
      return {
        ...state,
        gradeResult: action.payload.data,
        gpax: action.payload.gpax
      };

    case GET_DOC_FULFILLED:
      return {
        ...state,
        docStatus: action.payload
      };

    case REQUEST_DOC_FULFILLED:
      return {
        ...state,
        queryDoc: "true"
      };

    case SET_DOC_NAME:
      return {
        ...state,
        docName: action.value
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

export const confirmRegist = (courseRegist, userId) => ({
  type: CONFIRM_REGIST,
  courseRegist,
  payload: axios
    .post("http://localhost:8000/saveReg", {
      courseRegist: courseRegist,
      studentId: userId
    })
    .then(function(response) {})
});

export const addSubject = (courseRegist, userId) => ({
  type: CONFIRM_REGIST,
  courseRegist,
  payload: axios
    .post("http://localhost:8000/addSubject", {
      courseRegist: courseRegist,
      studentId: userId
    })
    .then(function(response) {})
});

export const getRegist = userId => ({
  type: GET_REGIST,
  payload: axios
    .post("http://localhost:8000/getRegSubject", {
      studentId: userId
    })
    .then(function(response) {
      return response.data.courseRegist;
    })
});

export const getRegistW = userId => ({
  type: GET_REGISTW,
  payload: axios
    .post("http://localhost:8000/getRegNoW", {
      studentId: userId
    })
    .then(function(response) {
      return response.data.courseRegist;
    })
});

export const menu = e => ({
  type: MENU + e.key,
  e
});

export const dropCourse = (userId, dropCourse) => ({
  type: DROP_COURSE,
  payload: axios
    .post("http://localhost:8000/dropSubject", {
      studentId: userId,
      dropCourse: dropCourse
    })
    .then(function(response) {})
});

export const withDrawCourse = (userId, courseWithdraw) => ({
  type: WITHDRAW_COURSE,
  payload: axios
    .post("http://localhost:8000/withdrawSubject", {
      studentId: userId,
      courseWithdraw: courseWithdraw
    })
    .then(function(response) {})
});

export const getGrade = userId => ({
  type: GET_GRADE,
  payload: axios
    .post("http://localhost:8000/getGrade", {
      studentId: userId
    })
    .then(function(response) {
      console.log(response.data);
      return { data: response.data.studentGrade, gpax: response.data.gpax };
    })
});

export const getPayment = userId => ({
  type: PAYMENT,
  payload: axios
    .post("http://localhost:8000/getPayment", {
      studentId: userId
    })
    .then(function(response) {
      return response.data.payment;
    })
});

export const onChangeDocName = value => ({
  type: SET_DOC_NAME,
  value
});

export const getDoc = userId => ({
  type: GET_DOC,
  payload: axios
    .post("http://localhost:8000/getStatusDoc", {
      studentId: userId
    })
    .then(function(response) {
      return response.data.docStatus;
    })
});

export const requestDoc = (userId, docType) => ({
  type: REQUEST_DOC,
  payload: axios
    .post("http://localhost:8000/requestDoc", {
      studentId: userId,
      docType: docType
    })
    .then(function(response) {
      return response.data.result;
    })
});
