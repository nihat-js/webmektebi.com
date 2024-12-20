/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Deep blue for main branding
        secondary: '#FBBF24', // Soft peach for highlights and accents
        accent: '#8B5CF6',    // Vibrant purple for call-to-action buttons

        // Background and Text Colors
        background: '#F9FAFB', // Light gray background for clean, subtle contrast
        dark: '#333333',       // Charcoal dark text for readability
        muted: '#6B7280',      // Muted gray for secondary text or placeholders
        placeholder: '#D1D5DB',// Light gray for placeholder text

        // Useful UI colors
        success: '#4CAF50',    // Success green for notifications or messages
        warning: '#FF9800',    // Warning orange for alerts
        error: '#F44336',
      },
    },
  },
  plugins: [],
};
