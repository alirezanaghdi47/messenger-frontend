// libraries
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Stack, Typography , useMediaQuery} from "@mui/material";

// stores
import {hideModal} from "stores/slices/app";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

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

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
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
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    visibleByDefault
                    width={40}
                    height={40}
                    placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
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
            gap={2}
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

