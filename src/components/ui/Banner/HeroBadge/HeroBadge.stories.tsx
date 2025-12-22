import type { Meta, StoryObj } from '@storybook/react';
import { HeroBadge } from './HeroBadge';

const meta = {
    title: 'UI/Banner/HeroBadge',
    component: HeroBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        dotColor: { control: 'color' },
    },
} satisfies Meta<typeof HeroBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Чистое будущее',
        dotColor: '#10b981', // Emerald-500
    },
};

export const Business: Story = {
    args: {
        text: 'Для бизнеса',
        dotColor: '#3b82f6', // Blue-500
    },
};
