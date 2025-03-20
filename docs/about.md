# About Emergent Scholarship

Emergent scholarship is a forward-looking, interdisciplinary approach to knowledge creation and dissemination, embracing the principles of emergence observed in complex systems.

## About the author

<img src="/media/Michael-Rowe-profile.png" alt="Profile photo of the author, Michael Rowe" class="right-aligned-image" style="width: 200px; ">

I am an Associate Professor and Director of Digital Innovation in the School of Health and Care Sciences at the University of Lincoln in the United Kingdom.

My early research led to a PhD investigating the impact of blended learning in health professions education, laying the foundation for ongoing work exploring the intersection of technology and pedagogy.

My scholarship focuses on the transformative potential of digital technologies in education, with a particular interest in how they influence relationships between teachers and students in learning environments. Drawing on critical pedagogy and complexity science, my work focuses on the use of technological innovation to enhance both education and clinical practice while maintaining student-centred approaches to learning.

I am currently working on the implications of generative AI in health professions education and clinical practice, contributing to institutional and professional guidance for AI integration in higher education and professional practice.

[Web](https://www.mrowe.co.za/blog/) | [Google Scholar](https://scholar.google.com/citations?user=H6CN3yAAAAAJ&hl=en) | [LinkedIn](https://www.linkedin.com/in/michael-rowe-0a6b814/)

## Writing workflow

I wanted this project use a writing workflow that was not only *about* emergent scholarship, but which is directly informed *by* emergent scholarship. In other words, I wanted to use the principles to write about the principles.

1. Connection. Does the writing process build knowledge by connecting ideas and people?
2. Networks. Does the writing process build relationships and explicitly integrate distributed knowledge?
3. Community. Does the writing process foster a learning community?
4. Openness. Is the writing process transparent and accessible?
5. Medium. Do my publishing choices use appropriate tools and platforms?
6. Engagement. Is there a way to engage through interactive learning experiences?
7. Mastery. Am I developing expertise through practice?
8. Ecology. Does the process help me to better understand systemic interactions?

## Technology stack

I wanted the technology choices to support the principles as much as possible.

### Editor

I do most of my writing with markdown in Obsidian and so wanted this process to fit into that workflow. The benefits of markdown are that it's fast, distraction-free, and platform- and app-agnostic.

### Layout

I chose Vitepress to create the layout. Vitepress is a static site generator that allows me to focus on writing rather than layout. Once I've made a few edits that I want to publish, I use Vitepress to build a new site (it takes just under 3 seconds at the moment), check it locally, and then publish it to Github.

### Publishing

Once I'm happy with the changes I've made I use Visual Studio Code (or the terminal) to push my changes to a Github repository. This is an online, public repository of my work, which is available for comment and discussion. There are other possibiliites enabled by this as well. For example, someone could clone the repository and download a copy for themselves, which they could also edit. Or someone could fork the project and create a modified version, maybe in another language.

### Deployment

I use Netlify to deploy the final website, based on the changes I've made to the Github repository. This is what a reader eventually sees online at the book URL: [https://emergent-scholarship.netlify.app/](https://emergent-scholarship.netlify.app/)

This process might seem overly complicated but it's almost all automated.

1. Do my writing in Obsidian
2. Every now and again, I rebuild the website in the terminal (using 'npm run docs:build', a process that takes fewer than 3 seconds)
3. I push the changes to Github (a couple of terminal commands...again, just a few seconds)
4. Netlify detects the changes in the Github repository and deplays the new site
