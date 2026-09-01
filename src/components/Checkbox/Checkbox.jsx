import styles from './Checkbox.module.css';
import { forwardRef } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Checkbox = forwardRef(
  (
    {
      label,
      error,
      className = '',
      id,
      disabled = false,
      required = false,
      indeterminate = false,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${checkboxId}-error` : undefined;
    const describedBy = errorId || undefined;

    return (
      <div className={cn(styles.wrapper, className)}>
        <label htmlFor={checkboxId} className={cn(styles.label, disabled && styles.disabled)}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            aria-required={required}
            {...props}
          />
          <span
            className={cn(
              styles.box,
              indeterminate && styles.indeterminate,
              error && styles.error
            )}
            aria-hidden="true"
          >
            {indeterminate ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14" height="2" x="0" y="6" rx="1" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 7L6 9.5L10.5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            )}
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
        {error && (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;