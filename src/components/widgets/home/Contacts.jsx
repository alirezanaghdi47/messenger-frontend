// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Stack, Typography} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setActivePage, removeActivePage} from "@/stores/slices/other.js";

const userList = [
    {id: 1 , userName: "علیرضا نقدی"},
    {id: 2 , userName: "علیرضا نقدی"},
    {id: 3 , userName: "علیرضا نقدی"},
    {id: 4 , userName: "علیرضا نقدی"},
    {id: 5 , userName: "علیرضا نقدی"},
];

const ContactList = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 150px)",
                paddingTop: 1,
                paddingBottom: 1,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                userList.map(userItem =>
                    <ContactItem
                        key={userItem.id}
                        user={userItem}
                    />
                )
            }

        </Stack>
    )
}

const ContactItem = ({user}) => {

    const dispatch = useDispatch();
    const {activePage} = useSelector(state => state.other);

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                cursor: "pointer"
            }}
            onClick={
                () => activePage.type === "chat" && activePage.data === user ?
                    dispatch(removeActivePage()) :
                    dispatch(setActivePage({type: 'chat', data: user}))
            }
        >

            <Badge
                color="success"
                variant="dot"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    style={{
                        borderRadius: 8
                    }}
                />

            </Badge>

            <Stack
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "calc(100% - 72px)",
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                    sx={{width: "100%", overflow: "hidden"}}
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                >
                    11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

const Contacts = () => {

    return (
        <ContactList/>
    )
}

export default Contacts;

