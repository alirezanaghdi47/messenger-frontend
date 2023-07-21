// libraries
import PropTypes from "prop-types";
import {Box} from "@mui/material";

const Other = ({children}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: "center",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                padding: 2,
            }}
        >
            {children}
        </Box>
    )
}

Other.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Other;