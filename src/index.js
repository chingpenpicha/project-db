import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import loginReducer from "./features/login/reducer";
import studentReducer from "./features/student/reducer";
import promiseMiddleware from "redux-promise-middleware";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage";

import "antd/dist/antd.css";

const rootReducer = combineReducers({
  login: loginReducer,
  student: studentReducer
});
// 1 store มีหลาย reducer ได้ แต่ต้องไป รวมให้มาเป็น reducer อันใหญ่อันเดียวก่อนละค่อยใส่ลงไปใน createStore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LoginPage} />
      <Route path="student/:id" component={StudentPage} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
