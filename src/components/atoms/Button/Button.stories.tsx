import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "button--primary",
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "button--secondary",
  },
}
