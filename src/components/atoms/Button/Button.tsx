import styles from "./Button.module.css"
export interface ButtonProps {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant: "button--primary" | "button--secondary"
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}
