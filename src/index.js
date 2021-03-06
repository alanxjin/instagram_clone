import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { getComments } from "./localStorage";

const post = {
  id: 1000,
  username: "alice",
  istatus: "Four Seasons Hotel Hampshire, England",
  description:
    "Artist Preta Wolzak’s (@pretawolzak) textured mixed-media pieces focus on hard issues, including gender equality, representation and race. Her collections “Ma Petit Inuite” and “Arctic Charade” (pictured) confronts the impact of humans’ behavior on our planet and the effects of climate change.",
  likes: 3648,
  timestamp: 1602787081979,
  profileImage: "/imgs/postProfile.jpg",
};

const comments = getComments();
const store = createStore(
  rootReducer,
  { post, loginUser: "alanxjin", comments },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
