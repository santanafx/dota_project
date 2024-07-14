import { Meta, StoryObj } from "@storybook/react"
import Text, { TextProps } from "./Text"

export default {
  title: "Atoms/Text",
  component: Text,
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const H1: StoryObj<TextProps> = {
  args: {
    type: "h1",
    color: "black",
    size: "medium",
    fontWeight: "bold",
    children: "Heading 1",
  },
}

export const P: StoryObj<TextProps> = {
  args: {
    type: "p",
    color: "black",
    size: "large",
    fontWeight: "normal",
    children: "p",
  },
}
