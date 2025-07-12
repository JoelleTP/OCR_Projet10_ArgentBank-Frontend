import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout/Layout.jsx'
import Home from '../../pages/Home.jsx'
import Login from '../../pages/Login.jsx'
import User from '../../pages/User.jsx'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx"
import ErrorPage from '../../pages/ErrorPage.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router