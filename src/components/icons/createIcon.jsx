export const createIcon = (Component, defaultSize = 20) => {
  const Icon = ({ size = defaultSize, className = '', 'aria-label': ariaLabel, ...props }) => (
    <Component
      size={size}
      className={className}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      {...props}
    />
  );
  Icon.displayName = Component.displayName || Component.name || 'Icon';
  return Icon;
};