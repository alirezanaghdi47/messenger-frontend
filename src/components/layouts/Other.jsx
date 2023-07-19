import PropTypes from "prop-types";
import {Container, Stack} from "@mui/material";

const Other = ({children}) => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "100dvh",
            }}
        >
            {children}
        </Container>
    )
}

Other.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Other;