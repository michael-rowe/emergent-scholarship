import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Emergent Scholarship",
  description: "A project to explore the potential of emergent scholarship in the digital age.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Article', link: './article/theoretical-framework-ai-integration-hpe' },
    ],

    sidebar: [
      {
        text: 'PART 0: Introduction',
        items: [
          { text: 'Why this?', link: '/' },
          { text: 'Why now?', link: '/' }
        ]
      },
      {
        text: 'PART 1: Foundations and context',
        items: [
          { text: 'The changing landscape of healthcare and education', link: '/' },
          { text: 'Introducing emergent scholarship', link: '/' },
          { text: 'The seven principles of emergent scholarship', link: '/' },
          { text: 'How the principles work together', link: '/' }
        ]
      },
      {
        text: 'PART 2: Emergent Scholarship in Practice',
        items: [
          { text: 'Reimigining health professions education', link: '/' },
          { text: 'Assessment in an AI-enabled world', link: '/'},
          { text: 'Breaking down silos in interprofessional education', link: '/' },
          { text: 'From curriculum overload to connected learning', link: '/' }
        ]
      },
      {
        text: 'PART 3: Applications across the educational continuum',
        items: [
          { text: 'Students', link: '/' },
          { text: 'Educators', link: '/' },
          { text: 'Researchers', link: '/' },
          { text: 'Leaders and institutions', link: '/' }
        ]
      },
      {
        text: 'PART 4: Challenges and building the future',
        items: [
          { text: 'Addressing common concerns and challenges', link: '/' },
          { text: 'Practical implementation frameworks', link: '/' },
          { text: 'Diverse perspectives', link: '/' },
          { text: 'Future horizons', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/michael-rowe/emergent-scholarship' }
    ]
  }
})
