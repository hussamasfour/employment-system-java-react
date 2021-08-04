import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import setup from "./api/setupInterceptors";
import "./index.css";
import App from "./component/App";
import logger from "redux-logger";

const middleware = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

setup(store);
