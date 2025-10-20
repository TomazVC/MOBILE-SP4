export const colors = {
  // Futuristic Neon Palette
  neon: {
    pink: '#EE0BFF',
    purple: '#9C0AE8',
    electric: '#6402FF',
    ion: '#240AE8',
    future: '#0B30FF',
  },
  
  // Neutral Palette
  neutral: {
    light: '#F2F2F2',
    card: '#D9D9D9',
    secondary: '#8C8C8C',
    primary: '#404040',
    border: '#595959',
  },
  
  // Semantic Colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  
  // Background
  background: '#F2F2F2',
  surface: '#FFFFFF',
};

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  weights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  families: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    // Web-compatible shadow
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    // Web-compatible shadow
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    // Web-compatible shadow
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};

// Helper function for gradient background
export const gradientBackground = {
  primary: ['#EE0BFF', '#0B30FF'],
  secondary: ['#9C0AE8', '#6402FF'],
  neutral: ['#F2F2F2', '#D9D9D9'],
};

export type Theme = typeof theme;
