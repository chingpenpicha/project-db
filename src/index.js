import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./features/login/reducer";
import promiseMiddleware from "redux-promise-middleware";
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import "antd/dist/antd.css";


import LoginPage from "./features/login/LoginPage";
import StudentPage from "./features/student/StudentPage"
import App from "./App"
//import TeacherPage from "./features/teacher/TeacherPage"

// 1 store มีหลาย reducer ได้ แต่ต้องไป รวมให้มาเป็น reducer อันใหญ่อันเดียวก่อนละค่อยใส่ลงไปใน createStore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path = "/" component = {LoginPage} />
      <Route path = "student/:id" component = {StudentPage} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

//<Route path = "teacher/:id" component = {TeacherPage}>

/*
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="users" component={BookList} />
        <Route path="users/:id" component={BookDetail} />
        <Route path="posts" component={PostList} />
        <Route path="posts/new" component={PostNew} />
      </Route>
    </Router>
  </Provider>
  */
