export const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    500: '#6366f1'
  },
  neutral: {
    50: '#fafafa',
    100: '#f3f4f6',
    700: '#374151'
  }
};

export const spacing = {
  px: '1px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem'
};

export const radii = {
  sm: '4px',
  md: '8px',
  full: '9999px'
};

export const tokens = {
  colors,
  spacing,
  radii
};

export type Tokens = typeof tokens;
