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


const conversationList = [
    {
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
        me: true
    },
    {
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
        me: false
    },
    {type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg", me: true},
    {type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/desktop-1.jpg", me: false},
    {type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf", me: true},
    {type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf", me: false},
    {type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp", me: true},
    {
        type: "video",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp",
        me: false
    },
    {
        type: "voice",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3",
        me: false
    },
    {type: "voice", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3", me: true},
    {type: "location", content: [35.9624, 53.1234], me: true},
    {type: "location", content: [35.9624, 53.1234], me: false},
    {type: "log", content: {time: 60 * 1000, status: "videoCall"}, me: true},
    {type: "log", content: {time: 90 * 1000, status: "voiceCall"}, me: false},
    {type: "log", content: {time: 50 * 1000, status: "voiceCall"}, me: false},
    {type: "log", content: {time: 0, status: "videoCall"}, me: true},
];

////////////////////////////////////////////////////////////////////////
const generated = [];

export function conversation(index = 0) {
    return conversationList[Math.floor(Math.random() * conversationList.length)]
}


export const getConversation = (index) => {
    console.log(generated)
    if (!generated[index]) {
        generated[index] = conversation(index)
    }

    return generated[index]
}

export function generateConversations(length, startIndex = 0) {
    return Array.from({length}).map((_, i) => getConversation(i + startIndex))
}