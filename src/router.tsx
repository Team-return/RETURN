import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="" />
        <Route path="" />
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
};
