import axios from "axios";

const SET_FIELD = "SET_FIELD";

const GET_GRADE = "GET_GRADE";
const GET_GRADE_FULFILLED = "GET_GRADE_FULFILLED";

const GET_STUDENT = "GETSTUDENT";
const GETSTUDENT_FULFILLED = "GETSTUDENT_FULFILLED";

const GET_COURSE = "GET_COURSE";
const GET_COURSE_FULFILLED = "GET_COURSE_FULFILLED";

const GET_STUDENT_INSEC = "GET_STUDENT_INSEC";
const GET_STUDENT_INSEC_FULFILLED = "GET_STUDENT_INSEC_FULFILLED";

const SAVE_GRADE = "SAVE_GRADE";
const SAVE_GRADE_FULFILLED = "SAVE_GRADE_FULFILLED";

const MENU = "MENU";
const MENU2 = "MENU2";
const MENU1 = "MENU1";
const MENU4 = "MENU4";

const initialState = {
  gradeResult: [],
  studentList: [],
  courseList: [],
  studentInSecList: [],
  studentName: "",
  studentCode: "",
  studentFaculty: "",
  gpax: "",
  queryCourse: "true",
  queryStudent: "true",
  courseDetail: "",
  configStudentInSecList: "true",
  CID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };

    case GET_GRADE_FULFILLED:
      return {
        ...state,
        gradeResult: action.payload.data,
        gpax: action.payload.gpax
      };

    case GETSTUDENT_FULFILLED:
      return {
        ...state,
        studentList: action.payload
      };

    case GET_STUDENT_INSEC_FULFILLED:
      return {
        ...state,
        studentInSecList: action.payload,
        configStudentInSecList: "true"
      };

    case GET_COURSE_FULFILLED:
      return {
        ...state,
        courseList: action.payload
      };

    case MENU2:
      return {
        ...state,
        queryStudent: "true"
      };

    case MENU4:
      return initialState;

    case MENU1:
      return {
        ...state,
        queryCourse: "true"
      };

    case SAVE_GRADE_FULFILLED:
      return {
        ...state
      };

    default:
      return state;
  }
};

export const setFieldT = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const getGrade = userId => ({
  type: GET_GRADE,
  payload: axios
    .post("http://localhost:8000/getGrade", {
      studentId: userId
    })
    .then(function(response) {
      return { data: response.data.studentGrade, gpax: response.data.gpax };
    })
});

export const menu = e => ({
  type: MENU + e.key,
  e
});

export const getStudent = userId => ({
  type: GET_STUDENT,
  payload: axios
    .post("http://localhost:8000/getAdvisee", {
      teacherId: userId
    })
    .then(function(response) {
      return response.data.student;
    })
});

export const getCourse = userId => ({
  type: GET_COURSE,
  payload: axios
    .post("http://localhost:8000/teachCourse", {
      teacherId: userId
    })
    .then(function(response) {
      return response.data.course;
    })
});

export const getStudentInSec = (CID, academicyear, term, secnumber) => ({
  type: GET_STUDENT_INSEC,
  payload: axios
    .post("http://localhost:8000/getStudentInSec", {
      CID: CID,
      academicyear: academicyear,
      term: term,
      secnumber: secnumber
    })
    .then(function(response) {
      return response.data.student;
    })
});

export const saveGrade = (studentInSecList, CID, academicyear, term) => ({
  type: SAVE_GRADE,
  payload: axios
    .post("http://localhost:8000/saveGrade", {
      CID: CID,
      academicyear: academicyear,
      term: term,
      courseGrade: studentInSecList
    })
    .then(function(response) {
      console.log("HERERE");
      console.log(studentInSecList, CID, academicyear, term);
      console.log(response);
    })
});
