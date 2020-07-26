import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { dummyReducer } from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(dummyReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
