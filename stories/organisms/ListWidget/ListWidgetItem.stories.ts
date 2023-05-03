import type { Meta, StoryObj } from "@storybook/react";

import ListWidget from "./ListWidget";

const meta: Meta<typeof ListWidget> = {
  title: "Organisms/List Widget",
  component: ListWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListWidget>;

export const Primary: Story = {
  args: {
    title: "Recent Walks",
    listItems: [{ title: "Helvelyn" }, { title: "Skiddaw" }],
  },
};
