// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Grid, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {setBackground} from "stores/slices/setting.js";

// utils
import {backgroundList} from "utils/constants.js";

const BackgroundItem = ({backgroundItem , index}) => {

    const dispatch = useDispatch();
    const {background} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleActiveBackground = (index) => dispatch(setBackground(index));

    return (
        <Grid
            component="li"
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{
                cursor:"pointer",
                opacity: background === backgroundItem.background ? 1: 0.5,
            }}
            onClick={() => _handleActiveBackground(index)}
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
                    backgroundList.map((backgroundItem , index) =>
                        <BackgroundItem
                            key={backgroundItem.id}
                            backgroundItem={backgroundItem}
                            index={index}
                        />
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Background;

