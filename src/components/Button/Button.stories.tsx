import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'red',
    label: 'Default',
  },
};

export const Large: Story = {
  args: {
    color: 'green',
    label: 'Large',
    size: 'large'
  },
};

export const Small: Story = {
  args: {
    color: 'blue',
    label: 'Small',
    size: 'small'
  },
};
