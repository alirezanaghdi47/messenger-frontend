// libraries
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Loadable from '@loadable/component';

// pages
const Home = Loadable(() => import('pages/HomePage'));
const Auth = Loadable(() => import('pages/AuthPage'));
const Login = Loadable(() => import('pages/LoginPage'));
const Register = Loadable(() => import('pages/RegisterPage'));
const Chats = Loadable(() => import('pages/ChatsPage'));
const Chat = Loadable(() => import('pages/ChatPage'));
const Setting = Loadable(() => import('pages/SettingPage'));
const Profile = Loadable(() => import('pages/ProfilePage'));
const Appearance = Loadable(() => import('pages/AppearancePage'));
const NotFound = Loadable(() => import('pages/NotFoundPage'));

const Router = () => {

    const {token, expire} = useSelector(state => state.auth);
    const isAuthenticated = Boolean(token && Math.floor(Date.now() / 1000) < expire);

    return (
        <Routes>

            <Route
                path="/"
                element={<Home/>}
            />

            <Route
                path="/auth"
                element={!isAuthenticated ? <Auth/> : <Navigate to="/chat"/>}
            >

                <Route
                    path="/auth/login"
                    element={<Login/>}
                />

                <Route
                    path="/auth/register"
                    element={<Register/>}
                />

            </Route>

            <Route
                path="/chat"
                element={isAuthenticated ? <Chats/> : <Navigate to="/auth/login"/>}
            >

                <Route
                    path="/chat/:chatId"
                    element={<Chat/>}
                />

            </Route>

            <Route
                path="/setting"
                element={isAuthenticated ? <Setting/> : <Navigate to="/auth/login"/>}
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

export default Router;
