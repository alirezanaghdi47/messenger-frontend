// libraries
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
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

    const {token, expire} = useSelector(state => state.auth);
    const isAuth = Boolean(token && expire > Math.floor(Date.now() / 1000));

    return (
        <Routes>

            <Route
                path="/"
                element={isAuth ? <Navigate to="/chat"/> : <Navigate to="/auth/login"/>}
            />

            <Route
                path="/auth"
                element={!isAuth ? <Auth/> : <Navigate to="/chat"/>}
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
                element={isAuth ? <Chats/> : <Navigate to="/auth/login"/>}
            >

                <Route
                    path="/chat/:chatId"
                    element={<Chat/>}
                />

            </Route>

            <Route
                path="/setting"
                element={isAuth ? <Setting/> : <Navigate to="/auth/login"/>}
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
