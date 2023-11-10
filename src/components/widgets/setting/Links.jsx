// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Stack, Typography, useTheme} from "@mui/material";
import {LuPalette, LuShield, LuUser} from "react-icons/lu";

// stores
import {setPage} from "stores/slices/app";

const linkList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <LuUser size={20}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
    {id: 3, title: "menu.privacy", value: "privacy", icon: <LuShield size={20}/>},
];

const LinkItem = ({linkItem}) => {

    // const navigate = useNavigate();
    // const location = useLocation();
    const dispatch = useDispatch();
    const {page} = useSelector(state => state.app);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Stack
            component="li"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                bgcolor: page.active === linkItem.value && "primary.main",
                color: page.active === linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary",
                borderRadius: 1,
                padding: 1.5,
                cursor: "pointer"
            }}
            onClick={() => dispatch(setPage({active: linkItem.value}))}
        >

            {linkItem.icon}

            <Typography
                variant="subtitle2"
                color={page.active === linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                fontWeight='bold'
                noWrap
            >
                {t(linkItem.title)}
            </Typography>

        </Stack>
    )
}

const Links = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
            }}
        >

            {
                linkList.map(linkItem =>
                    <LinkItem
                        key={linkItem.id}
                        linkItem={linkItem}
                    />
                )
            }

        </Stack>
    )
}

export default Links;
