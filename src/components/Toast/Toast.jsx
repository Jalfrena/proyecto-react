import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from '../icons';
import { Button } from '../Button';
import styles from './Toast.module.css';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const Toast = ({ 
  type = 'info', 
  title, 
  message, 
  duration = 5000, 
  onClose, 
  action 
}) => {
  const [visible, setVisible] = useState(true);
  const Icon = icons[type] || Info;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  const toastContent = (
    <div 
      className={styles.toast} 
      role="alert" 
      aria-live="polite"
      data-type={type}
    >
      <div className={styles.iconWrapper}>
        <Icon size={20} className={styles.icon} />
      </div>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {message && <div className={styles.message}>{message}</div>}
        {action && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={action.onClick}
            className={styles.action}
          >
            {action.label}
          </Button>
        )}
      </div>
      <button 
        className={styles.closeBtn} 
        onClick={() => { setVisible(false); onClose?.(); }}
        aria-label="Cerrar notificación"
      >
        <X size={16} />
      </button>
    </div>
  );

  if (typeof window === 'undefined') return null;

  return createPortal(toastContent, document.body);
};

export default Toast;