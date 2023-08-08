// libraries
import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// pages
const Setup = lazy(() => import("@/pages/Setup.jsx"));
const Home = lazy(() => import("@/pages/Home.jsx"));
const Chat = lazy(() => import("@/pages/Chat.jsx"));
const VoiceCall = lazy(() => import("@/pages/VoiceCall.jsx"));
const VideoCall = lazy(() => import("@/pages/VideoCall.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const Setting = lazy(() => import("@/pages/Setting.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

const Router = () => {

    return (
        <BrowserRouter>

            <Suspense fallback={false}>

                <Routes>

                    <Route path="/setup" element={<Setup/>}/>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/chat" element={<Chat/>}/>

                    <Route path="/voice-call" element={<VoiceCall/>}/>

                    <Route path="/video-call" element={<VideoCall/>}/>

                    <Route path="/contact" element={<Contact/>}/>

                    <Route path="/setting" element={<Setting/>}/>

                    <Route path="/*" element={<NotFound/>}/>

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}

export default Router;
