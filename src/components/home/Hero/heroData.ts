import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';

export interface HeroButton {
    href: string;
    text: string;
    variant: 'primary' | 'secondary';
    icon?: IconType;
}

export const heroButtons: HeroButton[] = [
    {
        href: '/request-tko',
        text: 'Заказать вывоз',
        variant: 'primary',
        icon: FaArrowRight
    },
    {
        href: '/report-tko',
        text: 'Сообщить о проблеме',
        variant: 'secondary'
    }
];

export const bgCircles = ['bgCircle1', 'bgCircle2'];
