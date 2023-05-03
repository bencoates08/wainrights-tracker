import type { Meta, StoryObj } from "@storybook/react";

import AddButton from "./AddButton";

const meta: Meta<typeof AddButton> = {
  title: "Atoms/Button",
  component: AddButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const Primary: Story = {};
