// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LazyLoad from 'react-lazy-load';
import {Button, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance-customization/Header";

// stores
import {setLanguage} from "stores/slices/setting.js";

// utils
import {languageList} from "utils/constants.js";

const LanguageItem = ({languageItem}) => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleActiveLanguage = (value) => dispatch(setLanguage(value));

    return (
        <Button
            variant={languageItem.value === language ? "contained" : "text"}
            color={languageItem.value === language ? "primary" : "ternary"}
            startIcon={
                <LazyLoad
                    width={24}
                    height={16}
                    threshold={0.5}
                >
                    <img
                        src={languageItem.flag}
                        alt={languageItem.value}
                        width={24}
                        height={16}
                    />
                </LazyLoad>
            }
            onClick={() => _handleActiveLanguage(languageItem.value)}
        >
            {t(languageItem.title)}
        </Button>
    )
}

const Language = () => {

    const {language} = useSelector(state => state.setting.appearance);

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

            <Header title="typography.language"/>

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
                    languageList.map(languageItem =>
                        <LanguageItem
                            key={languageItem.id}
                            languageItem={languageItem}
                        />
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Language;

