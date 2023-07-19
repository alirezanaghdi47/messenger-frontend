import {useEffect} from "react";
import {useSelector} from "react-redux";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import fa from "@/assets/data/locals/fa.json";
import en from "@/assets/data/locals/en.json";

const I18nProvider = ({children}) => {

    const {language} = useSelector(state => state.account);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    i18n
        .use(initReactI18next)
        .init({
            debug: false,
            resources: {en: en, fa: fa},
            lng: language,
            fallbackLng: "fa",
            interpolation: {
                escapeValue: false
            }
        });

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}

export default I18nProvider;
