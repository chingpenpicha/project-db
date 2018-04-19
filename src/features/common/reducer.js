import axios from "axios";

const SET_FIELD = "SET_FIELD";

const SEARCH_COURSE = "SEARCH_COURSE";
const SEARCH_COURSE_FULFILLED = "SEARCH_COURSE_FULFILLED";

const initialState = {
  CID: "",
  courseName: "",
  academicYear: "",
  semester: "",
  searchResult: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case SEARCH_COURSE_FULFILLED:
      return {
        ...state,
        searchResult: action.payload
      };
    default:
      return state;
  }
};

export const setFieldS = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const searchCourse = (CID, courseName, academicYear, semester) => ({
  type: SEARCH_COURSE,
  payload: axios
    .post("http://localhost:8000/searchCourse", {
      CID: CID,
      CEname: courseName,
      academicyear: academicYear,
      term: semester
    })
    .then(function(response) {
      return response.data.response;
    })
});
