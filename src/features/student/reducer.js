import axios from "axios";

const SET_FIELD = "SET_FIELD";

const initialState = {
  courseRegist: [{test0 : "test"},{test1 : "test"}],
  ci0 : "", cn0 : "", st0 : "",cd0 : "",
  ci1 : "", cn1 : "", st1 : "",cd1 : "",
  ci2 : "", cn2 : "", st2 : "",cd2 : "",
  ci3 : "", cn3 : "", st3 : "",cd3 : "",
  ci4 : "", cn4 : "", st4 : "",cd4 : "",
  ci5 : "", cn5 : "", st5 : "",cd5 : "",
  ci6 : "", cn6 : "", st6 : "",cd6 : "",
  ci7 : "", cn7 : "", st7 : "",cd7 : "",
  ci8 : "", cn8 : "", st8 : "",cd8 : "",
  ci9 : "", cn9 : "", st9 : "",cd9 : "",
  menuSelect: "",
  studentName: "Kongnut Songwattana",
  studentCode: "5830047621",
  studentFaculty: "Engineering",
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

    default:
      return state;
  }
};

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});
