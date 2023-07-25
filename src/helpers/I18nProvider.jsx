// libraries
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";

// assets
import fa from "@/assets/data/locals/fa.json";
import en from "@/assets/data/locals/en.json";

const I18nProvider = () => {

    const {language} = useSelector(state => state.user.setting);

    useEffect(() => {

        document.documentElement.lang = language;

        i18n
            .use(initReactI18next)
            .init({
                debug: false,
                resources: {en, fa},
                lng: language,
                fallbackLng: "fa",
                interpolation: {
                    escapeValue: false
                }
            });

    }, [language]);

}

export default I18nProvider;
