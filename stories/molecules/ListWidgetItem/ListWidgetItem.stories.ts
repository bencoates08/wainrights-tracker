import type { Meta, StoryObj } from "@storybook/react";

import ListWidgetItem from "./ListWidgetItem";

const meta: Meta<typeof ListWidgetItem> = {
  title: "Molecules/List Widget Item",
  component: ListWidgetItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListWidgetItem>;

export const Primary: Story = {
  args: {
    title: "Helvelyn",
  },
};
