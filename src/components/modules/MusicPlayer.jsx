// libraries
import {useRef, useState} from "react";
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import {Box, IconButton, Stack, Typography, Popper, useTheme} from "@mui/material";
import {FiVolume2} from "react-icons/fi";
import {LuPause, LuPlay} from "react-icons/lu";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formatDuration} from "../../utils/functions";

const MusicPlayer = ({src}) => {

    const theme = useTheme();

    const playerRef = useRef(null);

    const [anchorEl, setAnchorEl] = useState(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

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
        <>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Stack
                    direction="column"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
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
                                width: 4,
                                height: 100,
                                padding: 0
                            }}
                            trackStyle={{
                                left: 0,
                                background: theme.palette.primary.main,
                            }}
                            handleStyle={{
                                width: 16,
                                height: 16,
                                background: theme.palette.primary.main,
                                opacity: 1,
                                border: "none",
                                boxShadow: "none",
                                marginRight: -5,
                            }}
                            railStyle={{
                                width: 4,
                                background: theme.palette.background.paper
                            }}
                        />

                    </Popper>

                    <IconButton
                        variant="text"
                        color="ternary"
                        onClick={_handleToggleVolume}
                    >
                        <FiVolume2 size={24}/>
                    </IconButton>

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
                        /
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
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
                        width: 200,
                        height: 4,
                        padding: 0
                    }}
                    trackStyle={{
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
                        background: theme.palette.background.paper
                    }}
                />

                <IconButton
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={_handleTogglePlaying}
                >
                    {(!playing || played === 0) ? <LuPlay size={24}/> : <LuPause size={24}/>}
                </IconButton>

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

        </>
    )

}

export default MusicPlayer;