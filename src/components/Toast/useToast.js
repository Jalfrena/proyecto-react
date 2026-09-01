import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Toast from './Toast';
import styles from './Toast.module.css';

export const ToastContainer = ({ toasts, onRemove }) => {
  return (
    <div className={styles.container} aria-live="polite" aria-atomic="false">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now() + Math.random();
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const success = useCallback((title, message, options) => 
    addToast({ type: 'success', title, message, ...options }), [addToast]);
  const error = useCallback((title, message, options) => 
    addToast({ type: 'error', title, message, ...options }), [addToast]);
  const warning = useCallback((title, message, options) => 
    addToast({ type: 'warning', title, message, ...options }), [addToast]);
  const info = useCallback((title, message, options) => 
    addToast({ type: 'info', title, message, ...options }), [addToast]);

  return { toasts, addToast, removeToast, success, error, warning, info };
};

export const createToastPortal = (toasts, onRemove) => {
  if (typeof window === 'undefined') return null;
  
  const container = document.createElement('div');
  container.id = 'toast-portal';
  document.body.appendChild(container);
  
  return createPortal(<ToastContainer toasts={toasts} onRemove={onRemove} />, container);
};