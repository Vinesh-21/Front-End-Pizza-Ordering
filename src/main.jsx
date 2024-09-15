import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Redux
//Redux-step-5
import { Provider } from "react-redux";
import store from "./store.js";

//Styles
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
