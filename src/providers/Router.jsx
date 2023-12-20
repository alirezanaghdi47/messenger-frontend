// libraries
import {Route, Routes} from "react-router-dom";
import Loadable from '@loadable/component';

// pages
const Home = Loadable(() => import('pages/Home'));
const Chats = Loadable(() => import('pages/Chats'));
const Chat = Loadable(() => import('pages/Chat'));
const Setting = Loadable(() => import('pages/Setting'));
const Profile = Loadable(() => import('pages/Profile'));
const Appearance = Loadable(() => import('pages/Appearance'));
const NotFound = Loadable(() => import('pages/NotFound'));

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
