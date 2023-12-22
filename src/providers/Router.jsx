// libraries
import {Route, Routes} from "react-router-dom";
import Loadable from '@loadable/component';

// pages
const Home = Loadable(() => import('pages/HomePage'));
const Chats = Loadable(() => import('pages/ChatsPage'));
const Chat = Loadable(() => import('pages/ChatPage'));
const Setting = Loadable(() => import('pages/SettingPage'));
const Profile = Loadable(() => import('pages/ProfilePage'));
const Appearance = Loadable(() => import('pages/AppearancePage'));
const NotFound = Loadable(() => import('pages/NotFoundPage'));

const Router = () => {

    return (
        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/chat" element={<Chats/>}>

                <Route path="/chat/:chatId" element={<Chat/>}/>

            </Route>

            <Route path="/setting" element={<Setting/>}>

                <Route path="/setting/profile" element={<Profile/>}/>

                <Route path="/setting/appearance" element={<Appearance/>}/>

            </Route>

            <Route path="/*" element={<NotFound/>}/>

        </Routes>
    )
}

export default Router;
