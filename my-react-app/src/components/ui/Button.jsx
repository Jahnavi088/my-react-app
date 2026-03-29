import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  ...props
}) {
  const cls = [
    styles.button,
    styles[variant] ?? styles.primary,
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  )
}

