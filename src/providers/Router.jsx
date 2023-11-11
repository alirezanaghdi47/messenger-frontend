// libraries
import {Route, Routes, useLocation} from "react-router-dom";
import Loadable from '@loadable/component';

// pages
const Home = Loadable(() => import('pages/Home'));
const Auth = Loadable(() => import('pages/Auth'));
const SignIn = Loadable(() => import('pages/SignIn'));
const SignUp = Loadable(() => import('pages/SignUp'));
const Chats = Loadable(() => import('pages/Chats'));
const Chat = Loadable(() => import('pages/Chat'));
const Setting = Loadable(() => import('pages/Setting'));
const Profile = Loadable(() => import('pages/Profile'));
const Appearance = Loadable(() => import('pages/Appearance'));
const Privacy = Loadable(() => import('pages/Privacy'));
const NotFound = Loadable(() => import('pages/NotFound'));

const Router = () => {

    const location = useLocation();

    return (
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

                <Route path="/setting/appearance" element={<Appearance/>}/>

                <Route path="/setting/privacy" element={<Privacy/>}/>

            </Route>

            <Route path="/*" element={<NotFound/>}/>

        </Routes>
    )
}

export default Router;
