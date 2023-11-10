// libraries
import {useSelector} from "react-redux";
import Loadable from '@loadable/component';

// pages
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

    const {page} = useSelector(state => state.app);

    const renderActivePage = (page) => {
        switch (page){
            case "chats":
                return <Chats/>
            case "chat":
                return <Chat/>
            case "profile":
                return <Profile/>
            case "appearance":
                return <Appearance/>
            case "privacy":
                return <Privacy/>
            case "setting":
                return <Setting/>
            case "sign-in":
                return <SignIn/>
            case "sign-up":
                return <SignUp/>
            default:
                return <NotFound/>
        }
    }

    return renderActivePage(page.active);

}

export default Router;
