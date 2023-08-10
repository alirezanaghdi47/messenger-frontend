import i18n from "i18next";
import Jalaali from "jalaali-js";
import {format} from "date-fns-jalali";

export const convertTimestamp = (ms) => {

    const minuteTime = Number(Math.floor(ms / 60000));
    const secondTime = Number(((ms % 60000) / 1000).toFixed(0));

    const minuteText = i18n.t("typography.minute");
    const secondText = i18n.t("typography.second");

    if (i18n.language === "fa") {
        if (minuteTime > 0 && secondTime > 0) return `${secondTime} ${secondText} , ${minuteTime} ${minuteText}`;
        if (minuteTime > 0 && secondTime === 0) return `${minuteTime} ${minuteText}`;
        if (secondTime > 0 && minuteTime === 0) return `${secondTime} ${secondText}`;
    }

    if (i18n.language === "en") {
        if (minuteTime > 0 && secondTime > 0) return `${minuteTime} ${minuteText} , ${secondTime} ${secondText}`;
        if (minuteTime > 0 && secondTime === 0) return `${minuteTime} ${minuteText}`;
        if (secondTime > 0 && minuteTime === 0) return `${secondTime} ${secondText}`;
    }

}

export const convertByte = (byte) => {

    let i = -1;
    const enByteUnits = ['kB', 'MB', 'GB'];
    const faByteUnits = ['کیلوبایت', 'مگابایت', 'گیگابایت '];

    do {
        byte /= 1024;
        i++;
    } while (byte > 1024);

    const byteUnit = i18n.language === "fa" ? faByteUnits : enByteUnits;

    return `${Math.max(byte, 0.1).toFixed(1)} ${byteUnit[i]}`;

}

export const getIsoStringFromDate = (date) => {
    const year = Number(date?.split("/")[0]);
    const month = Number(date?.split("/")[1]);
    const day = Number(date?.split("/")[2]);

    const {gy, gm, gd} = Jalaali.toGregorian(year, month, day);

    const parsedDate = new Date();
    parsedDate.setFullYear(gy, gm - 1, gd);

    return new Date(parsedDate);
}

export const getDateFromIsoString = (isoString) => format(new Date(isoString), "yyyy/MM/dd");
