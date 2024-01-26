// libraries
import {useState , useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// stores
import {signOut} from "stores/slices/authSlice";
import {unSetUser} from "stores/slices/settingSlice";

const useAuth = () => {

    const [isAuth , setIsAuth] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const {token, expire} = useSelector(state => state.auth);

    useEffect(() => {
        if (!token || expire < Math.floor(Date.now() / 1000)) {
            dispatch(signOut());
            dispatch(unSetUser());
            setIsAuth(false);
        } else {
            setIsAuth(true);
        }
    }, [location.key , token , expire]);

    return {isAuth}
}

export default useAuth;