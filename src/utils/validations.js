import * as Yup from "yup";
import i18n from "i18next";

export const editProfileSchema = Yup.object().shape({
    avatar: Yup.mixed().test("fileSize",  i18n.t("error.avatarSize"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return value.size <= 5 * 1_024_000;
        }
    }).test("fileType", i18n.t("error.avatarType"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type);
        }
    }),
    biography: Yup.string().max(200, i18n.t("error.biographyMaxLength")),
});

export const registerSchema = Yup.object().shape({
    userName: Yup.string().matches(/^[a-zA-Z0-9_\.\-\@]+$/ , i18n.t("error.userNameFormat")).min(8,i18n.t("error.userNameMinLength")).max(40 , i18n.t("error.userNameMaxLength")).required(i18n.t("error.userNameRequired")),
    phoneNumber: Yup.string().matches(/^(098|0098|98|\+98|0)?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g , i18n.t("error.phoneNumberFormat")).required(i18n.t("error.phoneNumberRequired")),
});

export const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string().matches(/^(098|0098|98|\+98|0)?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g , i18n.t("error.phoneNumberFormat")).required(i18n.t("error.phoneNumberRequired")),
});

export const verifyUserSchema = Yup.object().shape({
    code: Yup.string().min(6 , i18n.t("error.codeLength")).max(6 , i18n.t("error.codeLength")).required(i18n.t("error.codeRequired")),
});

export const addTextMessageSchema = Yup.object().shape({
    text: Yup.string().trim().required(),
});

export const addGroupSchema = Yup.object().shape({
    avatar: Yup.mixed().test("fileSize",  i18n.t("error.avatarSize"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return value && value.size <= 5 * 1_024_000;
        }
    }).test("fileType", i18n.t("error.avatarType"), (value) => {
        if (Object.keys(value).length === 0) {
            return true;
        } else {
            return ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type);
        }
    }),
    name: Yup.string().matches(/^[a-zA-Z0-9_\.\-\@]+$/ , i18n.t("error.userNameFormat")).min(8,i18n.t("error.userNameMinLength")).max(40 , i18n.t("error.userNameMaxLength")).required(i18n.t("error.userNameRequired")),
    description: Yup.string().max(200, i18n.t("error.biographyMaxLength")),
});