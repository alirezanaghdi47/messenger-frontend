// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import {Button, IconButton, Popper, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2} from "react-icons/lu";
import {FiX} from "react-icons/fi";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formattedSecond} from "utils/functions";

const MusicPlayer = ({src}) => {

    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const playerRef = useRef(null);

    const [anchorEl, setAnchorEl] = useState(null);
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

    const _handleToggleVolume = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget)
    }

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
        <>
            <Stack
                direction="column"
                sx={{
                    direction: language === "en" ? "rtl" : "ltr",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    width: "100%",
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
                        padding: 1
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

                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        width: "100%",
                        padding: 1
                    }}
                >

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        fontWeight="bold"
                    >
                        {formattedSecond(duration)}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        fontWeight="bold"
                    >
                        {formattedSecond(duration * played)}
                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        width: "100%",
                    }}
                >

                    <Button
                        variant="text"
                        color="ternary"
                        size="small"
                        onClick={_handlePlaybackRateChange}
                    >
                        {playbackRate}
                        <FiX size={16} style={{marginRight: 4}}/>
                    </Button>

                    <IconButton
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={_handleTogglePlaying}
                    >
                        {(!playing || played === 0) ? <LuPlay size={20}/> : <LuPause size={20}/>}
                    </IconButton>

                    <Popper
                        open={Boolean(anchorEl)}
                        placement="right"
                        anchorEl={anchorEl}
                        sx={{zIndex: 1500}}
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

                    </Popper>

                    <IconButton
                        variant="text"
                        color="ternary"
                        onClick={_handleToggleVolume}
                    >
                        <LuVolume2 size={20}/>
                    </IconButton>

                </Stack>

            </Stack>

            <ReactPlayer
                url={src}
                ref={playerRef}
                width={0}
                height={0}
                playing={playing}
                volume={volume}
                muted={muted}
                playbackRate={playbackRate}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={_handleEnded}
                onProgress={(state) => _handleProgress(state)}
                onDuration={(duration) => _handleDuration(duration)}
                style={{display: "none"}}
            />
        </>
    )

}

export default MusicPlayer;