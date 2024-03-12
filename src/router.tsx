import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Footer from "./components/footer";
import Header from "./components/header";
import MemberPage from "./pages/member";
import JobisPage from "./pages/jobis";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/jobis" element={<JobisPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
