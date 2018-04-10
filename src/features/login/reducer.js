import axios from "axios";

const SET_FIELD = "SET_FIELD";
const SET_TYPE = "SET_TYPE";

const initialState = {
  userId: "",
  password: "",
  userType: "",
  loginSuccess : "",
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
        userType: action.userT
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
