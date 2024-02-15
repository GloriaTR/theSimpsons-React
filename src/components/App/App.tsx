import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";

import UiContext from "../../store/ui/context/UiContext";
import Loading from "../Loading/Loading";
import "./App.css";

const App = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);

  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
      {isLoading && <Loading />}
    </main>
  );
};

export default App;
