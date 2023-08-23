// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Grid, Box, Card, Chip, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FaPlay} from "react-icons/fa";

// assets
import image from "../../../assets/other/lorem-ipsum.jpg";

// utils
import {convertByte} from "../../../utils/functions.js";

export const ImageLog = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    position: "relative",
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    padding: 1.5,
                }}
            >

                <Box sx={{position: "relative"}}>

                    <LazyLoadImage
                        src={message.content}
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Chip
                            variant="caption"
                            color="secondary"
                            size="small"
                            label={convertByte(300000)}
                        />

                    </Box>

                </Box>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}

export const FileLog = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    padding: 1.5,
                }}
            >

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <LazyLoadImage
                        src={image}
                        alt="image"
                        width={50}
                        height={50}
                        style={{borderRadius: 8}}
                    />

                    <Stack
                        direction="column"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            color: "text.primary"
                        }}
                    >

                        <Typography
                            variant="subtitle2"
                            color="textPrimary"
                        >
                            نام فایل
                        </Typography>

                        <Typography
                            variant="caption"
                            color="textPrimary"
                        >
                            {convertByte(300000)}
                        </Typography>

                    </Stack>

                </Stack>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}

export const VoiceLog = ({message}) => {

    const {fontSize, language} = useSelector(state => state.setting.appearance);

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    padding: 1.5,
                }}
            >

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    <IconButton
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{order: language === "fa" ? 2 : 1}}
                    >
                        <FaPlay size={20}/>
                    </IconButton>

                    <Stack
                        direction="column"
                        gap={1}
                        sx={{
                            order: language === "fa" ? 1 : 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: language === "fa" ? "end" : "start",
                            width: 150,
                        }}
                    >

                        <Typography
                            variant="caption"
                            color="textPrimary"
                        >
                            00:10 / 00:00
                        </Typography>

                        <Typography
                            variant="caption"
                            color="textPrimary"
                        >
                            {convertByte(300000)}
                        </Typography>

                    </Stack>

                </Stack>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}

export const VideoLog = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    padding: 1.5,
                }}
            >

                <Box sx={{position: "relative"}}>

                    <LazyLoadImage
                        src={image}
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Chip
                            variant="caption"
                            color="secondary"
                            label="11:11"
                            size="small"
                        />

                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Chip
                            variant="caption"
                            color="secondary"
                            size="small"
                            label={convertByte(300000)}
                        />

                    </Box>

                    <IconButton
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50% , -50%)",
                        }}
                    >
                        <FaPlay size={20}/>
                    </IconButton>

                </Box>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}

export const LocationLog = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    padding: 1,
                }}
            >

                <LazyLoadImage
                    src={image}
                    alt="image"
                    width="100%"
                    height="100%"
                    style={{borderRadius: 8}}
                />

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}