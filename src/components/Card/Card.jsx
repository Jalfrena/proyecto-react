import styles from './Card.module.css';
import { forwardRef } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Card = forwardRef(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      hover = false,
      className = '',
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          styles.card,
          styles[variant],
          styles[`padding-${padding}`],
          hover && styles.hover,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;