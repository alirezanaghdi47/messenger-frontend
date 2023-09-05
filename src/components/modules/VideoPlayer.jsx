// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from "rc-slider";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Box, Collapse, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2, LuMaximize, LuMinimize, LuVolumeX} from "react-icons/lu";

// utils
import {formatDuration} from "utils/functions";
import {PiNumberOneBold, PiNumberTwoBold} from "react-icons/pi";

const VideoPlayer = ({src}) => {

    const {language, darkMode} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const fullScreenHandle = useFullScreenHandle();

    const playerRef = useRef(null);

    const [showVolume, setShowVolume] = useState(false);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);

    const _handlePlaybackRateChange = () => {
        setPlaybackRate(playbackRate === 1 ? 2 : 1);
    }
    const _handleToggleFullscreen = () => fullScreenHandle.active ? fullScreenHandle.exit() : fullScreenHandle.enter();
    const _handleToggleVolume = () => setShowVolume(!showVolume);
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
                    playbackRate={playbackRate}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={_handleEnded}
                    onProgress={(state) => _handleProgress(state)}
                    onDuration={(duration) => _handleDuration(duration)}
                />

                <Stack
                    direction="column"
                    gap={2}
                    sx={{
                        direction: language === "en" ? "rtl" : "ltr",
                        position: "absolute",
                        bottom: 8,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'end',
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        background: 'linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #000000d1 100%)',
                        borderRadius: 1,
                        padding: fullScreenHandle.active ? 3 : 2,
                    }}
                >

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
                            height: 4,
                            padding: 0
                        }}
                        trackStyle={{
                            background: theme.palette.primary.main,
                            height: 4,
                        }}
                        handleStyle={{
                            width: 16,
                            height: 16,
                            background: theme.palette.primary.main,
                            opacity: 1,
                            border: "none",
                            boxShadow: "none",
                            marginTop: -6,
                        }}
                        railStyle={{
                            height: 4,
                            background: theme.palette.secondary.main
                        }}
                    />

                    <Stack
                        direction="row"
                        gap={2}
                        sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: "center",
                            width: "100%"
                        }}
                    >

                        <Stack
                            direction="row"
                            sx={{
                                display: "flex",
                                justifyContent: 'end',
                                alignItems: "center",
                            }}
                        >

                            <IconButton
                                variant="text"
                                color={darkMode ? "ternary" : "secondary"}
                                onClick={_handleToggleFullscreen}
                            >
                                {fullScreenHandle.active ? <LuMinimize size={20}/> : <LuMaximize size={20}/>}
                            </IconButton>

                            <IconButton
                                variant="text"
                                color="secondary"
                                onClick={_handlePlaybackRateChange}
                            >
                                {playbackRate === 1 && <PiNumberOneBold size={16}/>}
                                {playbackRate === 2 && <PiNumberTwoBold size={16}/>}
                            </IconButton>

                        </Stack>

                        <Stack
                            direction="row"
                            sx={{
                                display: "flex",
                                justifyContent: 'start',
                                alignItems: "center",
                            }}
                        >

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

                            <Collapse
                                in={showVolume}
                                orientation="horizontal"
                                sx={{
                                    marginLeft: 2,
                                    marginBottom: 0.5
                                }}
                            >

                                <Slider
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onChange={_handleVolumeChange}
                                    style={{
                                        width: 40,
                                        height: 4,
                                        padding: 0
                                    }}
                                    trackStyle={{
                                        left: 0,
                                        height: 4,
                                        background: theme.palette.primary.main,
                                    }}
                                    handleStyle={{
                                        width: 16,
                                        height: 16,
                                        background: theme.palette.primary.main,
                                        opacity: 1,
                                        border: "none",
                                        boxShadow: "none",
                                        marginTop: -6,
                                    }}
                                    railStyle={{
                                        height: 4,
                                        background: theme.palette.secondary.main
                                    }}
                                />

                            </Collapse>

                            <IconButton
                                variant="text"
                                color={darkMode ? "ternary" : "secondary"}
                                onClick={_handleToggleVolume}
                            >
                                {volume === 0 ? <LuVolumeX size={20}/> : <LuVolume2 size={20}/>}
                            </IconButton>

                            <IconButton
                                variant="text"
                                color={darkMode ? "ternary" : "secondary"}
                                onClick={_handleTogglePlaying}
                            >
                                {(!playing || played === 0) ? <LuPlay size={20}/> : <LuPause size={20}/>}
                            </IconButton>

                        </Stack>

                    </Stack>

                </Stack>

            </Box>

        </FullScreen>
    )

}

export default VideoPlayer;