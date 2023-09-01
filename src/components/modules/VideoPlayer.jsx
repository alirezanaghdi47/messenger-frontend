// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from "rc-slider";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Box, IconButton, Popper, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2, LuMaximize, LuMinimize} from "react-icons/lu";

// utils
import {formatDuration} from "utils/functions";

const VideoPlayer = ({src}) => {

    const {language, darkMode} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const fullScreenHandle = useFullScreenHandle();

    const playerRef = useRef(null);

    const [anchorEl, setAnchorEl] = useState(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const _handleToggleFullscreen = () => fullScreenHandle.active ? fullScreenHandle.exit() : fullScreenHandle.enter();

    const _handleToggleVolume = (e) => setAnchorEl(anchorEl ? null : e.currentTarget);

    const _handleVolumeChange = (value) => {
        setVolume(value);
        setMuted(false);
    }
    const _handleTogglePlaying = () => setPlaying(!playing);
    const _handleSeekMouseDown = () => setSeeking(true);
    const _handleSeekChange = (value) => {
        setPlayed(value);
        playerRef?.current?.seekTo(value);
        setPlaying(true);
    }
    const _handleSeekMouseUp = () => setSeeking(false);
    const _handleDuration = (duration) => setDuration(duration);
    const _handleProgress = (state) => {
        if (!seeking) {
            setPlayed(state?.played);
        }
    }
    const _handleEnded = () => setPlaying(true);

    return (
        <FullScreen handle={fullScreenHandle}>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    borderRadius: 1,
                }}
            >

                <ReactPlayer
                    url={src}
                    ref={playerRef}
                    width="100%"
                    height="100%"
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={_handleEnded}
                    onProgress={(state) => _handleProgress(state)}
                    onDuration={(duration) => _handleDuration(duration)}
                />

                <Box
                    sx={{
                        direction: language === "en" ? "rtl" : "ltr",
                        position: "absolute",
                        bottom: 8,
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "end",
                        width: "100%",
                        height: "100%",
                        background: 'linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #000000d1 100%)',
                        borderRadius: 1,
                    }}
                >

                    <Stack
                        direction="row"
                        gap={2}
                        sx={{
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: "center",
                            width: "100%",
                            padding: 2,
                        }}
                    >

                        <Stack
                            direction="column"
                            gap={2}
                            sx={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                marginRight: "auto"
                            }}
                        >

                            <Popper
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                placement="top"
                                sx={{zIndex: 1500}}
                            >

                                <Slider
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    vertical={true}
                                    value={volume}
                                    onChange={_handleVolumeChange}
                                    style={{
                                        width: 8,
                                        height: 100,
                                        padding: 0
                                    }}
                                    trackStyle={{
                                        left: 0,
                                        width: 8,
                                        background: theme.palette.primary.main,
                                    }}
                                    handleStyle={{
                                        width: 20,
                                        height: 20,
                                        background: theme.palette.primary.main,
                                        opacity: 1,
                                        border: "none",
                                        boxShadow: "none",
                                        marginRight: -6,
                                        marginLeft: -6,
                                    }}
                                    railStyle={{
                                        width: 8,
                                        background: theme.palette.secondary.main
                                    }}
                                />

                            </Popper>

                            <Stack
                                direction="row"
                                sx={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}
                            >

                                <IconButton
                                    variant="text"
                                    color={darkMode ? "ternary" : "secondary"}
                                    onClick={_handleToggleFullscreen}
                                >
                                    {fullScreenHandle.active ? <LuMinimize size={24}/> : <LuMaximize size={24}/>}
                                </IconButton>

                                <IconButton
                                    variant="text"
                                    color={darkMode ? "ternary" : "secondary"}
                                    onClick={_handleToggleVolume}
                                >
                                    <LuVolume2 size={24}/>
                                </IconButton>

                            </Stack>

                        </Stack>

                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: 'start',
                                alignItems: "center",
                            }}
                        >

                            <Typography
                                variant="caption"
                                color={darkMode ? "ternary" : "secondary"}
                                fontWeight="bold"
                            >
                                {formatDuration(duration)}
                            </Typography>

                            <Typography
                                variant="caption"
                                color={darkMode ? "ternary" : "secondary"}
                                fontWeight="bold"
                            >
                                /
                            </Typography>

                            <Typography
                                variant="caption"
                                color={darkMode ? "ternary" : "secondary"}
                                fontWeight="bold"
                            >
                                {formatDuration(duration * played)}
                            </Typography>

                        </Box>

                        <Slider
                            min={0}
                            max={0.999999}
                            step={0.0000000000000001}
                            value={played}
                            onBeforeChange={_handleSeekMouseDown}
                            onChange={_handleSeekChange}
                            onAfterChange={_handleSeekMouseUp}
                            style={{
                                width: "100%",
                                height: 8,
                                padding: 0
                            }}
                            trackStyle={{
                                background: theme.palette.primary.main,
                                height: 8,
                            }}
                            handleStyle={{
                                width: 20,
                                height: 20,
                                background: theme.palette.primary.main,
                                opacity: 1,
                                border: "none",
                                boxShadow: "none",
                                marginTop: -6,
                            }}
                            railStyle={{
                                height: 8,
                                background: theme.palette.secondary.main
                            }}
                        />

                        <IconButton
                            variant="text"
                            color={darkMode ? "ternary" : "secondary"}
                            size="large"
                            onClick={_handleTogglePlaying}
                        >
                            {(!playing || played === 0) ? <LuPlay size={24}/> : <LuPause size={24}/>}
                        </IconButton>

                    </Stack>

                </Box>

            </Box>

        </FullScreen>
    )

}

export default VideoPlayer;