// libraries
import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
const HomePage = lazy(() => import("@/pages/Home.jsx"));
const WelcomePage = lazy(() => import("@/pages/Welcome.jsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFound.jsx"));

const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={false}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default RouterProvider;
