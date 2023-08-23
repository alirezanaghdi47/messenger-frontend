// libraries
import {useTranslation} from "react-i18next";
import {Box, Stack, Typography} from "@mui/material";

const Header = ({title}) => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <Typography
                    variant="h5"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t(title)}
                </Typography>

            </Box>

        </Stack>
    )
}

export default Header;