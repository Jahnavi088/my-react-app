import styles from './RadioRow.module.css'

export function RadioRow({ label, value, onChange, name }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <label className={styles.option}>
        <input
          type="radio"
          name={name}
          checked={value === true}
          onChange={() => onChange(true)}
        />
        <span>Yes</span>
      </label>
      <label className={styles.option}>
        <input
          type="radio"
          name={name}
          checked={value === false}
          onChange={() => onChange(false)}
        />
        <span>No</span>
      </label>
    </div>
  )
}

