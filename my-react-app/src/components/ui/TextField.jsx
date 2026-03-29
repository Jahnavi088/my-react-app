import styles from './TextField.module.css'

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  name,
  autoComplete,
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {required ? <span className={styles.required}>*</span> : null}
      </span>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        name={name}
        autoComplete={autoComplete}
      />
    </label>
  )
}

