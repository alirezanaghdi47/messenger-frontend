// assets
import desktop1 from "@/assets/images/desktop-1.jpg";
import desktop2 from "@/assets/images/desktop-2.png";
import desktop3 from "@/assets/images/desktop-3.jpg";
import desktop4 from "@/assets/images/desktop-4.jpg";
import desktop5 from "@/assets/images/desktop-5.jpg";
import mobile1 from "@/assets/images/mobile-1.jpg";
import mobile2 from "@/assets/images/mobile-2.png";
import mobile3 from "@/assets/images/mobile-3.jpg";
import mobile4 from "@/assets/images/mobile-4.jpg";
import mobile5 from "@/assets/images/mobile-5.jpg";
import fa from "@/assets/images/fa.png";
import en from "@/assets/images/en.png";
import dark from "@/assets/images/mobile-4.jpg";
import light from "@/assets/images/mobile-5.jpg";

export const languageList = [
    {id: 1, title: "select.persian", value: "fa", flag: fa},
    {id: 2, title: "select.english", value: "en", flag: en},
];

export const themeList = [
    {id: 1, title: "select.light", value: false, src: light},
    {id: 2, title: "select.dark", value: true, src: dark},
];

export const fontSizeList = [
    {id: 1, title: "12", value: 12, size: "caption"},
    {id: 2, title: "14", value: 14, size: "body2"},
    {id: 3, title: "16", value: 16, size: "body1"},
    {id: 4, title: "18", value: 18, size: "h6"},
    {id: 5, title: "20", value: 20, size: "h5"},
];

export const colorList = [
    {id: 1, title: "red", value: "#DB4437"},
    {id: 2, title: "green", value: "#0F9D58"},
    {id: 3, title: "blue", value: "#4285F4"},
    {id: 4, title: "yellow", value: "#F4B400"},
];

export const backgroundList = [
    {id: 1, src: {desktop: desktop1, mobile: mobile1}},
    {id: 2, src: {desktop: desktop2, mobile: mobile2}},
    {id: 3, src: {desktop: desktop3, mobile: mobile3}},
    {id: 4, src: {desktop: desktop4, mobile: mobile4}},
    {id: 5, src: {desktop: desktop5, mobile: mobile5}},
];