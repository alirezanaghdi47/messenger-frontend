// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Header = ({title}) => {

    const navigate = useNavigate();
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const _handleBack = () => {
        navigate("/setting");
    }

    return isTablet && (
        <Stack
            direction="row"
            sx={{
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <IconButton
                variant="text"
                color="ternary"
                onClick={_handleBack}
            >
                {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
            </IconButton>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <Typography
                    variant="subtitle1"
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