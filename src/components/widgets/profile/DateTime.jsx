// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Button, Container, Stack, Typography} from "@mui/material";

// stores
import {setDateFormat} from "@/stores/slices/profile.js";

// utils
import {dateTimeList} from "@/utils/constants.js";

const DateTime = () => {

    const dispatch = useDispatch();
    const {dateFormat} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return (
        <Container
            maxWidth="md"
            disableGutters
            sx={{marginLeft: isDesktop ? "auto" : 0}}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
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
                        width: "100%",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("typography.dateTime")}
                    </Typography>

                </Box>

                <Stack
                    component="ul"
                    direction={"row"}
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: 'center',
                        width: "100%",
                    }}
                >

                    {
                        dateTimeList.map(dateTimeItem =>
                            <Button
                                key={dateTimeItem.id}
                                variant={dateTimeItem.value === dateFormat ? "contained" : "text"}
                                color={dateTimeItem.value === dateFormat ? "primary" : "ternary"}
                                onClick={() => dispatch(setDateFormat(dateTimeItem.value))}
                            >
                                {t(dateTimeItem.title)}
                            </Button>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default DateTime;

