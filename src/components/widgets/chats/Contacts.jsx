// libraries
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";

// stores
import {hideModal} from "stores/slices/app";

const contactList = [
    {_id: "101"},
    {_id: "102"},
    {_id: "103"},
    {_id: "104"},
    {_id: "105"},
];

const ContactItem = ({contactItem}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingY: 2,
                "&:last-of-type":{
                    borderBottom: "none"
                }
            }}
            onClick={() => {
                dispatch(hideModal());
                navigate(`/chat/${contactItem?._id}`);
            }}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: 1,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <LazyLoadImage
                    src="/images/avatar.jpg"
                    alt="avatar"
                    visibleByDefault
                    width={40}
                    height={40}
                    effect='blur'
                    style={{borderRadius: "50%"}}
                />

                <Stack
                    direction="column"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                        noWrap
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        noWrap
                    >
                        {t("typography.lastSeen")}
                        &nbsp;
                        11:11
                    </Typography>

                </Stack>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="ul"
            direction="column"
            className="custom-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 200px)" : 480,
                overflowY: "scroll"
            }}
        >

            {
                contactList.map(contactItem =>
                    <ContactItem
                        key={contactItem?._id}
                        contactItem={contactItem}
                    />
                )
            }

        </Stack>
    )
}

export default Contacts;

