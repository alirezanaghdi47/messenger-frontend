// libraries
import {useSelector} from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Grid, Stack} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {useEditBackgroundMutation} from "stores/apis/settingApi";

// utils
import {backgroundList} from "utils/constants.js";

const BackgroundItem = ({backgroundItem}) => {

    const {background} = useSelector(state => state.setting.appearance);
    const [editBackground] = useEditBackgroundMutation();

    return (
        <Grid
            component="li"
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{cursor: "pointer"}}
            onClick={() => editBackground({background: backgroundItem.background})}
        >

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
            >

                <LazyLoadImage
                    src={backgroundItem.background}
                    alt={backgroundItem.id}
                    visibleByDefault
                    width="100%"
                    height="100%"
                    effect='blur'
                    style={{
                        borderRadius: 8,
                        objectFit: "cover"
                    }}
                />

                {
                    backgroundItem.background === background ? (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50% , -50%)",
                                zIndex: 50,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 32,
                                height: 32,
                                bgcolor: "primary.main",
                                color: "secondary.main",
                                borderRadius: "50%"
                            }}
                        >
                            <FiCheck size={24}/>
                        </Box>
                    ) : null
                }

            </Box>

        </Grid>
    )
}

const Background = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
            }}
        >

            <Header title="typography.background"/>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >
                {
                    backgroundList.map(backgroundItem =>
                        <BackgroundItem
                            key={backgroundItem.id}
                            backgroundItem={backgroundItem}
                        />
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Background;

