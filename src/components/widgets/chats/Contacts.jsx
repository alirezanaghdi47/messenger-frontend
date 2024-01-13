// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Badge, Typography, useTheme, Checkbox} from "@mui/material";
import {FiCheck, FiUser} from "react-icons/fi";

// stores
import {setStepper} from "stores/slices/appSlice";

const UserItem = ({userItem}) => {

    const dispatch = useDispatch();
    const {stepper} = useSelector(state => state.app);
    const {onlineUsers} = useSelector(state => state.chat);
    const theme = useTheme();
    const isActiveReceiver = Boolean(onlineUsers.find(user => user.userId === userItem?._id));

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingY: 2,
                "&:last-of-type": {
                    borderBottom: "none"
                }
            }}
            onClick={() => dispatch(setStepper({
                step: 1,
                data: {
                    ...stepper.data,
                    participantIds: stepper.data.participantIds.find(participantId => participantId === userItem?._id) ? stepper.data.participantIds.filter(participantId => participantId !== userItem?._id) : [...stepper.data.participantIds, userItem?._id]
                }
            }))}
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

                {
                    stepper.data.participantIds.includes(userItem?._id) && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 24,
                                height: 24,
                                bgcolor: "primary.main",
                                color: "light.main",
                                borderRadius: "50%",
                                marginRight: 1
                            }}
                        >
                            <FiCheck size={20}/>
                        </Box>
                    )
                }

                <Badge
                    color={isActiveReceiver ? "success" : "secondary"}
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >

                    {
                        userItem?.avatar ? (
                            <LazyLoadImage
                                src={userItem?.avatar}
                                alt="avatar"
                                visibleByDefault
                                width={40}
                                height={40}
                                effect='blur'
                                style={{borderRadius: "50%"}}
                            />
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bgcolor: "background.default",
                                    color: "ternary.main",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%"
                                }}
                            >
                                <FiUser size={20}/>
                            </Box>
                        )
                    }

                </Badge>

                <Stack
                    direction="column"
                    gap={1}
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
                        {userItem?.userName}
                    </Typography>

                </Stack>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    const {users} = useSelector(state => state.chat);

    return (
        <Stack
            component="ul"
            direction="column"
            className="remove-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: 320,
                overflowY: "scroll"
            }}
        >

            {
                users.map(userItem =>
                    <UserItem
                        key={userItem?._id}
                        userItem={userItem}
                    />
                )
            }

        </Stack>
    )
}

export default Contacts;