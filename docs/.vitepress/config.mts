import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true, // Ignore dead links in the sidebar
  base: '/emergent-scholarship/', 
  title: "Emergent Scholarship",
  description: "Exploring an alternative approach to scholarship",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Notes', link: 'notes' },
      { text: 'About', link: 'about' },
      { text: 'Essays', link: 'essays' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'What is it?', link: '/what.md' },
          { text: 'What problem does it address?', link: '/problems.md' },
          { text: 'Why does it matter?' , link: '/why.md'}, 
          { text: 'How is this different?' , link: '/difference.md'}, 
          { text: 'We already do this' , link: 'exists.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/michael-rowe/emergent-scholarship' }, 
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/michael-rowe-0a6b814/' }
    ]
  }
})
