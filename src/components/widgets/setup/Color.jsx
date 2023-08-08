// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Button, IconButton, Stack, Typography} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setColor, setSetup, setTheme} from "@/stores/slices/user.js";

// utils
import {colorList} from "@/utils/constants.js";

const Color = () => {

    const dispatch = useDispatch();
    const {color} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    console.log(color)

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "start",
                    alignItems: 'center',
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                />

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("domain")}
                </Typography>

            </Box>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.color")}
            </Typography>

            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                {
                    colorList.map((colorItem , index) =>
                        <Button
                            key={colorItem.id}
                            variant={colorItem.color.dark === color.dark ? "contained" : "text"}
                            color={colorItem.color.dark === color.dark ? "primary" : "ternary"}
                            fullWidth
                            onClick={() => dispatch(setColor(index))}
                            sx={{padding: 2}}
                        >
                            <LazyLoadImage
                                src={colorItem.image}
                                alt="color"
                                width="100%"
                                height="100%"
                                style={{borderRadius: 8}}
                            />
                        </Button>
                    )
                }

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    onClick={() => dispatch(setSetup("fontSize"))}
                >
                    {t("button.prev")}
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => dispatch(setSetup("background"))}
                >
                    {t("button.next")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default Color;

