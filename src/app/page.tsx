"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState, type TouchEvent } from "react";
import styles from "./page.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
];

const governingCouncil = [
  {
    name: "Prof. Amaresh Chakrabarti",
    role: "Indian Institute of Science Bengaluru, Founding President",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. Amaresh Chakrabarti, Senior Professor & Chair, Dept of Design & Manufacturing, IISc, Bengaluru, has BE (Topper, Mech Engg, IIEST Shibpur), ME (Topper, Mech Design, IISc), PhD (Engg Design, U of Cambridge UK). For 10 years, he led Design Synthesis at EPSRC CoE Engg Design Centre (EDC), U of Cambridge. His interests: synthesis, creativity, sustainability, informatics, Industry X.0, research methodology. He published 36 books, 370+ peer reviewed articles, 13 patents, and co-authored DRM, used widely as a framework for design research.",
  },
  {
    name: "Prof. PV Madhusudhan Rao",
    role: "Indian Institute of Technology Delhi, Vice President",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. P. V. M. Rao, Professor, Depts of Design & Mech Engg, IIT Delhi, has Bachelors (Mech Engg, College of Engg, Osmania Univ), Masters (IIT BHU), PhD (IIT Kanpur). He was Guest Researcher, National Institute of Standards & Technology (NIST), USA (five times, 1996–2007); Visiting Scientist, MIT; Visiting Faculty, Stanford Univ. He served as Head, Dept of Design (2017–2022) and Dean, Alumni Relations (2022–2024).",
  },
  {
    name: "Prof. Sougata Karmakar",
    role: "Indian Institute of Technology Guwahati, Secretary",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. Sougata Karmakar, Professor, Dept of Design, IIT Guwahati, has PhD (Virtual Ergonomics using Digital Human Modelling), PG Diploma in Mgmt (HRM, Pondicherry Univ). He gained research expertise in ergonomics at DIPAS, DRDO, Delhi (2004–2009). His interests: physical ergonomics (product & workstation design), cognitive ergonomics (information processing), design & work environment, occupational health, virtual simulation (CAD, digital human modelling).",
  },
  {
    name: "Prof. Vishal Singh",
    role: "Indian Institute of Science Bengaluru, Treasurer",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. Vishal Singh is an Associate Professor at the Department of Design and Manufacturing at IISc Bangalore. At IISc, Vishal leads the IMPACT4IMPACT Lab, which focuses on innovation and management of property, architectural and construction technologies for impact. He teaches course on Elements and Principles of Design, Product Design, Basics of Computing and AI for Design and Manufacturing, and New Product Development.",
  },
];

const taskForceMembers = [
  {
    name: "Prof. Srinivasan Venkataraman",
    role: "Department of Design (DoD), IIT Delhi",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. Srinivasan Venkataraman is an Associate Professor in the Department of Design at IIT Delhi, with academic interests in design creativity and innovation, design theory and methodology, prototyping, AI in design, virtual reality, and assistive technologies.",
  },
  {
    name: "Dr. Shakuntala Acharya",
    role: "Department of Design IIT Guwahati",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "A designer at heart and a researcher by spirit, Dr. Shakuntala Acharya is an Assistant Professor in the Department of Design at IIT Guwahati. With a background in Architecture and a PhD from the Department of Design and Manufacturing at IISc Bengaluru, her work spans design creativity and sustainability.",
  },
  {
    name: "Prof. Prasad Onkar",
    role: "Department of Design, IIT Hyderabad",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio: "Prof. Prasad Onkar is an Associate Professor and former Head of the Department of the Department of Design at IIT Hyderabad, with research interests in design computing, sketch-based conceptual design, virtual reality, and human–computer interaction in design environments.",
  },
];

const heroSlides = [
  {
    image: "/slides/hero-slide-1.png",
    alt: "DeScIn hero intro",
    imageClassName: "slideImageKnowMore",
    ctaLabel: "Know more",
    ctaHref: "#about",
    ctaClassName: "slideCtaKnowMore",
  },
  {
    image: "/slides/hero-slide-2.png",
    alt: "Indian Winter School on Design Research",
    imageClassName: "slideImageRegister",
    ctaLabel: "Register Here",
    ctaHref: "#events",
    ctaClassName: "slideCtaRegister",
  },
];

const principlesList = [
  {
    marker: "Q",
    title: "Quality",
    shortCopy: "Highest quality in design research",
    fullContent: "P1: Principle of Quality: The academy will strive to behold the best possible academic quality in design research.",
  },
  {
    marker: "I",
    title: "Inclusivity",
    shortCopy: "Widest representation of design research",
    fullContent: "P2: Principle of Inclusivity: As long as academic quality is not compromised, the academy will strive to represent design in its widest possible areas of manifestation.",
  },
  {
    marker: "R",
    title: "Responsibility",
    shortCopy: "Commitment to vision and mission",
    fullContent: "P3: Principle of Responsibility: The clauses of dissolution of the Academy cannot be altered.",
  },
  {
    marker: "O",
    title: "Ownership",
    shortCopy: "Leadership and onus retained",
    fullContent: "P4: Principle of Ownership: The leadership of the pre-existing events and positions that are acquired by the Academy from time to time will be held by the original owners of these events and positions, who will continue to operate independently in decision-making regarding the respective events and positions as long as their academic quality is maintained.",
  },
];

const membershipTypes = [
  {
    title: "Student Member",
    description: "Full-time student; early career in design research",
    details: "PhD students in design research who have completed their coursework and are about to begin focused research in the second or third year.",
    fees: "UG: INR 1000 | PG: INR 1500 | PhD: INR 2000 (+ 18% GST for 2Y)",
    benefits: ["Discount on events (10%)", "Access to workshops and training", "Student chapter engagement"],
    canVote: false,
  },
  {
    title: "Associate Member",
    description: "Emerging researchers and professionals without PhD",
    details: "Emerging researchers and professionals building solid foundations in design research methodology and project framing.",
    fees: "INR 3000 + 18% GST (2Y)",
    benefits: ["Discount on events (10%)", "Engagement in activities", "Networking opportunities"],
    canVote: false,
  },
  {
    title: "Full Member",
    description: "Researchers and practitioners with PhD",
    details: "Researchers and practitioners with active contributions to design science, publications, and mentoring activity.",
    fees: "INR 4000 + 18% GST (2Y)",
    benefits: ["Discount on events (10%)", "Contribution to democratic processes", "Full networking access", "Professional recognition"],
    canVote: true,
  },
  {
    title: "Fellow",
    description: "Senior leaders with long-term impact",
    details: "Senior design science leaders recognized for long-term impact through research, guidance, and institution building.",
    fees: "INR 4000 + 18% GST (2Y)",
    benefits: ["Premium benefits", "Leadership opportunities", "Special recognition", "Institutional visibility"],
    canVote: true,
  },
];

// benefits list intentionally removed (benefits shown per-membership in modals)

const eventsList = [
  {
    title: "ICoRD",
    subtitle: "International Conference on Research into Design",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "ICoRD is a series of conferences held every two years in India to bring together the international community from diverse areas of design practice, education and research. The conference delves into the multifaceted nature of design, showcasing original research and fostering collaboration. Owned by DeScIn from 2027.",
    fullDescription: "Design is ubiquitous. All artefacts—physical objects, services, digital interfaces, and socio-technical systems—are outcomes of design. Across the globe, several countries with strong engineering and scientific bases are increasingly recognizing design research as an important domain for academic inquiry and investment. India, with its rich and diverse design heritage and a growing scientific base, has the potential to become a leader in design research. ICoRD is a unique platform for bringing together researchers from around the globe in India to deliberate on the multifaceted nature of design, showcase original research, nurture collaborations, and disseminate findings. ICoRD is organized every two years with support from various institutions. From 2027, ICoRD will be owned and organized by DeScIn, and IISc is one of India's leading research institutions contributing to this endeavor.",
  },
  {
    title: "I-4AM",
    subtitle: "International Conference on Industry 4.0 and Advanced Manufacturing",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "A biennial conference series providing a platform for all stakeholders in manufacturing and Industry 4.0 to deliberate on nature, needs, challenges, and opportunities. Focus on sustainable, affordable, and human-centric Industry 4.0. Owned by DeScIn since 2026.",
    fullDescription: "Industry 4.0 is about the transformation of manufacturing and production processes through digital technologies, data analytics, artificial intelligence, and automation. However, manufacturing also faces the challenge of balancing technological advancement with sustainability, affordability, and human-centric approaches. I-4AM provides a platform for researchers, practitioners, policymakers, and industry leaders to deliberate on the nature of Industry 4.0, discuss challenges and opportunities, and explore solutions that are inclusive and impactful. The conference has been owned by DeScIn since 2026 and supported by the Ministry of Heavy Industries, Government of India.",
  },
  {
    title: "DRM Gurukooll",
    subtitle: "Design Research Methodology Workshop",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "An annual event hosted at a different institution each year with objectives of exposing designers and early career researchers to the current understanding of design and design research, and supporting them to adopt systematic research methodology. Owned by DeScIn since 2025.",
    fullDescription: "Design is an interdisciplinary field that integrates knowledge from science, engineering, arts, and humanities. Design research is the systematic investigation of design processes, products, and systems with the goal of advancing knowledge and improving practice. DRM Gurukooll is an annual workshop that provides a platform for engaging designers and early career researchers with current understanding of design and design research, and supporting them to adopt systematic research methodology in their work. Held at different institutions each year since its inception, DRM Gurukooll has been owned by DeScIn since 2025 and has been used globally for the last 3 decades as a framework for advancing design research methodology.",
  },
];

const specialInterestGroups = [
  {
    title: "Design Education",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "Design Research Quality",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "Design Research Methodology",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
];

const studentChapters = [
  {
    name: "IIT Guwahati",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/48cf9a3ba77762c599d85f2401f4a6656f1c6e10?width=120",
  },
  {
    name: "IISc Bengaluru",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/a5bdcf5c23169b79d9455994d2119a099d16bd11?width=120",
  },
  {
    name: "IIT Hyderabad",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3f26a66d34e3ec450ff86a5d2eb991c5c41e201e?width=120",
  },
];

const resourceArticles = [
  {
    title: "Design Education",
    copy: "Lorem ipsum dolor sit amet consectetur. Tellus nunc nunc morbi viverra. Diam donec eu gravida non facilisis nulla ut feugiat.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
  },
  {
    title: "Prototyping Techniques",
    copy: "Rapid prototyping allows designers to test ideas quickly and gather feedback. This iterative process is essential for refining concepts before full-scale development.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
  },
  {
    title: "User-Centered Design",
    copy: "Understanding user needs through interviews and observations is crucial for effective design. Applying empathy helps create more meaningful and usable products.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
  },
];

const topics = [
  "Agile",
  "Artificial Intelligence",
  "Design Process",
  "ECommerce",
  "Intranet",
  "Navigation",
  "Psychology of UX",
  "User Testing",
];

const popularArticles = [
  "10 Usability Heuristics for User Interface Design",
  "Empathy Mapping: The First Step in Design Thinking",
  "Journey Mapping 101",
  "How to Conduct a Heuristic Evaluation",
];

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className={styles.sectionTitle}>
      <span>{title}</span>
      <span className={styles.sectionDot}>.</span>
    </h2>
  );
}

function ResourceSection({ title, dark }: { title: string; dark?: boolean }) {
  return (
    <section className={`${styles.band} ${dark ? styles.blackBand : styles.lightBand} ${dark ? styles.gridDark : styles.gridLight}`}>
      <div className={styles.container}>
        <SectionTitle title={title} />
        <div className={`${styles.resourceLayout} ${dark ? styles.resourceLayoutDark : ""}`}>
          <aside className={styles.resourceSidebar}>
            <div className={styles.sidebarGroup}>
              <h4>Topics</h4>
              <div className={styles.sidebarList}>
                {topics.map((topic) => (
                  <a href="#" key={topic}>
                    {topic}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.sidebarGroup}>
              <h4>Popular Articles</h4>
              <div className={styles.sidebarList}>
                {popularArticles.map((article) => (
                  <a href="#" key={article}>
                    {article}
                  </a>
                ))}
              </div>
            </div>
          </aside>
          <div className={styles.resourceContent}>
            <div className={styles.resourceTabs}>
              <button className={`${styles.tab} ${styles.tabActive}`}>Most Recent</button>
              <button className={styles.tab}>Most Popular</button>
              <button className={styles.tab}>Videos Only</button>
              <button className={styles.tab}>Articles Only</button>
            </div>
            <div className={styles.resourceDivider} />
            <div className={styles.articleList}>
              {resourceArticles.map((article) => (
                <article className={styles.articleCard} key={`${title}-${article.title}`}>
                  <img src={article.image} alt={article.title} className={styles.articleImage} />
                  <div className={styles.articleInfo}>
                    <h4 className={styles.articleTitle}>{article.title}</h4>
                    <p className={styles.articleCopy}>{article.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isGoverningOpen, setIsGoverningOpen] = useState(true);
  const [isAdvisoryOpen, setIsAdvisoryOpen] = useState(false);
  const [isTaskForceOpen, setIsTaskForceOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<(typeof governingCouncil)[number] | null>(null);
  const [expandedPrinciples, setExpandedPrinciples] = useState<string[]>([]);
  const [selectedMembership, setSelectedMembership] = useState<(typeof membershipTypes)[number] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<(typeof eventsList)[number] | null>(null);
  const governingSliderRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = endX - touchStartX;
    if (delta <= -50) {
      nextSlide();
    } else if (delta >= 50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const slideGoverningCouncil = (direction: "left" | "right") => {
    const slider = governingSliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector<HTMLElement>(`.${styles.memberCard}`);
    const gap = 16;
    const step = (firstCard?.offsetWidth ?? 0) + gap;
    const delta = direction === "right" ? step : -step;
    slider.scrollBy({ left: delta, behavior: "smooth" });
  };

  const togglePrincipleExpanded = (title: string) => {
    setExpandedPrinciples((prev) =>
      prev.includes(title) ? prev.filter((p) => p !== title) : [...prev, title]
    );
  };

  return (
    <div className={styles.page}>
      <header className={styles.siteHeader}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ec3db5819aa6d2f09c6b92fbd6c528b02034f34f?width=92" alt="DeScIn logo" />
            <span>DeScIn</span>
          </a>
          <nav className={styles.siteNav}>
            {navItems.map((item) => (
              <a href={item.href} key={item.label} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <button type="button" className={styles.loginButton}>Log in</button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection} id="hero">
          <div className={styles.container}>
            <div className={styles.heroCard} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div className={styles.heroSlidesTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {heroSlides.map((slide) => (
                  <div className={styles.heroSlide} key={slide.image}>
                    <img src={slide.image} alt={slide.alt} className={`${styles.heroSlideImage} ${styles[slide.imageClassName as keyof typeof styles]}`} />
                    <a href={slide.ctaHref} className={`${styles.slideCta} ${styles[slide.ctaClassName as keyof typeof styles]}`}>
                      {slide.ctaLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className={styles.heroControlsOverlay}>
                <button type="button" className={styles.slideArrowLeft} aria-label="Previous slide" onClick={prevSlide}>
                  &lt;
                </button>
                <div className={styles.heroDots}>
                  {heroSlides.map((slide, index) => (
                    <button type="button"
                      key={slide.image}
                      className={`${styles.heroDot} ${activeSlide === index ? styles.heroDotActive : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
                <button type="button" className={styles.slideArrowRight} aria-label="Next slide" onClick={nextSlide}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="about">
          <div className={`${styles.container} ${styles.splitIntro}`}>
            <SectionTitle title="About" />
            <p className={styles.leadText}>
              All major areas of research in India have their own peer academic bodies, e.g. National Academy of Sciences, National Academy of Engineering, etc. However, &apos;research into design&apos;, also called &apos;design sciences&apos;, hitherto did not have any such entity. DeScIn - Academy of Design Science Foundation, India, is India&apos;s first peer academy in this area.
            </p>
            <div className={styles.aboutExtended}>
              <h4>Objectives</h4>
              <p className={styles.objectiveText}>
                O1. To support development and nurture of a diverse and vibrant academic community in India of the highest international quality in all areas of research into design.
              </p>
              <p className={styles.objectiveText}>
                O2. To support production and publication of outputs from India of the highest international quality in all areas of research into design.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="principles">
          <div className={styles.container}>
            <SectionTitle title="Principles" />
            <div className={styles.principleGrid}>
              {principlesList.map((principle) => (
                <article
                  className={`${styles.principleCard} ${expandedPrinciples.includes(principle.title) ? styles.principleCardExpanded : ""}`}
                  key={principle.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => togglePrincipleExpanded(principle.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") togglePrincipleExpanded(principle.title);
                  }}
                >
                  <div className={styles.principleIcon}>{principle.marker}</div>
                  <h4>{principle.title}</h4>
                  <p>{principle.shortCopy}</p>
                  {expandedPrinciples.includes(principle.title) && (
                    <div className={styles.principleExpandedContent}>
                      <p>{principle.fullContent}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`} id="organisation">
          <div className={styles.container}>
            <SectionTitle title="Organisation" />
            <p className={styles.organisationDescription}>
              DeScIn is steered by a governing council that shapes its vision, direction, and long-term growth. Comprising world-renowned leaders in design sciences, the council brings together academic excellence, institutional experience, and a shared commitment to advancing design as a rigorous and impactful discipline.
            </p>

            <div className={styles.orgWrap}>
              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Governing Council</h3>
                  </div>
                  <button
                    className={styles.rowAction}
                    aria-label={`${isGoverningOpen ? "Collapse" : "Expand"} governing council`}
                    onClick={() => setIsGoverningOpen((value) => !value)}
                  >
                    {isGoverningOpen ? "-" : "+"}
                  </button>
                </div>

                {isGoverningOpen && (
                  <div className={styles.councilSliderWrap}>
                    <button
                      className={styles.sliderArrow}
                      aria-label="Show previous governing council members"
                      onClick={() => slideGoverningCouncil("left")}
                    >
                      &lt;
                    </button>

                    <div className={styles.memberStrip} ref={governingSliderRef}>
                      {governingCouncil.map((member, index) => (
                        <button
                          type="button"
                          className={styles.memberCard}
                          key={`${member.name}-${index}`}
                          onClick={() => setSelectedMember(member)}
                        >
                          <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
                          <div className={styles.memberInfo}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberRole}>{member.role}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      className={styles.sliderArrow}
                      aria-label="Show next governing council members"
                      onClick={() => slideGoverningCouncil("right")}
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Task Force</h3>
                  </div>
                  <button
                    className={styles.rowAction}
                    aria-label={`${isTaskForceOpen ? "Collapse" : "Expand"} task force`}
                    onClick={() => setIsTaskForceOpen((value) => !value)}
                  >
                    {isTaskForceOpen ? "-" : "+"}
                  </button>
                </div>

                {isTaskForceOpen && (
                  <div className={styles.taskForceGrid}>
                    {taskForceMembers.map((member) => (
                      <article className={styles.taskForceCard} key={member.name}>
                        <img src={member.photo} alt={member.name} className={styles.taskForcePhoto} />
                        <div className={styles.taskForceInfo}>
                          <h5 className={styles.taskForceName}>{member.name}</h5>
                          <p className={styles.taskForceRole}>{member.role}</p>
                          <p className={styles.taskForceBio}>{member.bio}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Advisory Board</h3>
                    <span className={styles.comingSoonPill}>Coming soon</span>
                  </div>
                  <button
                    className={styles.rowAction}
                    aria-label={`${isAdvisoryOpen ? "Collapse" : "Expand"} advisory board`}
                    onClick={() => setIsAdvisoryOpen((value) => !value)}
                  >
                    {isAdvisoryOpen ? "-" : "+"}
                  </button>
                </div>

                {isAdvisoryOpen && (
                  <div className={styles.orgCollapsedPanel}>
                    <p>Advisory Board details will be added here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="membership">
          <div className={styles.container}>
            <SectionTitle title="Membership" />
            <p className={styles.leadText} style={{ marginBottom: "2rem" }}>
              There are four types of membership in DeScIn Academy. Click on a membership type to see the benefits and details.
            </p>

            <div className={styles.membershipGrid}>
              {membershipTypes.map((type) => (
                  <button type="button"
                  key={type.title}
                  className={styles.membershipCardButton}
                  onClick={() => setSelectedMembership(type)}
                >
                  <div className={styles.membershipCardContent}>
                    <h4>{type.title}</h4>
                    <p>{type.description}</p>
                    <div className={styles.membershipCardFees}>{type.fees}</div>
                  </div>
                  <span className={styles.membershipArrow}>→</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="events">
          <div className={styles.container}>
            <SectionTitle title="Events" />
            <div className={styles.eventDetailGrid}>
              {eventsList.map((event) => (
                <button type="button"
                  key={event.title}
                  className={styles.eventCardButton}
                  onClick={() => setSelectedEvent(event)}
                >
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                  <div className={styles.eventDetailBody}>
                    <h4>{event.title}</h4>
                    <p className={styles.eventSubtitle}>{event.subtitle}</p>
                    <p className={styles.eventDescription}>{event.description}</p>
                    <span className={styles.eventArrow}>Learn more →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <SectionTitle title="Student Chapters" />
              <p className={styles.leadText}>
                A Student Chapter of DeScIn Academy is an organisational entity that provides a platform for student-level activities at a university aimed at encouraging design research. Currently there are 3 Student Chapters of DeScIn.
              </p>
            </div>

            <div className={styles.chapterGrid}>
              {studentChapters.map((chapter, index) => (
                <article className={styles.chapterCard} key={`${chapter.name}-${index}`}>
                  <div className={styles.chapterLogoWrap}>
                    <img src={chapter.logo} alt={chapter.name} />
                  </div>
                  <h3 className={styles.chapterName}>{chapter.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <SectionTitle title="Special Interest Groups" />
            <div className={styles.eventGrid}>
              {specialInterestGroups.map((group) => (
                <article key={group.title} className={styles.eventGridCard}>
                  <img src={group.image} alt={group.title} />
                  <h4>{group.title}</h4>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <SectionTitle title="Awards & Fellowship" />
            <div className={styles.dividedContent}>
              <p>
                DeScIn Academy recognizes and honors outstanding contributions to design sciences. Our awards and fellowship programs celebrate researchers and practitioners whose work has advanced the field and inspired others.
              </p>
              <p>
                Through these distinctions, we acknowledge excellence, foster collaboration, and encourage the next generation of design scientists to push boundaries and create meaningful impact.
              </p>
            </div>
          </div>
        </section>

        <ResourceSection title="Resources" dark={false} />
      </main>

      {/* Modals */}

      {selectedMember && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button type="button" className={styles.modalClose} onClick={() => setSelectedMember(null)}>
              ×
            </button>
            <div className={styles.memberModalLayout}>
              <div className={styles.memberModalSticky}>
                <img src={selectedMember.photo} alt={selectedMember.name} />
                <h3>{selectedMember.name}</h3>
                <p>{selectedMember.role}</p>
              </div>
              <div className={styles.memberModalScrollable}>
                <p>{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedMembership && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMembership(null)}>
          <div className={styles.membershipModal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setSelectedMembership(null)}>
              ×
            </button>
            <div className={styles.membershipModalContent}>
              <h3>{selectedMembership.title}</h3>
              <p className={styles.membershipDescription}>{selectedMembership.description}</p>
              <p className={styles.membershipDetails}>{selectedMembership.details}</p>

              <div className={styles.membershipModalSection}>
                <h4>Fees</h4>
                <p>{selectedMembership.fees}</p>
              </div>

              <div className={styles.membershipModalSection}>
                <h4>Benefits</h4>
                <ul className={styles.benefitsList}>
                  {selectedMembership.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {selectedMembership.canVote && (
                <div className={styles.membershipVotingIndicator}>
                  <span className={styles.votingBadge}>✓ Voting Rights</span>
                </div>
              )}

              <button type="button" className={styles.registerButton}>Register Now</button>
            </div>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div className={styles.eventModal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setSelectedEvent(null)}>
              ×
            </button>
            <div className={styles.eventModalContent}>
              <img src={selectedEvent.image} alt={selectedEvent.title} className={styles.eventModalImage} />
              <div className={styles.eventModalInfo}>
                <h3>{selectedEvent.title}</h3>
                <p className={styles.eventModalSubtitle}>{selectedEvent.subtitle}</p>
                <div className={styles.eventModalDescription}>
                  <p>{selectedEvent.fullDescription}</p>
                </div>
                <button type="button" className={styles.registerButton}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
