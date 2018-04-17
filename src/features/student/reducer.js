import axios from "axios";

const SET_FIELD = "SET_FIELD";
const CONFIRM_REGIST = "CONFIRM_REGIST"
const GET_REGIST_FULFILLED = "GET_REGIST_FULFILLED"
const GET_REGIST = "GET_REGIST"
const CONFIRM_REGIST_FULFILLED = "CONFIRM_REGIST_FULFILLED"
const DROP_COURSE = "DROP_COURSE"
const DROP_COURSE_FULFILLED = "DROP_COURSE_FULFILLED"
const GET_REGISTW = "GET_REGISTW"
const GET_REGISTW_FULFILLED = "GET_REGISTW_FULFILLED"
const WITHDRAW_COURSE = "WITHDRAW_COURSE"
const WITHDRAW_COURSE_FULFILLED = "WITHDRAW_COURSE_FULFILLED"
const MENU = "MENU"
const MENU6 = "MENU6"
const MENU2 = "MENU2"
const MENU3 = "MENU3"
const MENU5 = "MENU5"
const GET_GRADE = "GET_GRADE"
const GET_GRADE_FULFILLED = "GET_GRADE_FULFILLED"

const initialState = {
  queryRegist: "true",
  queryRegistW: "true",
  queryGrade : "true",
  dropCourse : [],
  courseRegist: "-",
  courseRegistW: "-",
  ci0 : "",st0 : "",
  ci1 : "",st1 : "",
  ci2 : "",st2 : "",
  ci3 : "",st3 : "",
  ci4 : "",st4 : "",
  ci5 : "",st5 : "",
  ci6 : "",st6 : "",
  ci7 : "",st7 : "",
  ci8 : "",st8 : "",
  ci9 : "",st9 : "",
  gradeResult : [{
      academicYear : "2017",
      semester : "1",
      courseGrade : [{
          courseId: "213112",
          courseName: "DB",
          credit: "3",
          grade: "A"
        },
        {
          courseId: "211111",
          courseName: "SA",
          credit: "3",
          grade: "A"
        }
      ]
    },{
        academicYear : "2017",
        semester : "2",
        courseGrade : [{
            courseId: "213113",
            courseName: "DBX",
            credit: "3",
            grade: "A"
          },
          {
            courseId: "211112",
            courseName: "SAT",
            credit: "3",
            grade: "A"
          }
        ]
      }
  ]

};


export default (state = initialState ,action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };

    case CONFIRM_REGIST_FULFILLED:
      return {
        ...state,
        queryRegist : "true",
        queryRegistW : "true"
      };

    case GET_REGIST_FULFILLED:
     return {
       ...state,
       courseRegist : action.payload
     }

     case GET_REGISTW_FULFILLED:
      return {
        ...state,
        courseRegistW : action.payload
      }

     case DROP_COURSE_FULFILLED :
       return {
         ...state,
         queryRegistW : "true",
         queryRegist : "true"
       }

     case WITHDRAW_COURSE_FULFILLED :
      return {
        ...state,
        queryRegistW : "true"
      }

     case MENU6:
        return {
          ...state,
          queryRegist: "true",
          courseRegist: "-",
          ci0 : "",st0 : "",
          ci1 : "",st1 : "",
          ci2 : "",st2 : "",
          ci3 : "",st3 : "",
          ci4 : "",st4 : "",
          ci5 : "",st5 : "",
          ci6 : "",st6 : "",
          ci7 : "",st7 : "",
          ci8 : "",st8 : "",
          ci9 : "",st9 : "",
          studentGrade : []
      }
      case MENU2:
        return{
          ...state,
          queryRegistW : "true",
          dropCourse: []
        }
      case MENU5:
        return{
          ...state,
          searchResult : []
        }
      case MENU3:
        return{
          ...state,
          queryGrade : "true"
        }

      case GET_GRADE_FULFILLED:
        return{
          ...state,
          gradeResult : action.payload
        }

    default:
      return state;
  }
};

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const confirmRegist = (courseRegist,userId) => ({
  type: CONFIRM_REGIST,
  courseRegist,
  payload: axios.post('http://localhost:8000/saveReg',{
        courseRegist : courseRegist,
        studentId : userId,
    })
    .then(function(response) {
    })
});

export const getRegist = (userId) => ({
  type: GET_REGIST,
  payload: axios.post('http://localhost:8000/getRegSubject',{
        studentId : userId,
    })
    .then(function(response) {
      return response.data.courseRegist
    })
});

export const getRegistW = (userId) => ({
  type: GET_REGISTW,
  payload: axios.post('http://localhost:8000/getRegNoW',{
        studentId : userId,
    })
    .then(function(response) {
      return response.data.courseRegist
    })
});

  export const menu = (e) => ({
    type : MENU + e.key,
    e,
  })

    export const dropCourse = (userId,dropCourse) => ({
      type : DROP_COURSE,
      payload: axios.post('http://localhost:8000/dropSubject',{
        studentId : userId,
        dropCourse : dropCourse,
    }).then(function(response) {
    })
});

  export const withDrawCourse = (userId,courseWithdraw) => ({
    type : WITHDRAW_COURSE,
    payload : axios.post('http://localhost:8000/withdrawSubject',{
      studentId : userId,
      courseWithdraw : courseWithdraw,
    }).then(function(response){
    })
  })

  export const getGrade = (userId) => ({
    type : GET_GRADE,
    payload : axios.post('http://localhost:8000/getGrade',{
      studentId : userId
    }).then(function(response){
      return response.data.studentGrade
    })
  })
