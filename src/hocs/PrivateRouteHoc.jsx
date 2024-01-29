// libraries
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// stores
import {signOut} from "stores/slices/authSlice";
import {unSetUser} from "stores/slices/settingSlice";

const PrivateRouteHoc = (WrappedComponent) => {
    const PrivateRouteHoc = (props) => {

        const location = useLocation();
        const dispatch = useDispatch();
        const {token, expire} = useSelector(state => state.auth);

        useEffect(() => {
            if (!token || expire < Math.floor(Date.now() / 1000)) {
                dispatch(signOut());
                dispatch(unSetUser());
            }
        }, [location.key]);

        return <WrappedComponent {...props}/>;
    }

    return PrivateRouteHoc;
}

export default PrivateRouteHoc;