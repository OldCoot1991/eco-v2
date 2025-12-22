import type { Meta, StoryObj } from '@storybook/react';
import { SliderDot } from './SliderDot';

const meta = {
    title: 'UI/Button/SliderDot',
    component: SliderDot,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isActive: {
            control: 'boolean',
            description: 'Is the dot active/selected',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof SliderDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        isActive: true,
        ariaLabel: 'Go to slide 1',
        onClick: () => console.log('Active dot clicked'),
    },
};

export const Inactive: Story = {
    args: {
        isActive: false,
        ariaLabel: 'Go to slide 2',
        onClick: () => console.log('Inactive dot clicked'),
    },
};
