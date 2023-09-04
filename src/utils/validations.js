import * as Yup from "yup";
import i18n from "i18next";

export const editProfileSchema = Yup.object().shape({
    avatar: Yup.mixed().test("fileSize", i18n.t("error.avatarSize"), (value) => {
        if (value === null) {
            return true;
        } else {
            return value.size <= 5 * 1_024_000;
        }
    }).test("fileType", i18n.t("error.avatarType"), (value) => {
        if (value === null) {
            return true;
        } else {
            return ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type);
        }
    }),
    userName: Yup.string().max(20, i18n.t("error.userNameMaxLength")).required(i18n.t("error.userNameRequired")),
    firstName: Yup.string().max(20, i18n.t("error.firstNameMaxLength")).required(i18n.t("error.firstNameRequired")),
    lastName: Yup.string().max(20, i18n.t("error.lastNameMaxLength")).required(i18n.t("error.lastNameRequired")),
    phoneNumber: Yup.string().matches(/^(\+98|0)?9\d{9}$/g, i18n.t("error.phoneNumberFormat")).required(i18n.t("error.phoneNumberRequired")),
    biography: Yup.string().max(50, i18n.t("error.biographyMaxLength"))
});

export const addGroupSchema = Yup.object().shape({
    avatar: Yup.mixed().test("fileSize", i18n.t("error.avatarSize"), (value) => {
        if (value === null) {
            return true;
        } else {
            return value.size <= 5 * 1_024_000;
        }
    }).test("fileType", i18n.t("error.avatarType"), (value) => {
        if (value === null) {
            return true;
        } else {
            return ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type);
        }
    }),
    name: Yup.string().max(20, i18n.t("error.groupNameMaxLength")).required(i18n.t("error.groupNameRequired")),
    biography: Yup.string().max(50, i18n.t("error.biographyMaxLength"))
});