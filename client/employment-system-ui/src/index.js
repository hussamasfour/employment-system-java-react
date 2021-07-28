import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

import "./index.css";
import App from "./component/App";
import logger from "redux-logger";
import { MuiThemeProvider } from "material-ui/styles";

const middleware = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
