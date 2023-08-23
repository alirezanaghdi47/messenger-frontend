// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Box, Button, Stack, Typography} from "@mui/material";

// stores
import {setDateFormat} from "../../../stores/slices/setting.js";

// utils
import {dateTimeList} from "../../../utils/constants.js";

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
    const {dateFormat} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
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
                list.map(item =>
                    <Button
                        key={item.id}
                        variant={item.value === dateFormat ? "contained" : "text"}
                        color={item.value === dateFormat ? "primary" : "ternary"}
                        onClick={() => dispatch(setDateFormat(item.value))}
                    >
                        {t(item.title)}
                    </Button>
                )
            }

        </Stack>
    )
}

const DateTime = () => {

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

            <Title title="typography.dateTime"/>

            <Content list={dateTimeList}/>

        </Stack>
    )
}

export default DateTime;

