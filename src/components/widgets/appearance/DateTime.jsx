// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Button, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {setDateFormat} from "stores/slices/setting.js";

// utils
import {dateTimeList} from "utils/constants.js";

const DateTimeItem = ({dateTimeItem}) => {

    const dispatch = useDispatch();
    const {dateFormat} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleActiveDateTime = (value) => dispatch(setDateFormat(value));

    return (
        <Button
            variant={dateTimeItem.value === dateFormat ? "contained" : "text"}
            color={dateTimeItem.value === dateFormat ? "primary" : "ternary"}
            onClick={() => _handleActiveDateTime(dateTimeItem.value)}
        >
            {t(dateTimeItem.title)}
        </Button>
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

            <Header title="typography.dateTime"/>

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
                        <DateTimeItem
                            key={dateTimeItem.id}
                            dateTimeItem={dateTimeItem}
                        />
                    )
                }

            </Stack>

        </Stack>
    )
}

export default DateTime;

