import axios from "axios";

const SET_FIELD = "SET_FIELD";
const SET_TYPE = "SET_TYPE";
const SEARCH = "SEARCH";
const SEARCH_FULFILLED = "SEARCH_FULFILLED";

const initialState = {
  CID: "",
  CABname: "",
  academicYear: "",
  term: "",
  searchResult: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case SET_TYPE:
      return {
        ...state,
        term: action.userT
      };
    case SEARCH_FULFILLED:
      return {
        ...state,
        searchResult: action.payload.response
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

export const search = (cid, cname, year, term) => ({
  type: SEARCH,
  payload: axios
    .post("http://localhost:8000/searchCourse", {
      cid: cid,
      cname: cname,
      year: year,
      term: term
    })
    .then(function(response) {
      if (response.data.result == "success") {
        return response.data;
      } else {
        return {
          searchResult: []
        };
      }
    })
});
