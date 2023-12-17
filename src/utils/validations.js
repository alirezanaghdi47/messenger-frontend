import * as Yup from "yup";
import i18n from "i18next";

export const editProfileSchema = Yup.object().shape({
    avatar: Yup.mixed().nullable().test("fileSize", i18n.t("error.avatarSize"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return value.size <= 5 * 1_024_000;
        }
    }).test("fileType", i18n.t("error.avatarType"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type);
        }
    }),
    userName: Yup.string().max(20, i18n.t("error.userNameMaxLength")).required(i18n.t("error.userNameRequired")),
    biography: Yup.string().max(50, i18n.t("error.biographyMaxLength"))
});

export const addEntryLockSchema = Yup.object().shape({
    password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, i18n.t("error.passwordFormat")).required(i18n.t("error.passwordRequired")),
    passwordRepeat: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, i18n.t("error.passwordRepeatFormat") ).oneOf([Yup.ref('password'), null], i18n.t("error.passwordRepeatEqual")).required(i18n.t("error.passwordRepeatRequired")),
});