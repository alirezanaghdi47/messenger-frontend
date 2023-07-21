// libraries
import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
const Home = lazy(() => import("@/pages/Home.jsx"));
const Profile = lazy(() => import("@/pages/Profile.jsx"));
const Welcome = lazy(() => import("@/pages/Welcome.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={false}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default RouterProvider;
