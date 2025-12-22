import type { Meta, StoryObj } from '@storybook/react';
import { HeroButton } from './HeroButton';
import { FaArrowRight } from 'react-icons/fa';

const meta = {
    title: 'UI/Banner/HeroButton',
    component: HeroButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'outline'],
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof HeroButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Оставить заявку',
        variant: 'primary',
        icon: <FaArrowRight />,
    },
};

export const Outline: Story = {
    args: {
        children: 'О компании',
        variant: 'outline',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Узнать подробнее',
        variant: 'secondary',
    },
};
