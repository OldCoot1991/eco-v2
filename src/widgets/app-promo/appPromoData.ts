import { FaApple, FaGooglePlay, FaCreditCard } from "react-icons/fa";
import { IconType } from "react-icons";

export interface AppStore {
    icon: IconType;
    label: string;
    title: string;
    variant: 'Primary' | 'Secondary';
}

export interface Partner {
    name: string;
    description: string;
    iconColor: 'Green' | 'Yellow';
}

export const appStores: AppStore[] = [
    {
        icon: FaApple,
        label: 'Download on',
        title: 'App Store',
        variant: 'Primary'
    },
    {
        icon: FaGooglePlay,
        label: 'Get it on',
        title: 'Google Play',
        variant: 'Secondary'
    }
];

export const partners: Partner[] = [
    {
        name: 'Сбербанк Онлайн',
        description: 'Оплата без комиссии',
        iconColor: 'Green'
    },
    {
        name: 'Т-Банк',
        description: 'Быстрые платежи',
        iconColor: 'Yellow'
    }
];
