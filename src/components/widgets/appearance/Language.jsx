// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Button, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {useEditLanguageMutation} from "stores/apis/settingApi";
import {setLanguage} from "stores/slices/settingSlice";

const languageList = [
    {id: 1, title: "button.persian", value: "fa", flag: "/images/fa.png"},
    {id: 2, title: "button.english", value: "en", flag: "/images/en.png"},
];

const LanguageItem = ({languageItem}) => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
    const [editLanguage , editLanguageResponse] = useEditLanguageMutation();
    const {t} = useTranslation();

    useEffect(() => {
        if (editLanguageResponse.status === "fulfilled") {
            dispatch(setLanguage(editLanguageResponse.data));
        }
    }, [editLanguageResponse]);

    return (
        <Button
            variant={languageItem.value === language ? "contained" : "text"}
            color={languageItem.value === language ? "primary" : "ternary"}
            startIcon={
                <LazyLoadImage
                    src={languageItem.flag}
                    alt={languageItem.value}
                    visibleByDefault
                    width={24}
                    height={16}
                    effect='blur'
                />
            }
            onClick={() => editLanguage({language: languageItem.value})}
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

