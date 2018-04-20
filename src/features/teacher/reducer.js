import axios from "axios";

const SET_FIELD = "SET_FIELD";

const GET_GRADE = "GET_GRADE";
const GET_GRADE_FULFILLED = "GET_GRADE_FULFILLED";

const GET_STUDENT = "GETSTUDENT"
const GETSTUDENT_FULFILLED = "GETSTUDENT_FULFILLED"

const MENU = "MENU"
const MENU2 = "MENU2"

const initialState = {
  gradeResult: [],
  studentList: [],
  studentName: "",
  studentCode: "",
  studentFaculty: "",
  gpax: "",
  queryStudent: true
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
        gpax : action.payload.gpax,
      };

    case GETSTUDENT_FULFILLED:
      return {
        ...state,
        studentList : action.payload,
      }

    case MENU2 :
      return{
        ...state,
        queryStudent : "true"
      }

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
      return {data : response.data.studentGrade, gpax : response.data.gpax};
    })
});

export const menu = e => ({
  type : MENU + e.key,
  e
})

export const getStudent = userId => ({
  type: GET_STUDENT,
  payload : axios
    .post("http://localhost:8000/getAdvisee",{
      teacherId : userId
    }).then(function(response){
        return response.data.student;
    })
});
