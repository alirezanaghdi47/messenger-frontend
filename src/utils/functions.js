import i18n from "i18next";

export const convertTimestamp = (ms) => {

    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    if (seconds == 0) {
        return `${minutes} ${i18n.t("typography.minute")}`;
    } else {
        return `${(seconds < 10 ? '0' : '') + seconds} ${i18n.t("typography.second")} , ${minutes} ${i18n.t("typography.minute")}`;
    }

}

export const convertByte = (byte) => {

    let i = -1;
    const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];

    do {
        byte /= 1024;
        i++;
    } while (byte > 1024);

    return  `${Math.max(byte, 0.1).toFixed(1)} ${byteUnits[i]}`;

}