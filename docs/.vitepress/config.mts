import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Emergent Scholarship",
  description: "Exploring an alternative approach to scholarship",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: 'about' },
      { text: 'Essays', link: 'essays' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'What is it?', link: '/what.md' },
          { text: 'Why does it matter?', link: '/why.md' },
          { text: 'Principles' , link: '/principles.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/michael-rowe/emergent-scholarship' }, 
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/michael-rowe-0a6b814/' }
    ]
  }
})
