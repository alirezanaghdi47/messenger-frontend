// libraries
import {Navigate, Route, Routes} from "react-router-dom";
import Loadable from '@loadable/component';

// pages
const Auth = Loadable(() => import('pages/AuthPage'));
const Login = Loadable(() => import('pages/LoginPage'));
const Verify = Loadable(() => import('pages/VerifyPage'));
const Register = Loadable(() => import('pages/RegisterPage'));
const Chats = Loadable(() => import('pages/ChatsPage'));
const Chat = Loadable(() => import('pages/ChatPage'));
const Setting = Loadable(() => import('pages/SettingPage'));
const Profile = Loadable(() => import('pages/ProfilePage'));
const Appearance = Loadable(() => import('pages/AppearancePage'));
const NotFound = Loadable(() => import('pages/NotFoundPage'));

const RouterProvider = () => {

    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/chat"/>}
            />

            <Route
                path="/auth"
                element={<Auth/>}
            >

                <Route
                    path="/auth/login"
                    element={<Login/>}
                />

                <Route
                    path="/auth/verify"
                    element={<Verify/>}
                />

                <Route
                    path="/auth/register"
                    element={<Register/>}
                />

            </Route>

            <Route
                path="/chat"
                element={<Chats/>}
            >

                <Route
                    path="/chat/:chatId"
                    element={<Chat/>}
                />

            </Route>

            <Route
                path="/setting"
                element={<Setting/>}
            >

                <Route
                    path="/setting/profile"
                    element={<Profile/>}
                />

                <Route
                    path="/setting/appearance"
                    element={<Appearance/>}
                />

            </Route>

            <Route
                path="/*"
                element={<NotFound/>}
            />

        </Routes>
    )
}

export default RouterProvider;
