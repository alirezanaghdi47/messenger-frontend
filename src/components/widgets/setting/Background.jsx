// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Grid, Stack, Typography} from "@mui/material";

// stores
import {setBackground} from "@/stores/slices/setting.js";

// utils
import {backgroundList} from "@/utils/constants.js";

const Background = () => {

    const dispatch = useDispatch();
    const {background} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

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

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "start",
                    alignItems: 'center',
                    width: "100%",
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t("typography.background")}
                </Typography>

            </Box>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >
                {
                    backgroundList.map((backgroundItem , index) =>
                        <Grid
                            key={backgroundItem.id}
                            component="li"
                            item
                            xs={6}
                            sm={4}
                            lg={3}
                            sx={{
                                cursor:"pointer",
                                opacity: background === backgroundItem.background ? 1: 0.5,
                            }}
                            onClick={() => dispatch(setBackground(index))}
                        >
                            <LazyLoadImage
                                alt={backgroundItem.id}
                                src={backgroundItem.background}
                                width="100%"
                                height="100%"
                                effect="fade"
                                style={{
                                    borderRadius: 8,
                                    objectFit: "cover"
                                }}
                            />
                        </Grid>
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Background;

