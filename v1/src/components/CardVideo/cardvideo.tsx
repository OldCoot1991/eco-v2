import React from "react";

export interface Card {
    text: string;
    src: string;
}

const VideoCards: Card[] = [
    {
        text: "Мультфильм «Просто разделяй. Раздельный сбор отходов - мой выбор!»",
        src: "https://www.youtube.com/embed/4cZcgIBPc_U",
    },
    {
        text: "Мультфильм «Барбоскины. Осторожно, экология!»",
        src: "https://vk.com/video_ext.php?oid=-61911646&id=456239823&hash=755ed14be3b82ab3",
    },
    {
        text: "Мультфильм «Синий трактор. Машинка мусоровоз»",
        src: "https://www.youtube.com/embed/LG6jaTbxiFs",
    },
    {
        text: "Мультфильм «Развлечёба. Экология»",
        src: "https://www.youtube.com/embed/ys4yJeclORk",
    },
    {
        text: "Мультфильм «Щенячий патруль. раздельный сбор отходов»",
        src: "https://www.youtube.com/embed/p4uxIEYyQcM",
    },
];

export { VideoCards };
