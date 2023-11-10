// libraries
import {useDispatch, useSelector} from "react-redux";
import {Box, Grid, Stack} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {setTheme} from "stores/slices/setting.js";

// utils
import {themeList} from "utils/constants.js";
import {AsyncImage} from "loadable-image";

const ThemeItem = ({themeItem}) => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.setting.appearance);

    const _handleActiveTheme = (value) => dispatch(setTheme(value));

    return (
        <Grid
            component="li"
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{cursor: "pointer"}}
            onClick={() => _handleActiveTheme(themeItem.value)}
        >

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
            >

                <AsyncImage
                    src={themeItem.background}
                    alt={themeItem.id}
                    style={{
                        width: "100%",
                        height: "100%",
                        aspectRatio: 3/2,
                        borderRadius: 8,
                    }}
                />

                {
                    themeItem.value === darkMode ? (
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

