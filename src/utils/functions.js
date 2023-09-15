import i18n from "i18next";

export const formattedMilisecond = (ms) => {

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

export const formattedByte = (byte) => {

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

export const formattedSecond = (second) => {
    const date = new Date(second * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = ('0' + date.getUTCSeconds()).slice(-2)
    if (hh) {
        return `${hh}:${('0' + mm).slice(-2)}:${ss}`
    }
    return `${mm}:${ss}`
}
