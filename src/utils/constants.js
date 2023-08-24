// assets
import desktop1 from "../assets/images/desktop-1.jpg";
import desktop2 from "../assets/images/desktop-2.png";
import desktop3 from "../assets/images/desktop-3.jpg";
import desktop4 from "../assets/images/desktop-4.jpg";
import desktop5 from "../assets/images/desktop-5.jpg";
import fa from "../assets/images/fa.png";
import en from "../assets/images/en.png";

export const version = "0.5.5";

export const dateTimeList = [
    {id: 1, title: "button.12h", value: "12h"},
    {id: 2, title: "button.24h", value: "24h"},
];

export const languageList = [
    {id: 1, title: "button.persian", value: "fa", flag: fa},
    {id: 2, title: "button.english", value: "en", flag: en},
];

export const themeList = [
    {id: 1, title: "select.light", value: false, background: desktop1},
    {id: 2, title: "select.dark", value: true, background: desktop2},
];

export const fontSizeList = [
    {id: 1, title: "12", value: 12, size: "caption"},
    {id: 2, title: "14", value: 14, size: "body2"},
    {id: 3, title: "16", value: 16, size: "body1"},
    {id: 4, title: "18", value: 18, size: "h6"},
    {id: 5, title: "20", value: 20, size: "h5"},
];

export const colorList = [
    {id: 1, color: {dark: "#60a5fa", light: "#2563eb"}},
    {id: 2, color: {dark: "#fb923c", light: "#d97706"}},
    {id: 3, color: {dark: "#e879f9", light: "#c026d3"}},
    {id: 4, color: {dark: "#22d3ee", light: "#0891b2"}},
];

export const backgroundList = [
    {id: 1, background: desktop1},
    {id: 2, background: desktop2},
    {id: 3, background: desktop3},
    {id: 4, background: desktop4},
    {id: 5, background: desktop5},
];