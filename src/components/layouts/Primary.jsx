import PropTypes from "prop-types";
import {useMediaQuery} from "@react-hooks-library/core";

const MobileHomeLayout = ({children}) => {
   return (
       <>
            mobile
           {children}
       </>
   )
}

const DesktopHomeLayout = ({children}) => {
    return (
        <>
            desktop
            {children}
        </>
    )
}

const Primary = ({children}) => {
    const isDesktop = useMediaQuery('(min-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 992px)');

    if (isDesktop) return <DesktopHomeLayout children={children}/>
    if (isMobile) return <MobileHomeLayout children={children}/>
}

Primary.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Primary;