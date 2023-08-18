// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Grid, Stack, Typography} from "@mui/material";

// stores
import {setTheme} from "@/stores/slices/setting.js";

// utils
import {themeList} from "@/utils/constants.js";

const Title = ({title}) => {

    const {t} = useTranslation();

    return (
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
                {t(title)}
            </Typography>

        </Box>
    )
}

const Content = ({list}) => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Grid
            component="ul"
            container
            spacing={2}
            sx={{width: "100%"}}
        >
            {
                list.map(item =>
                    <Grid
                        key={item.id}
                        component="li"
                        item
                        xs={6}
                        sm={4}
                        lg={3}
                        sx={{
                            cursor:"pointer",
                            opacity: darkMode === item.value ? 1: 0.5,
                        }}
                        onClick={() => dispatch(setTheme(item.value))}
                    >
                        <LazyLoadImage
                            src={item.background}
                            alt={t(item.title)}
                            width="100%"
                            height="100%"
                            style={{borderRadius: 8}}
                        />
                    </Grid>
                )
            }

        </Grid>
    )
}

const Theme = () => {

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

            <Title title="typography.theme"/>

            <Content list={themeList}/>

        </Stack>
    )
}

export default Theme;

