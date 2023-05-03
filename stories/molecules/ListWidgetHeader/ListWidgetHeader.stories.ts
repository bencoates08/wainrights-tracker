import type { Meta, StoryObj } from "@storybook/react";

import ListWidgetHeader from "./ListWidgetHeader";

const meta: Meta<typeof ListWidgetHeader> = {
  title: "Molecules/List Widget Header",
  component: ListWidgetHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListWidgetHeader>;

export const Primary: Story = {
  args: {
    title: "Recent Walks",
  },
};

export const NoAdd: Story = {
  args: {
    title: "Recent Walks",
    onAddClick: undefined,
  },
};
