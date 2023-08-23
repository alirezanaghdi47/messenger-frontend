// libraries
import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
const Auth = lazy(() => import("../../pages/Auth.jsx"));
const SignIn = lazy(() => import("../../pages/SignIn.jsx"));
const SignUp = lazy(() => import("../../pages/SignUp.jsx"));
const VerifyCode = lazy(() => import("../../pages/VerifyCode.jsx"));
const Home = lazy(() => import("../../pages/Home.jsx"));
const Chat = lazy(() => import("../../pages/Chat.jsx"));
const Setting = lazy(() => import("../../pages/Setting.jsx"));
const Profile = lazy(() => import("../../pages/Profile.jsx"));
const Appearance = lazy(() => import("../../pages/Appearance.jsx"));
const Session = lazy(() => import("../../pages/Session.jsx"));
const NotFound = lazy(() => import("../../pages/NotFound.jsx"));

const Router = () => {

    return (
        <BrowserRouter>

            <Suspense fallback={false}>

                <Routes>

                    <Route path="/auth" element={<Auth/>}>

                        <Route path="/auth/sign-in" element={<SignIn/>}/>

                        <Route path="/auth/sign-up" element={<SignUp/>}/>

                        <Route path="/auth/verify-code" element={<VerifyCode/>}/>

                    </Route>

                    <Route path="/" element={<Home/>}>

                        <Route path="/:chatId" element={<Chat/>}/>

                    </Route>

                    <Route path="/setting" element={<Setting/>}>

                        <Route path="/setting/profile" element={<Profile/>}/>

                        <Route path="/setting/appearance" element={<Appearance/>}/>

                        <Route path="/setting/session" element={<Session/>}/>

                    </Route>

                    <Route path="/*" element={<NotFound/>}/>

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}

export default Router;
