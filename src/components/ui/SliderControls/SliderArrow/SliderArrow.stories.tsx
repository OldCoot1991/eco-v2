import type { Meta, StoryObj } from '@storybook/react';
import { SliderArrow } from './SliderArrow';

const meta = {
    title: 'UI/Button/SliderArrow',
    component: SliderArrow,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'radio',
            options: ['left', 'right'],
            description: 'Direction of the arrow',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof SliderArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
    args: {
        direction: 'left',
        ariaLabel: 'Previous Slide',
        onClick: () => console.log('Previous clicked'),
    },
};

export const Right: Story = {
    args: {
        direction: 'right',
        ariaLabel: 'Next Slide',
        onClick: () => console.log('Next clicked'),
    },
};
