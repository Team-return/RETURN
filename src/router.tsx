import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Icon from './pages/icon';
import JobisPage from './pages/jobis';
import Main from './pages/main';
import MemberPage from './pages/member';

export const Router = () => {
    return (
        <BrowserRouter>
            {window.location.pathname !== '/icon' && <Header />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/member" element={<MemberPage />} />
                <Route path="/jobis" element={<JobisPage />} />
                <Route path="/icon" element={<Icon />} />
            </Routes>
            {window.location.pathname !== '/icon' && <Footer />}
        </BrowserRouter>
    );
};
