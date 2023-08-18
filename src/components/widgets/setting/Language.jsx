// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Button, Stack, Typography} from "@mui/material";

// stores
import {setLanguage} from "@/stores/slices/setting.js";

// utils
import {languageList} from "@/utils/constants.js";

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
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction={language === "fa" ? "row" : "row-reverse"}
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
                        variant={item.value === language ? "contained" : "text"}
                        color={item.value === language ? "primary" : "ternary"}
                        startIcon={
                            <LazyLoadImage
                                src={item.flag}
                                alt={item.value}
                                width={24}
                                height={16}
                            />
                        }
                        onClick={() => dispatch(setLanguage(item.value))}
                    >
                        {t(item.title)}
                    </Button>
                )
            }

        </Stack>
    )
}

const Language = () => {

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

            <Title title="typography.language"/>

            <Content list={languageList}/>

        </Stack>
    )
}

export default Language;

