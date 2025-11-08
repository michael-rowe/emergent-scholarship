---
title: "Beyond document management: Graph infrastructure for professional education curricula"
author:
  - Michael Rowe
  - Wesley Lynch
affiliation:
  - University of Lincoln
  - Snapplify
email:
  - mrowe@lincoln.ac.uk
  - wesley@snapplify.com
abstract: ""
version: 0.4
created: 2025-11-08
tags:
  - artificial-intelligence
  - context-engineering
  - context-sovereignty
  - educational-technology
  - human-AI-collaboration
doi:
  live: ""
  preprint: ""
  journal: ""
---
# Beyond document management: Graph infrastructure for professional education curricula

::: tip **Metadata**
- **Authors**: Michael Rowe 1 ([ORCID](https://orcid.org/my-orcid?orcid=0000-0002-1538-6052); mrowe@lincoln.ac.uk) and Wesley Lynch 2 ([LinkedIn](https://www.linkedin.com/in/wesleylynch/); wesley@snapplify.com)
- **Affiliations**: 1) University of Lincoln; 2) [Snapplify](https://www.snapplify.com)
- **Created**: Nov 08, 2025
- **Version**: 0.4 (last updated: Nov 08, 2025)
- **Modified**: See [Github record](https://github.com/michael-rowe/emergent-scholarship/tree/main/docs/essays)
- **Keywords**: artificial intelligence, context engineering, context sovereignty, educational technology, human-AI collaboration
- **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
- **Preprint DOI**: N/A
- **Peer reviewed**: No
:::

## Abstract

Professional curricula are comprehensively documented but not systematically queryable, creating artificial information scarcity that serves no pedagogical purpose. This creates practical problems for students navigating prerequisite chains, educators identifying curriculum gaps, and institutions demonstrating regulatory compliance. Current approaches—manual document review, VLE keyword search, curriculum mapping spreadsheets, and even purpose-built curriculum management systems—fail to expose curriculum structure in queryable form. We propose an architecture where graph databases become the source of truth for curriculum structure, with vector databases for content retrieval and the Model Context Protocol providing accessible interfaces for stakeholders. This approach makes documented curriculum structure explicitly queryable—prerequisite chains, competency mappings, assessment coverage—while preserving necessary pedagogical mediation in educator-student relationships. The architecture removes technical barriers to interrogating curriculum complexity rather than attempting to eliminate that complexity, supporting educators through better infrastructure while empowering students with structural transparency. We examine implementation pathways, maintenance considerations, and the distinction between structural transparency (which should be accessible) and pedagogical interpretation (which remains educator expertise).

---

## 1. Introduction

### 1.1 Documented but not queryable

Medical curricula are comprehensively documented across hundreds of module specifications, teaching plans, and assessments. Yet when curriculum teams must demonstrate competency coverage for regulatory audits, answer questions about prerequisite chains, or identify gaps in assessment, current systems require manual document review consuming days or weeks. Students needing to understand learning pathways or prerequisite knowledge receive only rudimentary keyword search returning overwhelming, poorly organized results.

**The core issue**: Curricula have explicit structure—hierarchical organization (programmes → modules → sessions → outcomes), prerequisite relationships, competency mappings, comprehensive content documentation. This structure exists in documents and human understanding, but not as interrogatable data. Current systems create artificial information scarcity through technical limitations rather than pedagogical design.

### 1.2 Artificial scarcity versus necessary mediation

Not all information scarcity serves legitimate purposes. **Structural transparency**—access to prerequisite chains, competency mappings, assessment coverage—represents information that should be accessible to all stakeholders. **Pedagogical mediation**—interpreting why structures exist, when rules are flexible, how to navigate complexity—represents expertise that appropriately remains with educators.

Current document-based systems create indiscriminate scarcity, making even basic structural information inaccessible without significant effort. This doesn't protect valuable pedagogical relationships; it simply creates friction through technical inadequacy. Students already pursue minimum viable paths through curricula; they simply do so by reverse-engineering structure from scattered documents rather than seeing explicit relationships. Making structure visible doesn't create optimizing behaviour—it already exists—but it does enable more informed navigation.

### 1.3 Technology supporting educators, empowering students

The proposed architecture aims to support educators through better infrastructure while empowering students with structural access. Educators retain essential interpretive authority—helping students understand why certain pathways exist, when flexibility is appropriate, how to approach complex integration. The technology makes structural data accessible, reducing time spent answering routine navigational questions and enabling focus on genuine pedagogical guidance.

Students gain transparency about the curriculum structure they must navigate, accessing prerequisite information, competency mappings, and assessment coverage directly rather than through institutional gatekeeping. This redistribution of structural knowledge access doesn't eliminate educator roles; it clarifies them, distinguishing between information that should be universally accessible and expertise that requires pedagogical judgment.

---

## 2. Current approaches and their limitations

### 2.1 Purpose-built curriculum management systems

Commercial solutions (WorkTribe, Akari, Courseleaf) or institutional arrangements across SharePoint, VLEs, and databases provide structured storage with defined fields (learning outcomes, assessment methods, credit values), supporting approval workflows and version control.

**Limitations**: Even purpose-built systems focus on documentation workflow rather than queryable relationships. They capture that modules _have_ learning outcomes and _have_ prerequisites without enabling sophisticated traversal queries. Integration across systems remains limited. Structure exists for administrative management but isn't exposed for dynamic interrogation.

### 2.2 Document repositories and VLE search

Most institutions rely on document repositories where curriculum materials exist as PDFs, Word documents, PowerPoint slides, with keyword search, folder-based organization, and manual tagging. VLEs provide full-text search with course structure filters.

**Limitations**: These work for simple content retrieval but fail for structural queries. Finding prerequisite chains requires reading multiple documents and making inferences. Course structure in VLEs is organizational scaffolding (weeks, folders) rather than semantic relationships. VLEs don't encode that Module B requires Module A or that Learning Outcome 1 builds on Learning Outcome 2.

### 2.3 Curriculum mapping spreadsheets

Many institutions maintain detailed Excel spreadsheets mapping curriculum elements to regulatory competencies. These provide structured information but require manual maintenance, exist separately from teaching content, cannot answer natural language questions, and don't support relationship traversal.

**The shared limitation**: Rich structural knowledge about curricula exists in human understanding and informal documentation, not in forms enabling systematic interrogation. Quality assurance staff know relationships between modules, but that knowledge isn't encoded where computational systems can reason over it.

---

## 3. Proposed architecture: Graph as source of truth

### 3.1 Three-layer infrastructure

**Graph database layer**: Stores curriculum structure as typed relationships between entities. Programmes contain modules, modules contain sessions, sessions address learning outcomes, assessments test outcomes, outcomes map to competencies. Each relationship is explicit and typed, enabling precise traversal queries. This becomes the source of truth for curriculum structure where educators work directly.

**Vector database layer**: Stores curriculum content (lecture materials, module specifications, teaching resources) as embeddings enabling semantic search. When students ask "explain the renin-angiotensin system," the vector database retrieves relevant content across multiple modules. This complements rather than replaces graph-based structural queries. Semantic similarity finds content about similar topics; typed relationships enable traversal of curriculum structure. Effective infrastructure requires both, each serving distinct purposes.

**Model Context Protocol layer**: Provides accessible interface enabling natural language queries and stakeholder-specific system prompts. Students receive learning-focused guidance; educators receive curriculum design insights; administrators receive compliance-focused analysis. This layer makes the infrastructure accessible beyond database administrators, crucial for actual stakeholder adoption.

### 3.2 Ontology considerations

Mapping curriculum structure requires an ontology defining entity types and relationship types. The Higher Education Reference Model (HERM) provides a pragmatic starting point, offering standardized vocabulary enabling interoperability across systems and institutions.

**Political and practical considerations**: Any ontology represents epistemological commitments about knowledge categorization. HERM embodies particular assumptions about how curricula should be structured. Institutions adopting this architecture should critically examine whether HERM categories adequately represent their curriculum structure, being prepared to extend or adapt them where necessary.

**What matters**: Internal consistency matters more than which specific ontology is chosen. An institution might use HERM, develop institution-specific ontologies, or adopt programme-specific frameworks. The crucial requirement is that chosen ontology enables consistent relationship encoding within the institution's context, avoiding the current situation where different educators use incompatible naming conventions.

### 4.3 Graph as working system, not shadow representation

Critically, this architecture proposes the graph database as the system where educators work on curriculum structure, not a parallel representation requiring separate maintenance. When educators modify prerequisite relationships, add learning outcomes, or adjust competency mappings, they work directly in graph-native tools. Documents, VLE structures, and external compliance reports are generated from graph data.

This architectural decision addresses maintenance governance concerns. Rather than creating additional maintenance burden, the graph becomes part of normal curriculum development workflow. Changes happen in one place—the graph—with derived artifacts automatically updating.

---

## 4. What this enables

### 5.1 Structural transparency for students

Students can query prerequisite chains directly ("What should I study before cardiology?"), understand competency coverage across their programme, identify assessment patterns, and navigate learning pathways informed by explicit structure. This doesn't eliminate need for educator guidance—interpreting why sequences exist, when flexibility is appropriate, how to approach integration—but it removes artificial barriers to basic structural information.

### 5.2 Curriculum design support for educators

Educators gain comprehensive curriculum visibility, identifying overlaps, gaps, and integration opportunities. They can query "Where else is prescribing taught?" or "What prerequisite knowledge can I assume?" without manual document review. This supports constructive alignment—ensuring learning outcomes, teaching activities, and assessments genuinely cohere—and facilitates collaboration by making implicit connections explicit.

Just-in-time information about prerequisite knowledge helps educators pitch teaching appropriately. Understanding what students have encountered previously (and what assessments they've completed) enables more effective session design.

### 5.3 Compliance and quality assurance

Institutions can generate regulatory compliance reports in hours rather than weeks. Queries like "Demonstrate that every GMC competency has adequate assessment coverage" become straightforward graph traversals with results including audit trails showing exactly which modules, sessions, and assessments address each competency.

Quality assurance processes benefit from systematic gap identification. Missing prerequisite chains, learning outcomes lacking assessments, competencies with insufficient coverage—all become visible through structural queries rather than requiring exhaustive manual review.

### 5.4 Distinguishing curriculum as designed from curriculum as enacted

The graph captures documented curriculum structure—official prerequisites, competency mappings, learning outcomes. This represents the curriculum as designed. It doesn't capture the curriculum as enacted—informal connections emerging through teaching, real-time adjustments based on cohort needs, interdisciplinary insights arising through dialogue.

This distinction clarifies what the infrastructure can and cannot do. The graph makes documented structure queryable, valuable for navigating official requirements and demonstrating compliance. The lived pedagogical experience remains in educator-student relationships, including tacit knowledge about when documented rules are flexible, how seemingly separate topics connect in practice, and why particular sequences support learning even when alternatives seem technically viable.

---

## 5. Implementation considerations

### 6.1 Technical feasibility

The proposed architecture uses mature technologies. Graph databases (Neo4j, RDF triple stores) are proven for relationship-intensive data. Vector databases have multiple robust implementations. MCP provides standardized tool interfaces. The technical components exist; implementation challenges are organizational rather than technological.

### 6.2 Transition pathway

Institutions don't start from nothing. They have existing curriculum management systems, documents, and VLE structures. The transition involves extracting structured data from current systems, transforming it to graph-compatible format, validating extracted relationships with faculty, and gradually shifting workflows to graph-native tools. This requires phased implementation over 18-24 months with parallel operation while faculty adapt to new workflows.

### 6.3 Change management realities

The most significant implementation challenges are human rather than technical. Faculty must see clear efficiency gains justifying workflow changes. Students require intuitive interfaces and guidance on effective use. Administrators need demonstrated return on investment. Success requires strong executive sponsorship, faculty involvement from the beginning, realistic timeline expectations, and clear communication about benefits at each phase.

### 6.4 Maintenance and governance

As the graph becomes the working system, maintenance integrates into normal curriculum development. Clear policies define who can modify curriculum structure, approval workflows govern significant changes, audit logging tracks modifications, and regular validation checks ensure data quality. Rather than creating parallel governance structures, this approach makes existing governance processes explicit and enforceable through the technical infrastructure.

---

## 6. Conclusion

This proposal argues for removing technical barriers to interrogating curriculum complexity, not for eliminating that complexity through technology. Current document-based systems create artificial information scarcity serving no pedagogical purpose. Making curriculum structure queryable enables more effective navigation by students, more informed curriculum design by educators, and more efficient compliance by institutions.

The architecture supports educators rather than replacing them. Structural transparency—prerequisite chains, competency mappings, assessment coverage—should be accessible. Pedagogical interpretation—understanding why structures exist, when flexibility is appropriate, how to navigate complexity—remains educator expertise. The technology distinguishes between these, providing infrastructure for structural queries while preserving space for pedagogical judgment.

Implementation challenges are substantial but not insurmountable. The technical components exist; success depends on organizational commitment, realistic timelines, and clear demonstration of value to all stakeholder groups. Institutions adopting this approach should view it as infrastructure investment enabling multiple concurrent uses rather than as solving particular problems through technical means.
