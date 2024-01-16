import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "./fonts/Simpsonfont.ttf";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
