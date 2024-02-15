import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "./fonts/Simpsonfont.ttf";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.tsx";
import SimpsonsContextProvider from "./store/simpsons/context/SimpsonsContextProvider.tsx";
import UiContextProvider from "./store/ui/context/UiContextProvider.tsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextProvider>
      <SimpsonsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SimpsonsContextProvider>
    </UiContextProvider>
  </React.StrictMode>,
);
