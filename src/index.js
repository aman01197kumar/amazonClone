import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
<<<<<<< HEAD


=======
// import persistStore from "redux-persist/es/persistStore";
import persistStore from "redux-persist/es/persistStore";
>>>>>>> origin
const root = ReactDOM.createRoot(document.getElementById("root"));
const peristor = persistStore(store)
root.render(
  <Provider store={store}>

    <PersistGate persistor={peristor}>

<<<<<<< HEAD
    <App />
      </PersistGate>
=======
      <App />
    </PersistGate>
>>>>>>> origin
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
