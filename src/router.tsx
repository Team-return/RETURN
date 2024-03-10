import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Footer from "./components/footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="" />
        <Route path="" />
        <Route path="" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
