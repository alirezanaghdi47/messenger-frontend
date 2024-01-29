// libraries
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import screenfull from "screenfull";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Slider from "rc-slider";
import {Box, IconButton, Popper, Stack, Typography, useTheme} from "@mui/material";
import {LuPlay, LuPause, LuVolume2, LuMaximize, LuMinimize} from "react-icons/lu";

// styles
import 'rc-slider/assets/index.css';

// utils
import {formattedSecond} from "utils/functions";

const TimeLine = ({played , _handleSeekChange , _handleSeekMouseDown , _handleSeekMouseUp}) => {

    const theme = useTheme();

    return (
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
                padding: 0,
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
    )
}

const Duration = ({duration , played}) => {

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: "center",
                width: "100%",
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
                color="#e2e8f0"
                fontWeight="bold"
            >
                {formattedSecond(duration * played)}
            </Typography>

        </Stack>
    )
}

const FullScreen = ({_handleFullScreen}) => {

    return (
        <IconButton
            variant="text"
            color="light"
            size="small"
            onClick={_handleFullScreen}
        >
            {screenfull.isFullscreen ? <LuMinimize size={20}/> : <LuMaximize size={20}/>}
        </IconButton>
    )
}

const PlayPause = ({played , playing , _handleTogglePlaying}) => {

    return (
        <IconButton
            variant="text"
            color="light"
            size="small"
            onClick={_handleTogglePlaying}
        >
            {(!playing || played === 0) ? <LuPlay size={20}/> : <LuPause size={20}/>}
        </IconButton>
    )
}

const Volume = ({volume , _handleVolumeChange}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();

    const _handleToggleVolume = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

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
                color="light"
                onClick={_handleToggleVolume}
            >
                <LuVolume2 size={20}/>
            </IconButton>
        </>
    )
}

const Toolbar = ({played , playing , volume , _handleTogglePlaying , _handleVolumeChange , _handleFullScreen}) => {

    return (
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

            <FullScreen
                _handleFullScreen={_handleFullScreen}
            />

            <PlayPause
                played={played}
                playing={playing}
                _handleTogglePlaying={_handleTogglePlaying}
            />

            <Volume
                volume={volume}
                _handleVolumeChange={_handleVolumeChange}
            />

        </Stack>
    )
}

const Poster = ({thumbnail ,playing , played , _handleTogglePlaying}) => {

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 30,
                display: !playing && played === 0 ? "flex" : "none"
            }}
        >

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={_handleTogglePlaying}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50% , -50%)"
                }}
            >
                {(!playing || played === 0) ? <LuPlay size={32}/> : <LuPause size={32}/>}
            </IconButton>

            <LazyLoadImage
                src={thumbnail}
                alt="banner"
                visibleByDefault
                width="100%"
                height="100%"
                effect='blur'
                style={{borderRadius: 8}}
            />

        </Box>
    )
}

const VideoPlayer = ({src, thumbnail}) => {

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const {language} = useSelector(state => state.setting.appearance);

    const _handleFullScreen = () => {
        if (screenfull.isFullscreen){
            screenfull.exit();
        } else {
            screenfull.request(document.getElementById("player"));
        }
    }

    const _handleVolumeChange = (value) => {
        setVolume(value);
        setMuted(false);
    }

    const _handleTogglePlaying = () => {
        setPlaying(!playing);
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
    const _handleEnded = () => setPlaying(true);

    return (
        <Box
            id="player"
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: screenfull.isFullscreen ? "100%" : 640,
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
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={_handleEnded}
                onProgress={(state) => _handleProgress(state)}
                onDuration={(duration) => _handleDuration(duration)}
                style={{
                    width: "100%",
                    maxWidth: screenfull.isFullscreen ? "100%" : 640,
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
                    display: playing || played > 0 ? "flex" : "none",
                    flexDirection: "column",
                    justifyContent: 'end',
                    alignItems: "center",
                    width: "100%",
                    maxWidth: screenfull.isFullscreen ? "100%" : 640,
                    height: "100%",
                    background: 'linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #000000d1 100%)',
                    borderRadius: 1,
                    padding: 2,
                }}
            >

                <Duration
                    duration={duration}
                    played={played}
                />

                <TimeLine
                    played={played}
                    _handleSeekChange={_handleSeekChange}
                    _handleSeekMouseDown={_handleSeekMouseDown}
                    _handleSeekMouseUp={_handleSeekMouseUp}
                />

                <Toolbar
                    playing={playing}
                    played={played}
                    volume={volume}
                    _handleTogglePlaying={_handleTogglePlaying}
                    _handleVolumeChange={_handleVolumeChange}
                    _handleFullScreen={_handleFullScreen}
                />

            </Stack>

            <Poster
                thumbnail={thumbnail}
                playing={playing}
                played={played}
                _handleTogglePlaying={_handleTogglePlaying}
            />

        </Box>
    )

}

export default VideoPlayer;