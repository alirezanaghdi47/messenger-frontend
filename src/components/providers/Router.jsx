// libraries
import {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
import Home from "pages/Home";
import Auth from "pages/Auth";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Chats from "pages/Chats";
import Chat from "pages/Chat";
import Setting from "pages/Setting";
import Profile from "pages/Profile";
import AppearanceCustomization from "pages/AppearanceCustomization";
import SecurityPrivacy from "pages/SecurityPrivacy";
import NotFound from "pages/NotFound";

const Router = () => {

    return (
        <BrowserRouter>

            <Suspense fallback={false}>

                <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/auth" element={<Auth/>}>

                        <Route path="/auth/sign-in" element={<SignIn/>}/>

                        <Route path="/auth/sign-up" element={<SignUp/>}/>

                    </Route>

                    <Route path="/chat" element={<Chats/>}>

                        <Route path="/chat/:chatId" element={<Chat/>}/>

                    </Route>

                    <Route path="/setting" element={<Setting/>}>

                        <Route path="/setting/profile" element={<Profile/>}/>

                        <Route path="/setting/appearance-customization" element={<AppearanceCustomization/>}/>

                        <Route path="/setting/security-privacy" element={<SecurityPrivacy/>}/>

                    </Route>

                    <Route path="/*" element={<NotFound/>}/>

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}

export default Router;
