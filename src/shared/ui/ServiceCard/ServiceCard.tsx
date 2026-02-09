import React from 'react';
import { IconType } from 'react-icons';
import { ServiceCardSimple } from './ServiceCardSimple';
import { ServiceCardGlass } from './ServiceCardGlass';

export interface ServiceCardProps {
    icon: React.ReactNode | IconType;
    title: string;
    description: string;
    link?: string;
    actionText?: string;
    variant?: 'glass' | 'simple'; // glass для компании, simple для бизнеса
    color?: string; // для simple варианта
    isExpanded?: boolean;
    onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
    const { variant = 'simple' } = props;

    if (variant === 'simple') {
        return <ServiceCardSimple {...props} />;
    }

    return <ServiceCardGlass {...props} />;
};
