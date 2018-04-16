import axios from "axios";

const SET_FIELDL = "SET_FIELDL";
const SET_TYPE = "SET_TYPE";

const initialState = {
  userId: "",
  password: "",
  userType: "student",
  loginSuccess: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELDL:
      return {
        ...state,
        [action.key]: action.value
      };
    case SET_TYPE:
      return {
        ...state,
        userType: action.userT
      };
    default:
      return state;
  }
};

export const setFieldL = (key, value) => ({
  type: SET_FIELDL,
  key,
  value
});

export const setType = userT => ({
  type: SET_TYPE,
  userT
});
