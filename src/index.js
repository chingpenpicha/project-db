import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import loginReducer from "./features/login/reducer";
import studentReducer from "./features/student/reducer";
import teacherReducer from "./features/teacher/reducer";
import searchReducer from "./features/common/reducer";
import promiseMiddleware from "redux-promise-middleware";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.js";

import "antd/dist/antd.css";

const rootReducer = combineReducers({
  login: loginReducer,
  student: studentReducer,
  teacher: teacherReducer,
  search: searchReducer
});
// 1 store มีหลาย reducer ได้ แต่ต้องไป รวมให้มาเป็น reducer อันใหญ่อันเดียวก่อนละค่อยใส่ลงไปใน createStore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
