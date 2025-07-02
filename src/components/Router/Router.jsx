import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout/Layout.jsx'
import Home from '../../pages/Home.jsx'
import Login from '../../pages/Login.jsx'
import User from '../../pages/User.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router