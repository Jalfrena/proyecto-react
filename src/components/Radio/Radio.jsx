import styles from './Radio.module.css';
import { forwardRef } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Radio = forwardRef(
  (
    {
      label,
      error,
      className = '',
      id,
      disabled = false,
      required = false,
      name,
      value,
      ...props
    },
    ref
  ) => {
    const radioId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${radioId}-error` : undefined;
    const describedBy = errorId || undefined;

    return (
      <div className={cn(styles.wrapper, className)}>
        <label htmlFor={radioId} className={cn(styles.label, disabled && styles.disabled)}>
          <input
            ref={ref}
            id={radioId}
            type="radio"
            name={name}
            value={value}
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            aria-required={required}
            {...props}
          />
          <span
            className={cn(styles.box, error && styles.error)}
            aria-hidden="true"
          >
            <span className={styles.dot} />
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

Radio.displayName = 'Radio';

export default Radio;