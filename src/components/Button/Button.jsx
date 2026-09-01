import styles from './Button.module.css';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  type = 'button',
  className = '',
  onClick,
  ...props
}) => {
  const classNames = cn(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading,
    className
  );

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!loading && leftIcon && <span className={styles.iconLeft} aria-hidden="true">{leftIcon}</span>}
      <span className={styles.content}>{children}</span>
      {!loading && rightIcon && <span className={styles.iconRight} aria-hidden="true">{rightIcon}</span>}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;