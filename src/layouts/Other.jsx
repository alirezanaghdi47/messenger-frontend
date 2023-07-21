// libraries
import PropTypes from "prop-types";

const Other = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

Other.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Other;