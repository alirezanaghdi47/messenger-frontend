// libraries
import SimpleBar from "simplebar-react";
import {useMediaQuery} from "@react-hooks-library/core";
import {Grid} from "@mui/material";

// assets
import file from "../../../assets/other/lorem-ipsum.pdf";
import image from "../../../assets/other/lorem-ipsum.jpg";
import video from "../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../assets/other/lorem-ipsum.mp3";

// components
import {FileLog, ImageLog, LocationLog, VideoLog, VoiceLog} from "./Logs";

const logList = [
    {id: 1, type: "file", content: file},
    {id: 2, type: "file", content: file},
    {id: 3, type: "image", content: image, me: true},
    {id: 4, type: "image", content: image, me: false},
    {id: 5, type: "video", content: video, me: true},
    {id: 6, type: "video", content: video, me: false},
    {id: 7, type: "voice", content: voice, me: false},
    {id: 8, type: "voice", content: voice, me: true},
    {id: 9, type: "location", content: [35, 51], me: true},
    {id: 10, type: "location", content: [35, 51], me: false},
];
const History = ({filter}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 160px)" : 480
            }}
        >

            <Grid
                component="ul"
                container
                rowSpacing={2}
                columnSpacing={isMobile ? 0 : 2}
                sx={{width: "100%"}}
            >

                {
                    logList.map(logItem => {
                        if (logItem.type === "image" && filter === "image") return <ImageLog key={logItem.id}
                                                                                             log={logItem}/>;
                        if (logItem.type === "file" && filter === "file") return <FileLog key={logItem.id}
                                                                                          log={logItem}/>
                        if (logItem.type === "voice" && filter === "voice") return <VoiceLog key={logItem.id}
                                                                                             log={logItem}/>
                        if (logItem.type === "video" && filter === "video") return <VideoLog key={logItem.id}
                                                                                             log={logItem}/>
                        if (logItem.type === "location" && filter === "location") return <LocationLog
                            key={logItem.id} log={logItem}/>
                    })
                }

            </Grid>

        </SimpleBar>
    )
}

export default History;