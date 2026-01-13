# Product Requirements Document (PRD)
## Afreen's Portfolio Website

---

## 1. Executive Summary

This PRD outlines the requirements for Afreen Aurshi's personal portfolio website, designed to showcase her work as a graphic designer and engineering student. The website serves as a digital presence to attract freelance clients, showcase creative work, and demonstrate technical and design capabilities.

---

## 2. Product Overview

**Product Name:** Afreen Aurshi Portfolio Website

**Target Audience:**
- Potential freelance clients seeking graphic design services
- Recruiters and hiring managers
- Academic peers and professors
- Creative community members

**Primary Goals:**
- Showcase design portfolio and creative work
- Communicate skills and service offerings
- Facilitate client/recruiter contact
- Establish professional brand identity

---

## 3. User Personas

**Persona 1: Potential Freelance Client**
- Needs: Quick understanding of services offered, portfolio examples, easy contact method
- Pain Points: Uncertainty about designer capabilities, unclear pricing/process
- Goals: Find a designer for their project quickly

**Persona 2: Recruiter/Hiring Manager**
- Needs: Overview of skills, technical stack, portfolio samples, contact information
- Pain Points: Limited time to review portfolios
- Goals: Assess candidate fit efficiently

**Persona 3: Creative Community Member**
- Needs: Inspiration, connection with fellow designers
- Goals: Discover new work, potential collaboration

---

## 4. Functional Requirements

### 4.1 Navigation & Information Architecture

**FR-1: Global Navigation**
- Must include links to: Home, About Me, Projects, Freelancing, Contact Me
- Navigation must be sticky/fixed on scroll
- Must be responsive on all device sizes
- Logo/name should link back to home

**FR-2: Page Sections**
The website must contain the following sections in order:
1. Hero Section
2. About Me
3. Skills & Tech Stack
4. Portfolio/Canva Work Showcase
5. Services ("What I Do")
6. Call-to-Action
7. Footer with Social Links

### 4.2 Hero Section

**FR-3: Hero Content**
- Display name: "Afreen"
- Primary headline: "Graphic Designer"
- Subheadline: "THIS IS MY FIRST PORTFOLIO WEBSITE"
- Include character illustration/photo
- Include decorative elements (flowers, icons)

**FR-4: Introduction Copy**
- Brief bio highlighting:
  - Engineering student background
  - Creative and tech blend
  - Passion for building digital experiences
  - Project range (animations to websites)

### 4.3 About Me Section

**FR-5: Personal Introduction**
- Full name and university affiliation
- Academic background (engineering student at Lucknow University)
- Design philosophy and approach
- Passion statement about creative tools and automation
- Technical interests (Python, Tkinter, Halo Infinite)
- Personal touch (love for cats)

### 4.4 Skills & Tech Stack Section

**FR-6: Skills Display**
Must display the following skills as pill-shaped tags:
- Graphic Design
- Figma
- Canva
- Web Development
- SEO/UX
- Mac Numerix
- Wire framing
- UI/UX
- MongoDB
- Presentation
- Communication

**FR-7: Visual Treatment**
- Skills presented as rounded pill badges
- Dark background for contrast
- Clear, readable typography

### 4.5 Portfolio Showcase

**FR-8: Canva Work Carousel**
- Display text: "Hey there! Check out my Canva work by clicking through each carousel."
- Note: "For the best experience, view it on desktop in full preview - for humor, don't judge it on mobile ><"
- Must display at least 5 portfolio pieces:
  1. "PLANT" - Nature green drink design
  2. Nike shoe advertisement (pink theme)
  3. "ICED COFFEE" - Vintage coffee poster
  4. "BISSELL BLEND" - Product promotion
  5. Personal branding card with illustration

**FR-9: Portfolio Interaction**
- Each portfolio item must be clickable
- Items should have visual indication of interactivity
- Responsive grid layout (3 items on desktop, fewer on mobile)

### 4.6 Services Section ("What I Do")

**FR-10: Service Categories**

**Design & Visual Creativity:**
- Figma UI Layouts & Visual Designs
- Poster & Flyer Design
- Social Media Graphics
- Brand Identity Essentials
- Product Mockups
- Canva Presentations

**Writing & Digital Content:**
- Content Writing
- SEO-Friendly Blog Posts
- Social Media Captions
- Engaging Creative Writing
- Product/Poster Descriptions

**FR-11: Freelance Links**
- "Graphic Design Gig" button with link
- "SEO Blog Gig" button with link
- Text: "I also work as a Freelancer on Fiverr. Feel free to explore and check out my work, projects, and offerings."

### 4.7 Call-to-Action Section

**FR-12: Contact CTA**
- Headline: "Don't Hesitate to Reach Out!"
- Eye-catching illustration/graphic element
- Must be visually prominent

### 4.8 Footer

**FR-13: Social Links**
Must include icons/links to:
- Email
- LinkedIn
- X (Twitter)
- GitHub
- Additional platform (appears to be Figma or similar)

**FR-14: Footer Information**
- Copyright notice: "© 2025 Afreen Aurshi. All rights reserved."
- "Designed & Developed by Afreen | Figma"
- Footer navigation links: Home, Projects, Freelancing, Contact

---

## 5. Non-Functional Requirements

### 5.1 Performance

**NFR-1: Load Time**
- Initial page load must be under 3 seconds on standard broadband
- Images must be optimized for web
- Lazy loading for below-fold content

**NFR-2: Responsiveness**
- Must be fully responsive across devices:
  - Desktop (1920px+)
  - Laptop (1024px - 1919px)
  - Tablet (768px - 1023px)
  - Mobile (320px - 767px)

### 5.2 Accessibility

**NFR-3: WCAG Compliance**
- Meet WCAG 2.1 Level AA standards
- Proper color contrast ratios
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility

### 5.3 Browser Compatibility

**NFR-4: Supported Browsers**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### 5.4 SEO

**NFR-5: Search Optimization**
- Proper meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Semantic HTML structure
- XML sitemap
- Robots.txt file

---

## 6. Design Requirements

### 6.1 Color Palette

**DR-1: Primary Colors**
- Pink gradient background (#FFB3D9 to darker pink/burgundy)
- Dark brown/black for contrast sections (#2D1B1B or similar)
- White for text and buttons
- Accent colors from portfolio pieces (green, pink, orange, blue)

### 6.2 Typography

**DR-2: Font Hierarchy**
- Clear hierarchy with large headings
- Sans-serif font family for modern feel
- Readable body text (minimum 16px)
- Bold weights for emphasis

### 6.3 Visual Style

**DR-3: Design Language**
- Playful yet professional
- Gradient backgrounds
- Rounded corners on buttons and cards
- Decorative floral/organic elements
- Character illustration integration
- Modern, clean layout with white space

---

## 7. Technical Requirements

### 7.1 Technology Stack

**TR-1: Frontend**
- HTML5
- CSS3 (with animations/transitions)
- JavaScript for interactions
- Responsive framework (Bootstrap/Tailwind or custom)

**TR-2: Hosting & Deployment**
- Static site hosting (Netlify, Vercel, GitHub Pages, or similar)
- Custom domain support
- SSL certificate (HTTPS)

**TR-3: Analytics**
- Google Analytics or similar for traffic tracking
- Event tracking for button clicks and portfolio views

---

## 8. Content Requirements

### 8.1 Copywriting

**CR-1: Tone & Voice**
- Friendly and approachable
- Professional but personable
- Enthusiastic about design and technology
- Authentic and honest

**CR-2: Required Copy Elements**
- Personal bio (About Me)
- Service descriptions
- Portfolio piece descriptions
- Call-to-action text
- Footer disclaimers

### 8.2 Visual Assets

**CR-3: Required Images**
- Professional portrait/character illustration
- Portfolio work samples (minimum 5)
- Decorative elements (flowers, icons)
- Social media icons
- Brand logo/wordmark

---

## 9. User Flows

### 9.1 Primary User Flow: Portfolio Review

1. User lands on homepage
2. Views hero section and reads introduction
3. Scrolls to About Me for more context
4. Reviews Skills & Tech Stack
5. Explores portfolio carousel
6. Reads service offerings
7. Clicks CTA or social link to make contact

### 9.2 Secondary User Flow: Direct Service Inquiry

1. User lands on homepage
2. Quickly scans for services
3. Scrolls to "What I Do" section
4. Clicks Fiverr gig link
5. Proceeds to external platform

---

## 10. Success Metrics

### 10.1 Key Performance Indicators (KPIs)

**M-1: Engagement Metrics**
- Average time on site: Target 2+ minutes
- Bounce rate: Target <50%
- Pages per session: Target 1.5+

**M-2: Conversion Metrics**
- Contact form submissions or social link clicks: Track quantity
- Fiverr gig link clicks: Track CTR
- Portfolio piece views: Track engagement

**M-3: Traffic Metrics**
- Monthly unique visitors
- Traffic sources (direct, search, social, referral)
- Mobile vs desktop traffic ratio

---

## 11. Launch Criteria

### 11.1 Must-Have for Launch (MVP)

- All sections implemented and populated with content
- Responsive design working on all device sizes
- All links functional (social, navigation, external)
- Portfolio pieces displayed correctly
- Contact method working (social links or form)
- Basic SEO implementation
- Cross-browser testing complete
- Performance benchmarks met

### 11.2 Post-Launch Enhancements (Phase 2)

- Blog section for articles
- Advanced animations and micro-interactions
- Project detail pages with case studies
- Testimonials section
- Contact form with backend integration
- Multi-language support
- Dark mode toggle
- Advanced analytics dashboard

---

## 12. Risks & Mitigation

**Risk 1: Portfolio content copyright issues**
- Mitigation: Ensure all displayed work is original or properly licensed

**Risk 2: External link dependencies (Fiverr)**
- Mitigation: Regular link checking, backup contact methods

**Risk 3: Mobile experience quality**
- Mitigation: Mobile-first design approach, extensive mobile testing

**Risk 4: Loading performance with multiple images**
- Mitigation: Image optimization, lazy loading, CDN usage

---

## 13. Timeline & Milestones

**Phase 1: Design & Planning (Week 1-2)**
- Finalize design mockups
- Content gathering and writing
- Technical architecture decisions

**Phase 2: Development (Week 3-5)**
- Frontend development
- Responsive implementation
- Integration of portfolio content

**Phase 3: Testing & Refinement (Week 6)**
- Cross-browser testing
- Mobile testing
- Performance optimization
- Accessibility audit

**Phase 4: Launch (Week 7)**
- Deploy to production
- Submit to search engines
- Announce on social media

---

## 14. Stakeholders & Approval

**Product Owner:** Afreen Aurshi
**Designer:** Afreen Aurshi
**Developer:** Afreen Aurshi (or contracted developer)
**Target Launch Date:** TBD

---

## 15. Appendix

### 15.1 Reference Links
- Fiverr profile (to be linked)
- Social media profiles (LinkedIn, X, GitHub, etc.)
- Design inspiration sources

### 15.2 Competitor Analysis
- Review similar designer portfolios
- Identify unique differentiators
- Note best practices and trends

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Status:** Draft for Review
