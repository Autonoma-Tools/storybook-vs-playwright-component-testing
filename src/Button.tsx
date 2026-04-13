import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** The text label displayed on the button. */
  label: string;
  /** Whether the button is disabled. */
  disabled?: boolean;
  /** Whether the button is in a loading state. */
  loading?: boolean;
  /** Click handler. */
  onClick?: () => void;
}

/**
 * A simple Button component used to demonstrate Storybook CT
 * and Playwright CT testing side by side.
 */
export function Button({
  label,
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn ${loading ? 'btn--loading' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <span role="status" aria-label="Loading" className="btn__spinner" />
      ) : (
        label
      )}
    </button>
  );
}
