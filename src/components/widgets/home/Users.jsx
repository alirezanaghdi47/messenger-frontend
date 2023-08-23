// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Stack, Typography, useTheme} from "@mui/material";

// assets
import avatar from "../../../assets/images/avatar.png";

const usersList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const UserItem = ({item}) => {

    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
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
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <LazyLoadImage
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
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

const UserList = ({list}) => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "100%",
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                list.map(item =>
                    <UserItem
                        key={item._id}
                        item={item}
                    />
                )
            }

        </Stack>
    )
}

const Users = () => {

    return (
        <UserList list={usersList}/>
    )
}

export default Users;

