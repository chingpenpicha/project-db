import axios from "axios";

const SET_FIELD = "SET_FIELD";
const CONFIRM_REGIST = "CONFIRM_REGIST"

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
  menuSelect: "",
  FName: "",
  LName: "",
  studentCode: "",
  studentFaculty: "",
  loading: false,
  studentGrade : []
};

export default (state = initialState ,action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };

    case CONFIRM_REGIST:
      return {
        ...state,
        loading: false,
        result: action.payload.map(e => e.urls.small)
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

export const confirmRegist = object => ({
  type: CONFIRM_REGIST,
  object,
  payload: axios
    .get(
    )
    .then(function(response) {
      console.log(response);
    })
});
