import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
<<<<<<<<< Temporary merge branch 1

const root = ReactDOM.createRoot(document.getElementById("root"));
const peristor = persistStore(store)
root.render(
  <Provider store={store}>
<<<<<<<<< Temporary merge branch 1
    <PersistGate persistor={peristor  }>
=========
    <PersistGate persistor={peristor}>

>>>>>>>>> Temporary merge branch 2
    <App />
      </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
