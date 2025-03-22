// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';

import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-F1H0SE109N', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
  }
}

