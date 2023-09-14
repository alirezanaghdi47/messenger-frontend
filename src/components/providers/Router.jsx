// libraries
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
const AppearanceCustomization = Loadable(() => import('pages/AppearanceCustomization'));
const SecurityPrivacy = Loadable(() => import('pages/SecurityPrivacy'));
const NotFound = Loadable(() => import('pages/NotFound'));

const Router = () => {

    return (
        <BrowserRouter>

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


        </BrowserRouter>
    )
}

export default Router;
