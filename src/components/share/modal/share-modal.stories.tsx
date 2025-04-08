import { Meta, StoryObj } from "@storybook/react";
import { ShareModal } from "./ShareModal";
import { ShareModalExemple } from "./ShareModalExemple";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/share/Modal",
  component: ShareModal,
  tags: ["autodocs"],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof ShareModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => <ShareModalExemple />,
};
