// libraries
import PropTypes from "prop-types";
import {Box} from "@mui/material";

const Primary = ({children}) => {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'start',
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            {children}
        </Box>
    )

}

Primary.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Primary;