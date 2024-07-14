import React, { PropsWithChildren } from "react"
import styles from "./Text.module.css"

export interface TextProps {
  type: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "label"
  color?: "black" | "white"
  size?: "small" | "medium" | "large"
  fontWeight?: "normal" | "bold"
}

export default function Text({
  type,
  children,
  size = "medium",
  fontWeight = "normal",
  color = "black",
  ...props
}: PropsWithChildren<TextProps>) {
  const componentMap: { [key: string]: React.ElementType } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    span: "span",
    label: "label",
  }

  const Component = componentMap[type]

  return (
    <Component
      className={`${styles.button} ${styles[size]} ${styles[fontWeight]} ${styles[color]}`}
      {...props}
    >
      {children}
    </Component>
  )
}
