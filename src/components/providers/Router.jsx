// libraries
import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
const Home = lazy(() => import("@/pages/Home.jsx"));
const Setting = lazy(() => import("@/pages/Setting.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

const Router = () => {

    return (
        <BrowserRouter>

            <Suspense fallback={false}>

                <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/setting" element={<Setting/>}/>

                    <Route path="/*" element={<NotFound/>}/>

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}

export default Router;
