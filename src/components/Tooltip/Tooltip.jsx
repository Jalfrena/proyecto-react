import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.css';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  delay = 200,
  className = '' 
}) => {
  const [visible, setVisible] = useState(false);
  const [tooltipRect, setTooltipRect] = useState({});
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const gap = 8;
    let top, left;

    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - gap;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + gap;
        break;
    }

    // Keep within viewport
    const viewportPadding = 8;
    if (left < viewportPadding) left = viewportPadding;
    if (left + tooltipRect.width > window.innerWidth - viewportPadding) {
      left = window.innerWidth - tooltipRect.width - viewportPadding;
    }
    if (top < viewportPadding) top = viewportPadding;
    if (top + tooltipRect.height > window.innerHeight - viewportPadding) {
      top = window.innerHeight - tooltipRect.height - viewportPadding;
    }

    setTooltipRect({ top, left });
  }, [position]);

  const show = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    showTimerRef.current = setTimeout(() => {
      setVisible(true);
      updatePosition();
    }, delay);
  }, [delay, updatePosition]);

  const hide = useCallback(() => {
    if (showTimerRef.current) clearTimeout(showTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (visible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [visible, updatePosition]);

  useEffect(() => {
    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const tooltipContent = visible ? (
    <div
      ref={tooltipRef}
      className={cn(styles.tooltip, styles[position], className)}
      style={{ top: tooltipRect.top, left: tooltipRect.left }}
      role="tooltip"
      aria-hidden="true"
    >
      <div className={styles.arrow} />
      <div className={styles.content}>{content}</div>
    </div>
  ) : null;

  if (typeof window === 'undefined') return <>{children}</>;

  // Only accept a single child element, not a function
  const child = Array.isArray(children) ? children[0] : children;
  
  return (
    <>
      {createPortal(tooltipContent, document.body)}
      {React.cloneElement(child, {
        ref: triggerRef,
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocus: show,
        onBlur: hide,
      })}
    </>
  );
};

import React from 'react';

export default Tooltip;