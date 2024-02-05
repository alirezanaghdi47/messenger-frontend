// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import {IconButton, Popper, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2, LuRefreshCw} from "react-icons/lu";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formattedSecond} from "utils/functions";

const Duration = ({duration, played}) => {

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: "center",
                width: "100%",
                marginTop: 1
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
    )
}

const TimeLine = ({played, _handleSeekChange, _handleSeekMouseDown, _handleSeekMouseUp}) => {

    const theme = useTheme();

    return (
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
    )
}

const Reset = ({_handleReset}) => {

    return (
        <IconButton
            variant="text"
            color="ternary"
            onClick={_handleReset}
        >
            <LuRefreshCw size={20}/>
        </IconButton>
    )
}

const PlayPause = ({playing, played, _handleTogglePlaying}) => {

    return (
        <IconButton
            variant="contained"
            color="primary"
            size="large"
            onClick={_handleTogglePlaying}
        >
            {(!playing || played === 0) ? <LuPlay size={20}/> : <LuPause size={20}/>}
        </IconButton>
    )
}

const Volume = ({volume, _handleVolumeChange}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();

    const _handleToggleVolume = (e) => setAnchorEl(anchorEl ? null : e.currentTarget);

    return (
        <>
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
                        height: 4,
                        padding: 0,
                        marginLeft: 8,
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
        </>
    )
}

const Toolbar = ({playing, played, volume, _handleTogglePlaying, _handleVolumeChange , _handleReset}) => {

    return (
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

            <Reset
                _handleReset={_handleReset}
            />

            <PlayPause
                playing={playing}
                played={played}
                _handleTogglePlaying={_handleTogglePlaying}
            />

            <Volume
                volume={volume}
                _handleVolumeChange={_handleVolumeChange}
            />

        </Stack>
    )
}

const MusicPlayer = ({src}) => {

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const {language} = useSelector(state => state.setting.appearance);

    const _handleVolumeChange = (value) => {
        setVolume(value);
        setMuted(false);
    }

    const _handleTogglePlaying = () => {
        setPlaying(prevState => !prevState);
    }

    const _handleSeekMouseDown = () => {
        setSeeking(true);
    }

    const _handleSeekChange = (value) => {
        setPlayed(value);
        playerRef?.current?.seekTo(value);
        setPlaying(true);
    }

    const _handleSeekMouseUp = () => {
        setSeeking(false);
    }

    const _handleDuration = (duration) => {
        setDuration(duration);
    }

    const _handleProgress = (state) => {
        if (!seeking) {
            setPlayed(state?.played);
        }
    }

    const _handleEnded = () => {
        setPlaying(true);
    }

    const _handleReset = () => {
        setPlayed(0);
        playerRef?.current?.seekTo(0);
        setSeeking(false);
    }

    return (
        <>
            <Stack
                direction="column"
                gap={1}
                sx={{
                    direction: language === "en" ? "rtl" : "ltr",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <TimeLine
                    played={played}
                    _handleSeekChange={_handleSeekChange}
                    _handleSeekMouseDown={_handleSeekMouseDown}
                    _handleSeekMouseUp={_handleSeekMouseUp}
                />

                <Duration
                    played={played}
                    duration={duration}
                />

                <Toolbar
                    played={played}
                    playing={playing}
                    volume={volume}
                    _handleTogglePlaying={_handleTogglePlaying}
                    _handleVolumeChange={_handleVolumeChange}
                    _handleReset={_handleReset}
                />

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