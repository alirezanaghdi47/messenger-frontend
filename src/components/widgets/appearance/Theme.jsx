// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Grid, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {setTheme} from "stores/slices/setting.js";

// utils
import {themeList} from "utils/constants.js";

const ThemeItem = ({themeItem}) => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleActiveTheme = (value) => dispatch(setTheme(value));

    return (
        <Grid
            component="li"
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{
                cursor: "pointer",
                opacity: darkMode === themeItem.value ? 1 : 0.5,
            }}
            onClick={() => _handleActiveTheme(themeItem.value)}
        >

            <LazyLoadImage
                src={themeItem.background}
                alt={t(themeItem.title)}
                width="100%"
                height="100%"
                style={{borderRadius: 8}}
            />

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

            <Header title="typography.theme"/>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >
                {
                    themeList.map(themeItem =>
                        <ThemeItem
                            key={themeItem.id}
                            themeItem={themeItem}
                        />
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Theme;

