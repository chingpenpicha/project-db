import axios from "axios";

const SET_FIELD = "SET_FIELD";

const initialState = {
  courseRegist: [{
    courseId : '1234',
    section : '1',
    courseName : 'SA',
    credit : '3'
  },
  {
    courseId : '12345',
    section : '12',
    courseName : 'Data Base',
    credit : '3'
  }],
  menuSelect : '',
  studentName : 'Kongnut Songwattana',
  studentCode : '5830047621',
  studentFaculty : 'Engineering',
  loading: false
};

let img = [];

export default (state = initialState, action) => {
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
