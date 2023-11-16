// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from "rc-slider";
import {Box, Button, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2, LuVolumeX} from "react-icons/lu";
import {FiX} from "react-icons/fi";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formattedSecond} from "utils/functions";

const VideoPlayer = ({src}) => {

    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const playerRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);

    const _handlePlaybackRateChange = () => {
        if (playbackRate === 1) setPlaybackRate(1.5);
        if (playbackRate === 1.5) setPlaybackRate(2);
        if (playbackRate === 2) setPlaybackRate(1);
    }
    const _handleToggleVolume = () => setVolume(0);
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
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: 640,
                height: "100%",
                aspectRatio: 16 / 9,
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
                style={{
                    width: "100%",
                    maxWidth: 640,
                    aspectRatio: 16 / 9,
                }}
            />

            <Stack
                direction="column"
                gap={2}
                sx={{
                    direction: language === "en" ? "rtl" : "ltr",
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'end',
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 640,
                    height: "100%",
                    background: 'linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #000000d1 100%)',
                    borderRadius: 1,
                    padding: 2,
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
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: 'end',
                            alignItems: "center",
                        }}
                    >

                        <Button
                            variant="text"
                            color="light"
                            size="small"
                            onClick={_handlePlaybackRateChange}
                        >
                            {playbackRate}
                            <FiX size={16} style={{marginRight: 4}}/>
                        </Button>

                    </Stack>

                    <Stack
                        direction="row"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: 'end',
                            alignItems: "center",
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: 'space-between',
                                alignItems: "center",
                                marginLeft: language === "en" ? 2 : 0,
                                marginRight: language === "en" ? 0 : 2,
                            }}
                        >

                            <Typography
                                variant="caption"
                                color="#e2e8f0"
                                fontWeight="bold"
                            >
                                {formattedSecond(duration)}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="white"
                                fontWeight="bold"
                            >
                                /
                            </Typography>

                            <Typography
                                variant="caption"
                                color="#e2e8f0"
                                fontWeight="bold"
                            >
                                {formattedSecond(duration * played)}
                            </Typography>

                        </Box>

                        <Slider
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={_handleVolumeChange}
                            style={{
                                width: 60,
                                height: 4,
                                padding: 0,
                                marginLeft: 8
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

                        <IconButton
                            variant="text"
                            color="light"
                            size="small"
                            onClick={_handleToggleVolume}
                        >
                            {volume === 0 ? <LuVolumeX size={20}/> : <LuVolume2 size={20}/>}
                        </IconButton>

                        <IconButton
                            variant="text"
                            color="light"
                            size="small"
                            onClick={_handleTogglePlaying}
                        >
                            {(!playing || played === 0) ? <LuPlay size={20}/> : <LuPause size={20}/>}
                        </IconButton>

                    </Stack>

                </Stack>

            </Stack>

        </Box>
    )

}

export default VideoPlayer;