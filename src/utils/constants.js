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

export const version = "0.2.9";

export const languageList = [
    {id: 1, title: "button.persian", value: "fa", flag: fa},
    {id: 2, title: "button.english", value: "en", flag: en},
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
    {id: 1, color: {dark: "#60a5fa" , light: "#2563eb"} , image: mobile1},
    {id: 2, color: {dark: "#fb923c" , light: "#d97706"} , image: mobile2},
    {id: 3, color: {dark: "#e879f9" , light: "#c026d3"} , image: mobile3},
    {id: 4, color: {dark: "#22d3ee" , light: "#0891b2"} , image: mobile4},
];

export const backgroundList = [
    {id: 1, background: {desktop: desktop1, mobile: mobile1}},
    {id: 2, background: {desktop: desktop2, mobile: mobile2}},
    {id: 3, background: {desktop: desktop3, mobile: mobile3}},
    {id: 4, background: {desktop: desktop4, mobile: mobile4}},
    {id: 5, background: {desktop: desktop5, mobile: mobile5}},
];