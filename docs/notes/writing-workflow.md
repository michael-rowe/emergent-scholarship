# Writing in an open, collaborative system

The way we write profoundly shapes what we can say and how we collaborate. Traditional academic writing processes—centred around word processors and email exchanges—both reflect and reinforce closed, hierarchical knowledge systems. This new academic writing workflow isn't only a technical choice; it's a deliberate effort to create bridges between how we talk about scholarship and how we actually practise it.

This workflow enables a low-cost, near frictionless method for open scholarly practice and rapid dissemination of academic work, while also directly challenging the [publishing industry's control](/essays/transparency-transforms-trust.md) over trust and publication. By managing our own means of creation, production, distribution, and archival channels, we shift power back to scholars and communities, making knowledge more accessible and allowing for more responsive, evolving scholarship.

## Writing process overview

Here's how my academic writing and publication process works:

1. [Markdown](https://en.wikipedia.org/wiki/Markdown) for writing: Plain text with simple formatting that focuses on content rather than presentation (I do most of my writing in [Obsidian](https://obsidian.md/))
2. [Git](https://en.wikipedia.org/wiki/Git)/[GitHub](https://github.com/) for versioning and collaboration: Version control with transparent history, public engagement, and the possibility of peer review
3. [VitePress](https://vitepress.dev/) for presentation: Automated conversion of markdown to a readable website (this site is built with Vitepress)
4. [Netlify](https://www.netlify.com/) for deployment: Automated publishing of the "live" version of the document, initially with no DOI
5. Manual [Zenodo](https://zenodo.org/) submission: For creating [DOIs](https://en.wikipedia.org/wiki/Digital_object_identifier) and permanent snapshots through preprints (I will also start adding the preprints to the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) for long-term archiving)
6. Journal submission: If I decide to, I can submit the preprint to a traditional academic journal for a more traditional publication

VitePress and Netlify primarily automate presentation and deployment—they're not strictly necessary for the core functions of writing, reviewing, and publishing. The essential components are markdown-based writing and GitHub for transparent version control and collaboration.

This process creates a living document that anyone can see evolve, contribute to, and engage with (via the Github repo and published website), while still maintaining academically viable versions for citation purposes (preprint and journal submissions).

While the initial idea might seem overly complicated, it's almost all automated and takes seconds to go from editing in Obsidian, to an updated website. The manual submission to Zenodo for the DOI, and minor editing required, are nothing compared to the hoops we have to jump through with journal submissions.

This system enables me to rapidly [create and publish live documents](/essays.md) that evolve transparently while maintaining academically citable versions. It's not just about the technology—it's about putting emergent scholarship principles into practice through the media I use to share ideas.

## Emgergent scholarship principles embodied

While this writing process enables a more open and collaborative practice, it's also a way for me to test the [principles of emergent scholarship](/principles.md); do these principles actually enable "a forward-looking, interdisciplinary approach to knowledge creation and sharing that embraces complexity, connection, collaboration, adaptation, and public engagement"?

**Knowledge through connection**

- Git's branching and merging makes the evolution of ideas transparent; every change is tracked and recorded through version control
- GitHub issues and pull requests create visible connections between contributors (assuming others join the project and buy into the publishing system)
- Using Vitepress to create links between project- and web-based documents and discussions show the networked nature of knowledge development

**Information flow through networks**

- Open repositories allow anyone to fork, adapt, and build upon work (I recognise that this is quite technical and possibly out of reach for many people who don't have the time or inclination to adapt to new processes)
- Automated publishing ensures ideas move freely and rapidly
- Multiple distribution formats (web, PDF, DOI) enable content to flow across contexts

**Identity through community**

- All contributions are permanently attributed through Git history
- Public review and discussion builds community around shared work, hopefully leading to shared ownership of products and a public 'academic commons' where intellectual property belongs to the community
- Author identity emerges through visible patterns of contribution and collaboration; what you choose to contribute to says something about your academic identify, your values, and beliefs

**Innovation through openness**

- Public repositories invite unexpected contributions
- Early sharing creates conditions for serendipitous connections that may spark new ideas in others
- Open, ongoing development enables continuous improvement, where the [version of record](https://en.wikipedia.org/wiki/Version_of_record) becomes a stepping stone in an evolutionary series

**Meaning through medium**

- Markdown focuses on content and ideas over formatting and presentation, emphasising a simpler approach to writing process
- Multiple output formats acknowledge that different contexts require different presentations

**Value through engagement**

- GitHub metrics make engagement visible (stars, forks, issues), similar to altmetrics for academic publication
- Public dialogue creates transparent record of impact, moving away from the notion of value through traditional citation metrics
- However, DOIs (through Zenodo) enable traditional citation alongside alternative engagement metrics

**Sustainability through ecology**

- Plain text ensures work remains readable regardless of technological change, ensuring long-term sustainability of the work
- Low-bandwidth plain text minimises environmental impact of information transmission and storage
- Public repositories reduce duplication of effort, as it becomes easier to find projects to contribute to
- Open collaboration distributes workload across contributors, making it easier to build large scale projects

## Rebalancing power in knowledge production

The way we write profoundly shapes what we can say and how we collaborate. Traditional academic writing processes—centred around journal and publisher ecosystems—both reflect and reinforce closed, hierarchical knowledge systems. The academic writing workflow described here isn't only a technical choice; it's a deliberate effort to create bridges between how we talk about scholarship and how we actually practise it.

There's an important power dynamic at play here. The traditional publishing system gives the industry a lot of power in choosing the direction and pace of knowledge creation and dissemination. They determine what gets published, when, and how it's distributed—often putting it behind paywalls that limit who can access cutting edge ideas. I describe this as the [research industrial complex](/essays/publishing-with-purpose.md); a system that prioritises publication metrics and profit over meaningful scientific progress.

My approach to academic writing is a way of replicating some of the functionality of the closed publishing system while taking back some of that power, particularly around the timing, format, and accessibility of knowledge sharing.

Through these concrete technical practices, I'm trying to not only theorise about emergent scholarship but also enact it, demonstrating its principles through the process I use to describe them.

## Problems this addresses

This approach directly takes on several important challenges in existing scholarly practices:

### Writing experience

Word processors often impose unnecessary complexity that gets in the way of writing. Markdown provides a distraction-free environment that separates content creation from formatting concerns, allowing writers to focus on what matters most—their ideas.

### Reviewer recognition

In traditional publishing, peer reviewers (might) make significant intellectual contributions but receive minimal recognition, even with open peer review processes. GitHub's issue-based discussions create permanent, citable records of all contributions, properly acknowledging everyone who shapes the work rather than relegating them to a brief acknowledgement or, more likely, anonymity. It will also address the [Reviewer 2 problem](https://blogs.lse.ac.uk/impactofsocialsciences/2023/01/26/for-epistemic-respect-against-reviewer-2/), and possibly help support more collegial and scholarly discussion and debate.

### Reviewer recruitment

It isn't much discussed, but many editors rely for peer review on "whoever said yes" rather than ideal expertise, given the difficulty of finding reviewers. Open GitHub discussions allow for broader, more diverse feedback while maintaining transparency about who contributed what—making the quality and context of review visible to all. I know that some people reading this will be wondering about the issues that come with inviting your own peer reviewers to go through your writing, but 1) we often have to suggest peer reviewers to editors anyway, and 2) this is all public, so it would make gaming the system challenging over time.

### Knowledge evolution

Traditional publishing freezes knowledge at a point in time. This isn't a bad thing but encourages a perspective that publication is an end-point in the research process. This workflow maintains living documents that can evolve while still providing stable snapshots through DOIs for citation purposes, acknowledging that knowledge is never truly static.

### Power redistribution

By controlling the means of production and distribution, this approach shifts power away from publishers and back to scholars and communities. It allows for immediate sharing of ideas rather than waiting months or years for publication, and it makes knowledge freely accessible rather than locked behind paywalls.

---

This project remains an experiment—a bridge between established academic practices and new possibilities that technology enables. It doesn't reject traditional scholarship but extends it, creating pathways for knowledge to develop more openly, collaboratively, and transparently.