// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    // Google Analytics removed temporarily to fix build issues
    // Can be re-added later with proper dependency installation
  }
}