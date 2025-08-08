import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/home/home';
import Register from '../views/register/register';
import PageNotFound from '../views/404/404';
import Login from '../views/login/login';



export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}