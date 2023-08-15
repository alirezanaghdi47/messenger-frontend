// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// stores
import {removeActiveSetting} from "@/stores/slices/setting.js";

const Header = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.profile.setting);
    const {activeSetting} = useSelector(state => state.setting);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');
    
    return isDesktop && (
        <Stack
            direction="row"
            sx={{
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
                onClick={() => dispatch(removeActiveSetting())}
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
                    {t(`typography.${activeSetting}`)}
                </Typography>

            </Box>

        </Stack>
    )
}

export default Header;