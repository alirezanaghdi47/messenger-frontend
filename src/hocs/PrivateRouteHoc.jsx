// libraries
import {useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// stores
import {signOut} from "stores/slices/authSlice";
import {unSetUser} from "../stores/slices/settingSlice";

const PrivateRouteHoc = (WrappedComponent) => {
    const PrivateRouteHoc = (props) => {

        const [counter, setCounter] = useState(0);
        const location = useLocation();
        const dispatch = useDispatch();
        const {token, expire} = useSelector(state => state.auth);
        const isAuth = Boolean(token && expire > Math.floor(Date.now() / 1000));

        useEffect(() => {

            const interval = setInterval(() => setCounter(prevState => prevState + 1), 1 * 1000);

            if (token && expire < Math.floor(Date.now() / 1000)) {
                dispatch(signOut());
                dispatch(unSetUser());
            }

            return () => clearInterval(interval);

        }, [location.key , counter]);

        return isAuth ? <WrappedComponent {...props}/> : <Navigate to='/'/>
    }

    return PrivateRouteHoc;
}

export default PrivateRouteHoc;