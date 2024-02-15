import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";

import "./App.css";

const App = (): React.ReactElement => {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
