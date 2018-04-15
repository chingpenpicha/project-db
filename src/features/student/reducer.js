import axios from "axios";

const SET_FIELD = "SET_FIELD";
const CONFIRM_REGIST = "CONFIRM_REGIST"
const GET_REGIST = "GET_REGIST"

const initialState = {
  courseRegist: [{test0 : "test"},{test1 : "test"}],
  courseRegistD: [{
    courseId : "-", courseName : "", section : "", credit: ""
  }],
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
  loading: false,
  studentGrade : []
};

export default (state = initialState ,action) => {
  console.log(action);
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };

    case CONFIRM_REGIST:
      return {
        ...state
      };

    case GET_REGIST:
     return {
       ...state,
       courseRegist : action.payload
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
  payload: axios.get('http://localhost:8000/saveReg',{
    params : {
        courseRegist : courseRegist,
        studentId : userId,
        test : "" }
    })
    .then(function(response) {
      console.log(response);
    })
});

export const getRegist = (courseRegist,userId) => ({
  type: GET_REGIST,
  courseRegist,
  payload: axios
    .get('http://localhost:8000/getRegSubject',{
      params : {
        sid : userId
      }
    })
    .then(function(response) {
      console.log("NEXT")
      console.log(response);
      return response.courseRegist
    })
});
