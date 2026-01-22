/**
 * Muni Construction Theme Configuration
 * This file contains all theme variables for consistent styling across the application.
 * Import this file whenever you need access to theme colors, typography, or spacing.
 */

export const theme = {
  colors: {
    light: {
      primary: '#ee7412',
      primaryHover: '#df5a08',
      primaryLight: '#fef7ed',
      secondary: '#5d737e',
      secondaryHover: '#4f616b',
      accent: '#22c55e',
      accentHover: '#16a34a',
      background: '#ffffff',
      surface: '#f8f9fa',
      surfaceHover: '#f1f3f5',
      text: {
        primary: '#1a1a1a',
        secondary: '#4b5563',
        muted: '#9ca3af',
        inverse: '#ffffff',
      },
      border: '#e5e7eb',
      borderHover: '#d1d5db',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    dark: {
      primary: '#f19038',
      primaryHover: '#f6b871',
      primaryLight: '#401405',
      secondary: '#788e99',
      secondaryHover: '#a4b5bc',
      accent: '#4ade80',
      accentHover: '#86efac',
      background: '#0f172a',
      surface: '#1e293b',
      surfaceHover: '#334155',
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        muted: '#94a3b8',
        inverse: '#0f172a',
      },
      border: '#334155',
      borderHover: '#475569',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fonts: {
      heading: "'Montserrat', 'Inter', sans-serif",
      body: "'Open Sans', 'Inter', sans-serif",
      accent: "'Bebas Neue', 'Oswald', sans-serif",
    },
    sizes: {
      hero: '4.5rem',
      h1: '3rem',
      h2: '2.25rem',
      h3: '1.875rem',
      h4: '1.5rem',
      h5: '1.25rem',
      body: '1rem',
      bodyLarge: '1.125rem',
      small: '0.875rem',
      xs: '0.75rem',
    },
    lineHeights: {
      tight: '1.1',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    section: '5rem',
    sectionMobile: '3rem',
    container: '1280px',
    containerPadding: '1.5rem',
    gap: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  borderRadius: {
    none: '0',
    small: '0.375rem',
    medium: '0.5rem',
    large: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    light: {
      none: 'none',
      small: '0 1px 3px rgba(0,0,0,0.1)',
      medium: '0 4px 6px rgba(0,0,0,0.1)',
      large: '0 10px 25px rgba(0,0,0,0.15)',
      xl: '0 20px 40px rgba(0,0,0,0.2)',
    },
    dark: {
      none: 'none',
      small: '0 1px 3px rgba(0,0,0,0.3)',
      medium: '0 4px 6px rgba(0,0,0,0.4)',
      large: '0 10px 25px rgba(0,0,0,0.5)',
      xl: '0 20px 40px rgba(0,0,0,0.6)',
    },
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    tooltip: 60,
  },
}

// Company information - easily editable
export const companyInfo = {
  name: 'Muni Construction',
  tagline: "Your Trusted Halifax Contractor Since 2025",
  phone: '(902) 500-9846',
  email: 'info@municonstruction.com',
  address: {
    street: '2825, Main street west',
    city: 'Halifax',
    province: 'NS',
    postalCode: 'B3H 2Y9',
    full: '2825, Main street west, Shubenacadie, NS B0N 2H0',
  },
  hours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
    emergency: 'Available 24/7',
  },
  social: {
    facebook: 'https://facebook.com/municonstruction',
    instagram: 'https://instagram.com/municonstruction',
    linkedin: 'https://linkedin.com/company/municonstruction',
  },
}

// Form configuration
export const formConfig = {
  webhookUrl: 'YOUR_N8N_WEBHOOK_URL_HERE', // Replace with actual N8n webhook URL
  projectTypes: [
    'Residential Construction',
    'Commercial Construction',
    'Renovation/Remodel',
    'Roofing & Siding',
    'Concrete & Foundations',
    'Other',
  ],
  budgetRanges: [
    'Under $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k - $500k',
    '$500k+',
    'Not sure yet',
  ],
}

export default theme
