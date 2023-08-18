// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Box, Stack, Typography} from "@mui/material";

// stores
import {setColor} from "@/stores/slices/setting.js";

// utils
import {colorList} from "@/utils/constants.js";

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
    const {darkMode , color} = useSelector(state => state.setting.appearance);

    return (
        <Stack
            component="ul"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%"
            }}
        >

            {
                list.map((item, index) =>
                    <Box
                        key={item.id}
                        component="li"
                        sx={{
                            opacity: color.dark === item.color.dark ? 1: 0.5,
                            width: 40,
                            height: 40,
                            background: darkMode ? item.color.dark : item.color.light,
                            borderRadius: "50%",
                            cursor: "pointer",
                        }}
                        onClick={() => dispatch(setColor(index))}
                    />
                )
            }

        </Stack>
    )
}

const Color = () => {

    return (
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

            <Title title="typography.color"/>

            <Content list={colorList}/>

        </Stack>
    )
}

export default Color;

