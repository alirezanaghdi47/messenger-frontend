// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import {Container, IconButton, Popper, Stack, Typography, useTheme} from "@mui/material";
import {FaPause, FaPlay, FaVolumeHigh} from "react-icons/fa6";
import {FaCog} from "react-icons/fa";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formatDuration} from "../../utils/functions";

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
        <Container maxWidth="xs">

            <Stack
                direction="column"
                sx={{
                    direction: language === "en" ? "rtl" : "ltr",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    bgcolor: "background.default",
                    borderRadius: 1,
                    boxShadow: 2,
                    padding: 2,
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
                            height: 8,
                            padding: 0
                        }}
                        trackStyle={{
                            height: 8,
                            background: theme.palette.primary.main,
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
                            background: theme.palette.background.paper
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
                        {formatDuration(duration)}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        fontWeight="bold"
                    >
                        {formatDuration(duration * played)}
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

                    <IconButton
                        variant="text"
                        color="ternary"
                        size="large"
                    >
                        <FaCog size={24}/>
                    </IconButton>

                    <IconButton
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={_handleTogglePlaying}
                    >
                        {(!playing || played === 0) ? <FaPlay size={24}/> : <FaPause size={24}/>}
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
                                width: 60,
                                height: 8,
                                padding: 0
                            }}
                            trackStyle={{
                                left: 0,
                                height: 8,
                                background: theme.palette.primary.main,
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
                                background: theme.palette.background.paper
                            }}
                        />

                    </Popper>

                    <IconButton
                        variant="text"
                        color="ternary"
                        size="large"
                        onClick={_handleToggleVolume}
                    >
                        <FaVolumeHigh size={24}/>
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
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={_handleEnded}
                onProgress={(state) => _handleProgress(state)}
                onDuration={(duration) => _handleDuration(duration)}
                style={{display: "none"}}
            />

        </Container>
    )

}

export default MusicPlayer;