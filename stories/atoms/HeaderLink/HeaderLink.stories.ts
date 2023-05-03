import type { Meta, StoryObj } from "@storybook/react";

import HeaderLink from "./HeaderLink";

const meta: Meta<typeof HeaderLink> = {
  title: "Atoms/Header Link",
  component: HeaderLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeaderLink>;

export const Primary: Story = {
  args: {
    children: "Home",
    path: "/",
  },
};
