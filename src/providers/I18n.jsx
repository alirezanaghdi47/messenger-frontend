// libraries
import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {I18nextProvider, initReactI18next} from "react-i18next";
import i18n from "i18next";

// assets
import fa from "locales/fa.json";
import en from "locales/en.json";

const I18n = ({children}) => {

    const {language} = useSelector(state => state.setting.appearance);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const customizedI18n = useMemo(() => {
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
    } , [language]);

    return(
        <I18nextProvider i18n={customizedI18n}>
            {children}
        </I18nextProvider>
    )

}

export default I18n;
