// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";

// assets
import avatar from "@/assets/images/avatar.png";

// stores
import {setActiveStory} from "@/stores/slices/story.js";
import {useTranslation} from "react-i18next";

const userList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
    {_id: "6"},
];

const ContactItem = ({user}) => {

    const dispatch = useDispatch();
    const {activeStory} = useSelector(state => state.story);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => dispatch(setActiveStory(user))}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: activeStory?._id === user._id && "primary.main",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}
            >

                <Badge
                    color="success"
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >

                    <LazyLoadImage
                        src={avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />

                </Badge>

                <Typography
                    variant="subtitle2"
                    color={activeStory?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    fontWeight='bold'
                    className="text-truncate"
                >
                    علیرضا نقدی
                </Typography>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        width: 50,
                        color: activeStory?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary",
                        marginLeft: "auto"
                    }}
                >

                    <Typography
                        variant="caption"
                        color={activeStory?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        11:11
                    </Typography>

                    <BiCheckDouble size={20}/>

                    {/*<Chip*/}
                    {/*    variant="filled"*/}
                    {/*    size="small"*/}
                    {/*    color="success"*/}
                    {/*    label="1"*/}
                    {/*/>*/}

                </Stack>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 150px)",
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                userList.map(userItem =>
                    <ContactItem
                        key={userItem._id}
                        user={userItem}
                    />
                )
            }

        </Stack>
    )
}

export default Contacts;

