"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState, type TouchEvent } from "react";
import styles from "./page.module.css";

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfKMdzKkN7l3G6QbdlpNXsDM67CuiY5HR3zOQbnVIGAV1hNcg/viewform";

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
    photo: "/members/2.png",
    bio: "Prof. P. V. M. Rao, Professor, Depts of Design & Mech Engg, IIT Delhi, has Bachelors (Mech Engg, College of Engg, Osmania Univ), Masters (IIT BHU), PhD (IIT Kanpur). He was Guest Researcher, National Institute of Standards & Technology (NIST), USA (five times, 1996\u20132007); Visiting Scientist, MIT; Visiting Faculty, Stanford Univ. He served as Head, Dept of Design (2017\u20132022) and Dean, Alumni Relations (2022\u20132024).",
  },
  {
    name: "Prof. Sougata Karmakar",
    role: "Indian Institute of Technology Guwahati, Secretary",
    photo: "/members/3.png",
    bio: "Prof. Sougata Karmakar, Professor, Dept of Design, IIT Guwahati, has PhD (Virtual Ergonomics using Digital Human Modelling), PG Diploma in Mgmt (HRM, Pondicherry Univ). He gained research expertise in ergonomics at DIPAS, DRDO, Delhi (2004\u20132009). His interests: physical ergonomics (product & workstation design), cognitive ergonomics (information processing), design & work environment, occupational health, virtual simulation (CAD, digital human modelling).",
  },
  {
    name: "Prof. Vishal Singh",
    role: "Indian Institute of Science Bengaluru, Treasurer",
    photo: "/members/4.png",
    bio: "Prof. Vishal Singh is an Associate Professor at the Department of Design and Manufacturing at IISc Bangalore. At IISc, Vishal leads the IMPACT4IMPACT Lab, which focuses on innovation and management of property, architectural and construction technologies for impact. He teaches course on Elements and Principles of Design, Product Design, Basics of Computing and AI for Design and Manufacturing, and New Product Development.",
  },
];

const taskForceMembers = [
  {
    name: "Prof. Srinivasan Venkataraman",
    role: "Department of Design (DoD), IIT Delhi",
    photo: "/members/selected.png",
    bio: "Prof. Srinivasan Venkataraman is an Associate Professor in the Department of Design at IIT Delhi, with academic interests in design creativity and innovation, design theory and methodology, prototyping, AI in design, virtual reality, and assistive technologies.",
  },
  {
    name: "Dr. Shakuntala Acharya",
    role: "Department of Design IIT Guwahati",
    photo: "/members/Ma'am.png",
    bio: "A designer at heart and a researcher by spirit, Dr. Shakuntala Acharya is an Assistant Professor in the Department of Design at IIT Guwahati. With a background in Architecture and a PhD from the Department of Design and Manufacturing at IISc Bengaluru, her work spans design creativity and sustainability.",
  },
  {
    name: "Prof. Prasad Onkar",
    role: "Department of Design, IIT Hyderabad",
    photo: "/members/selected (1).png",
    bio: "Prof. Prasad Onkar is an Associate Professor and former Head of the Department of the Department of Design at IIT Hyderabad, with research interests in design computing, sketch-based conceptual design, virtual reality, and human\u2013computer interaction in design environments.",
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
    ctaHref: REGISTER_URL,
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
    benefits: ["Discount on events (10%)", "Opportunity to be informed and engage in various activities", "Network with scholars", "Access to resources and exclusive content", "Student chapter engagement"],
  },
  {
    title: "Associate Member",
    description: "Emerging researchers and professionals without PhD",
    details: "Emerging researchers and professionals building solid foundations in design research methodology and project framing.",
    fees: "INR 3000 + 18% GST (2Y)",
    benefits: ["Discount on events (10%)", "Opportunity to be informed and engage in various activities", "Network with scholars", "Access to resources and exclusive content"],
  },
  {
    title: "Full Member",
    description: "Researchers and practitioners with PhD",
    details: "Researchers and practitioners with active contributions to design science, publications, and mentoring activity.",
    fees: "INR 4000 + 18% GST (2Y)",
    benefits: ["Discount on events (10%)", "Opportunity to be informed and engage in various activities", "Opportunity to take part and contribute in the democratic processes within the society (Voting rights)", "Network with scholars", "Access to resources and exclusive content", "Professional recognition"],
  },
  {
    title: "Fellow",
    description: "Senior leaders with long-term impact",
    details: "Senior design science leaders recognized for long-term impact through research, guidance, and institution building.",
    fees: "INR 4000 + 18% GST (2Y)",
    benefits: ["Discount on events (10%)", "Opportunity to be informed and engage in various activities", "Opportunity to take part and contribute in the democratic processes within the society (Voting rights)", "Network with scholars", "Access to resources and exclusive content", "Leadership opportunities", "Special recognition"],
  },
];

const eventsList = [
  {
    title: "ICoRD",
    subtitle: "International Conference on Research into Design - (owned from 2027)",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "ICoRD is a series of conferences intended to be held every two years in India to bring together the international community...",
    link: "https://dm.iisc.ac.in/icord27/",
    paragraphs: [
      "Design is ubiquitous; it pervades all spheres of life and has been around as long as life has taken up the task of purposefully changing the world around it. Research into design and the emergence of a research community in this area has been relatively new. Its development has been influenced by the multiple facets of design (human, artefact, process, organisation, the micro- and macro economy and the ecology by which design is shaped) and the associated diversification of the community depending on the facets of focus or that of their applications. Design is complex, balancing the needs of multiple stakeholders, and requiring a multitude of areas of knowledge to be utilised, and resources spread across space and time.",
      "ICoRD is a series of conferences intended to be held every two years in India to bring together the international community from diverse areas of design practice, education and research. The conference delves into the multifaceted nature of design, showcasing original research and fostering collaboration. It aims to showcase cutting-edge research about design to the stakeholders; aid the ongoing process of developing and extending the collective vision through emerging research challenges and questions; and provide a platform for interaction, collaboration and development of the community for it to take up the challenges to realize the vision.",
      "ICoRD was initiated by DM, IISc, Bengaluru in 2006. Since then, it has since been hosted in 2009, 2011 (both at IISc), 2013 (at IIT Madras), 2015 (IISc), 2017 (IIT Guwahati), 2019 (IISc), 2021 (IIT Bombay, online), 2023 (IISc) and 2025 (IIT Hyderabad). DM has pioneered design research in India."
    ]
  },
  {
    title: "I-4AM",
    subtitle: "International Conference on Industry 4.0 and Advanced Manufacturing - (owned since 2026)",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "Industry 4.0 is about using connected intelligence to usher in greater productivity, quality, flexibility, safety and resource utilisation...",
    link: "https://dm.iisc.ac.in/dm/2025/02/12/i-4am-2026-call-for-abstracts/",
    paragraphs: [
      "Industry 4.0 is about using connected intelligence to usher in greater productivity, quality, flexibility, safety and resource utilisation across manufacturing enterprises, in which advanced manufacturing technologies such as Robotics or Additive Manufacturing play a critical role.",
      "International Conference on Industry 4.0 and Advanced Manufacturing, abbreviated as I-4AM (pronounced i-forum), is a biennial conference series, which intends to provide a platform to bring together all stakeholders in manufacturing and Industry 4.0, in particular those in academia and industry, in both India and abroad for them to deliberate on the nature, needs, challenges, opportunities, problems and solutions in this transformational area of endeavour.",
      "A specific focus of I-4AM is to provide a platform for exploring avenues for creating a vision of, and enablers for sustainable, affordable, and human-centric Industry 4.0, and to showcase cutting edge practice, research and educational innovation in this crucial and rapidly evolving area. The I-4AM series was initiated in 2019 by the Department of Design and Manufacturing, Indian Institute of Science."
    ]
  },
  {
    title: "DRM Gurukooll",
    subtitle: "Design Research Methodology Workshop - (owned since 2025)",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
    description: "\u201CDesign is an interdisciplinary discipline\u201D with many facets: people, product, process, tools, economy and ecology...",
    link: "/drm",
    paragraphs: [
      "\u201CDesign is an interdisciplinary discipline\u201D with many facets: people, product, process, tools, economy and ecology, that interact in the ways designing and their outcomes are produced. While designing involves research of market and users, breakthrough design innovations are often result of focussed research into the phenomena and practice of design.",
      "DRM Gurukooll is an annual event hosted, under the auspices of DeScIn \u2013 Academy of Design Science Foundation India, at a different institution each year, with the objectives of exposing designers and early (career) design researchers to the current understanding of design and design research, and supporting them to adopt a systematic research methodology.",
      "Curated especially for early career researchers, this programme offers guided mentorship from leading design researchers. It focuses on building a systematic approach to design research, grounded in the DRM methodology, that has been used globally for the last 3 decades."
    ]
  },
];

const awardsData = [
  {
    title: "ICONN Awards",
    content: "Starting from 2015, ICoRD, the first (since 2006) and currently the largest international conference series in India in this area, has introduced two biennial ICONNN awards in design research and education, where the acronym ICONNN (pronounced as the word \u2018icon\u2019) stands for: ICoRD Outstanding Contribution to desigN scieNce and educatioN. The awards are open to individuals from any country and are conferred at each ICoRD to two individuals who have made outstanding contributions to the advancement of research and/or education in design.",
    awardees: [
      "2015: John Gero, George Mason University, USA",
      "2015: Sudhakar Nadkarni, Welinkar Institute of Management, India",
      "2017: Cees de Bont of Hong Kong Polytechnic University, Hong Kong",
      "2017: Amit Ray, Shiv Nadar University, India",
      "2019: Imre Horvath, Delft University of Technology, The Netherlands",
      "2019: TS Mruthyunjaya, Indian Institute of Science, India",
      "2023: Farrokh Mistree, University of Oklahoma, USA",
      "2023: Uday Athavankar, Indian Institute of Bombay, India",
      "2025: Peter Childs, Imperial College London, UK",
      "2025: B Gurumoorthy, Indian Institute of Science, India",
    ],
  },
  {
    title: "ICoRD Distinguished Paper Awards",
    content: "Since 2006, the top few percentages of papers in an ICoRD conference accepted with the highest ratings from the reviewers are conferred with \u2018Distinguished Paper\u201D awards and are conferred a \u2018Certificate of Merit\u2019.",
    awardees: [],
  },
  {
    title: "I4AM Distinguished Paper Awards",
    content: "Since 2019, the top few percentages of papers in an I4AM conference accepted with the highest ratings from the reviewers are conferred with \u2018Distinguished Paper\u201D awards and are conferred a \u2018Certificate of Merit\u2019.",
    awardees: [],
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

const showArticlesResourcesBackup = false;

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className={styles.sectionTitle}>
      <span>{title}</span>
      <span className={styles.sectionDot} aria-hidden="true" />
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
                  <a href="#" key={topic}>{topic}</a>
                ))}
              </div>
            </div>
            <div className={styles.sidebarGroup}>
              <h4>Popular Articles</h4>
              <div className={styles.sidebarList}>
                {popularArticles.map((article) => (
                  <a href="#" key={article}>{article}</a>
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
  const [selectedMember, setSelectedMember] = useState<{name: string; role: string; bio: string; photo?: string} | null>(null);
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>(null);
  const [selectedMembership, setSelectedMembership] = useState<(typeof membershipTypes)[number] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<(typeof eventsList)[number] | null>(null);
  const [selectedAward, setSelectedAward] = useState<(typeof awardsData)[number] | null>(null);
  const governingSliderRef = useRef<HTMLDivElement | null>(null);
  const taskForceSliderRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => setActiveSlide((c) => (c + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((c) => (c === 0 ? heroSlides.length - 1 : c - 1));

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = endX - touchStartX;
    if (delta <= -50) nextSlide();
    else if (delta >= 50) prevSlide();
    setTouchStartX(null);
  };

  const slideGoverningCouncil = (direction: "left" | "right") => {
    const slider = governingSliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector<HTMLElement>(`.${styles.memberCard}`);
    const step = (firstCard?.offsetWidth ?? 0) + 16;
    slider.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  };

  const slideTaskForce = (direction: "left" | "right") => {
    const slider = taskForceSliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector<HTMLElement>(`.${styles.memberCard}`);
    const step = (firstCard?.offsetWidth ?? 0) + 16;
    slider.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
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
              <a href={item.href} key={item.label} className={styles.navLink}>{item.label}</a>
            ))}
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={styles.loginButton}>Register</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.heroSection} id="hero">
          <div className={styles.container}>
            <div className={styles.heroCard} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div className={styles.heroSlidesTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {heroSlides.map((slide) => (
                  <div className={styles.heroSlide} key={slide.image}>
                    <img src={slide.image} alt={slide.alt} className={`${styles.heroSlideImage} ${styles[slide.imageClassName as keyof typeof styles]}`} />
                    <a
                      href={slide.ctaHref}
                      target={slide.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel={slide.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`${styles.slideCta} ${styles[slide.ctaClassName as keyof typeof styles]}`}
                    >
                      {slide.ctaLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className={styles.heroControlsOverlay}>
                <button className={styles.slideArrowLeft} aria-label="Previous slide" onClick={prevSlide}>&lt;</button>
                <div className={styles.heroDots}>
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      className={`${styles.heroDot} ${activeSlide === index ? styles.heroDotActive : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
                <button className={styles.slideArrowRight} aria-label="Next slide" onClick={nextSlide}>&gt;</button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className={`${styles.band} ${styles.darkBand}`} id="about">
          <div className={`${styles.container} ${styles.splitIntro}`}>
            <SectionTitle title="About" />
            <div className={styles.aboutContentRight}>
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
          </div>
        </section>

        {/* Principles */}
        <section className={`${styles.band} ${styles.darkBand}`} id="principles">
          <div className={styles.container}>
            <SectionTitle title="Principles" />
            <div className={styles.principleGrid}>
              {principlesList.map((principle) => (
                <div key={principle.title} className={`${styles.principleCard} ${expandedPrinciple === principle.title ? styles.principleCardExpanded : ""}`}>
                  <button
                    className={styles.principleButton}
                    onClick={() => setExpandedPrinciple(expandedPrinciple === principle.title ? null : principle.title)}
                  >
                    <div className={styles.principleIcon}>{principle.marker}</div>
                    <h4>{principle.title}</h4>
                    <p className={styles.principleShort}>{principle.shortCopy}</p>
                    <span className={styles.expandIcon}>{expandedPrinciple === principle.title ? "\u2212" : "+"}</span>
                  </button>
                  {expandedPrinciple === principle.title && (
                    <div className={styles.principleExpandedContent}>
                      <p>{principle.fullContent}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organisation */}
        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`} id="organisation">
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <SectionTitle title="Organisation" />
              <p className={styles.leadText} style={{ marginBottom: "2rem" }}>
                DeScIn is steered by a governing council that shapes its vision, direction, and long-term growth. Comprising world-renowned leaders in design sciences, the council brings together academic excellence, institutional experience, and a shared commitment to advancing design as a rigorous and impactful discipline.
              </p>
            </div>

            <div className={styles.orgWrap}>
              {/* Governing Council */}
              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Governing Council</h3>
                  </div>
                  <button className={styles.rowAction} aria-label={`${isGoverningOpen ? "Collapse" : "Expand"} governing council`} onClick={() => setIsGoverningOpen((v) => !v)}>
                    {isGoverningOpen ? "-" : "+"}
                  </button>
                </div>
                {isGoverningOpen && (
                  <div className={styles.councilSliderWrap}>
                    <button className={styles.sliderArrow} aria-label="Previous" onClick={() => slideGoverningCouncil("left")}>&lt;</button>
                    <div className={styles.memberStrip} ref={governingSliderRef}>
                      {governingCouncil.map((member, index) => (
                        <article className={styles.memberCard} key={`${member.name}-${index}`} role="button" tabIndex={0} onClick={() => setSelectedMember(member)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedMember(member); }}>
                          <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
                          <div className={styles.memberInfo}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberRole}>{member.role}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                    <button className={styles.sliderArrow} aria-label="Next" onClick={() => slideGoverningCouncil("right")}>&gt;</button>
                  </div>
                )}
              </div>

              {/* Task Force */}
              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Task Force</h3>
                  </div>
                  <button className={styles.rowAction} aria-label={`${isTaskForceOpen ? "Collapse" : "Expand"} task force`} onClick={() => setIsTaskForceOpen((v) => !v)}>
                    {isTaskForceOpen ? "-" : "+"}
                  </button>
                </div>
                {isTaskForceOpen && (
                  <div className={styles.councilSliderWrap}>
                    <button className={styles.sliderArrow} aria-label="Previous" onClick={() => slideTaskForce("left")}>&lt;</button>
                    <div className={styles.memberStrip} ref={taskForceSliderRef}>
                      {taskForceMembers.map((member, index) => (
                        <article className={styles.memberCard} key={`${member.name}-${index}`} role="button" tabIndex={0} onClick={() => setSelectedMember(member)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedMember(member); }}>
                          <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
                          <div className={styles.memberInfo}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberRole}>{member.role}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                    <button className={styles.sliderArrow} aria-label="Next" onClick={() => slideTaskForce("right")}>&gt;</button>
                  </div>
                )}
              </div>

              {/* Advisory Board */}
              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Advisory Board</h3>
                    <span className={styles.comingSoonPill}>Coming soon</span>
                  </div>
                  <button className={styles.rowAction} aria-label={`${isAdvisoryOpen ? "Collapse" : "Expand"} advisory board`} onClick={() => setIsAdvisoryOpen((v) => !v)}>
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

        {/* Membership */}
        <section className={`${styles.band} ${styles.darkBand}`} id="membership">
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <SectionTitle title="Membership" />
              <p className={styles.leadText} style={{ marginBottom: "2rem" }}>
                There are four types of membership in DeScIn Academy. Click on a membership type to see the benefits and details.
              </p>
            </div>
            <div className={styles.membershipGrid}>
              {membershipTypes.map((type) => (
                <div key={type.title} className={styles.membershipCard}>
                  <button className={styles.membershipButton} onClick={() => setSelectedMembership(type)}>
                    <h4>{type.title}</h4>
                    <p>{type.description}</p>
                    <span className={styles.expandIcon}>+</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className={`${styles.band} ${styles.darkBand}`} id="events">
          <div className={styles.container}>
            <SectionTitle title="Events" />
            <div className={styles.eventDetailGrid}>
              {eventsList.map((event) => (
                <article className={styles.eventDetailCard} key={event.title} role="button" tabIndex={0} onClick={() => setSelectedEvent(event)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedEvent(event); }}>
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                  <div className={styles.eventDetailBody}>
                    <h4>{event.title}</h4>
                    <p className={styles.eventSubtitle}>{event.subtitle}</p>
                    <p className={styles.eventDescription}>{event.description}</p>
                    <a href={event.link} target={event.link.startsWith("http") ? "_blank" : undefined} rel={event.link.startsWith("http") ? "noopener noreferrer" : undefined} className={styles.eventCardLink} onClick={(e) => e.stopPropagation()}>
                      {event.title === "DRM Gurukooll" ? "Learn More" : `Visit ${event.title}`} &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Student Chapters */}
        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <div>
                <SectionTitle title="Student Chapters" />
              </div>
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

        {/* Special Interest Groups */}
        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <SectionTitle title="Special Interest Groups" />
            <div className={styles.eventGrid}>
              {specialInterestGroups.map((group) => (
                <article className={styles.eventCard} key={group.title}>
                  <img src={group.image} alt={group.title} className={styles.eventImage} />
                  <div className={styles.eventBody}>
                    <h4>{group.title}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus nunc nunc morbi viverra. Diam donec eu gravida non facilisis nulla ut feugiat.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Fellowship */}
        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <div>
                <SectionTitle title="Awards & Fellowship" />
              </div>
              <p className={styles.leadText}>
                DeScIn Academy recognizes and honors outstanding contributions to the field of design sciences through awards and fellowships, celebrating individuals who exemplify excellence and innovation.
              </p>
            </div>
            <div className={styles.awardsGrid}>
              {awardsData.map((award) => (
                <article className={styles.awardCard} key={award.title} role="button" tabIndex={0} onClick={() => setSelectedAward(award)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedAward(award); }}>
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778" alt={award.title} className={styles.eventImage} />
                  <div className={styles.awardCardBody}>
                    <h4>{award.title}</h4>
                    <p>{award.content.slice(0, 120)}...</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources">
          <ResourceSection title="Resources" />
        </section>

        {showArticlesResourcesBackup && <ResourceSection title="Articles & Resources" dark />}
      </main>

      <footer className={styles.siteFooter}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/a60ffb900e83eb04c59153aad12ceffa30044ac8?width=225" alt="DeScIn" />
            <span>DeScIn</span>
          </div>
          <div className={styles.footerCol}>
            <h5>Email</h5>
            <a href="mailto:drmgurukooll@gmail.com">drmgurukooll@gmail.com</a>
            <a href="tel:+919876543210">+91 9876543210</a>
            <a href="tel:+919876543211">+91 9876543211</a>
          </div>
          <div className={styles.footerCol}>
            <h5>Department of Design and Manufacturing, IISc Bengaluru</h5>
            <p>North Guwahati, Assam 78039</p>
            <a href="http://www.iitg.ac.in/design">http://www.iitg.ac.in/design</a>
          </div>
        </div>
      </footer>

      {/* Member Modal */}
      {selectedMember && (
        <div className={styles.memberModalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={styles.memberModalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.memberModalClose} aria-label="Close" onClick={() => setSelectedMember(null)}>&times;</button>
            <div className={styles.memberModalLeft}>
              {selectedMember.photo && <img src={selectedMember.photo} alt={selectedMember.name} className={styles.memberModalImage} />}
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.role}</p>
            </div>
            <div className={styles.memberModalRight}>
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* Event Modal */}
      {selectedEvent && (
        <div className={styles.memberModalOverlay} onClick={() => setSelectedEvent(null)}>
          <div className={styles.memberModalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.memberModalClose} aria-label="Close" onClick={() => setSelectedEvent(null)}>&times;</button>
            <div className={styles.memberModalLeft}>
              <img src={selectedEvent.image} alt={selectedEvent.title} className={styles.memberModalImage} />
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.subtitle}</p>
            </div>
            <div className={styles.memberModalRight}>
              {selectedEvent.paragraphs.map((text, idx) => (
                <p key={idx} style={{ marginBottom: "1rem" }}>{text}</p>
              ))}
              <a href={selectedEvent.link} target={selectedEvent.link.startsWith("http") ? "_blank" : undefined} rel={selectedEvent.link.startsWith("http") ? "noopener noreferrer" : undefined} className={styles.eventModalLink}>
                {selectedEvent.title === "DRM Gurukooll" ? "Learn More" : `Visit ${selectedEvent.title}`} &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Membership Modal */}
      {selectedMembership && (
        <div className={styles.memberModalOverlay} onClick={() => setSelectedMembership(null)}>
          <div className={styles.memberModalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.memberModalClose} aria-label="Close" onClick={() => setSelectedMembership(null)}>&times;</button>
            <div className={styles.memberModalLeft}>
              <h3>{selectedMembership.title}</h3>
              <p>{selectedMembership.description}</p>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Fees</p>
                <p style={{ fontSize: "1rem" }}>{selectedMembership.fees}</p>
              </div>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={styles.registerButton}>Register</a>
            </div>
            <div className={styles.memberModalRight}>
              <p style={{ marginBottom: "1.5rem" }}>{selectedMembership.details}</p>
              <h4 style={{ color: "#000", fontFamily: "var(--font-display), sans-serif", fontSize: "1.3rem", marginBottom: "0.8rem" }}>Benefits:</h4>
              <ul className={styles.benefitsList} style={{ color: "#000" }}>
                {selectedMembership.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ color: "#000" }}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Award Modal */}
      {selectedAward && (
        <div className={styles.memberModalOverlay} onClick={() => setSelectedAward(null)}>
          <div className={styles.memberModalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.memberModalClose} aria-label="Close" onClick={() => setSelectedAward(null)}>&times;</button>
            <div className={styles.memberModalLeft}>
              <div className={styles.awardModalIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <h3>{selectedAward.title}</h3>
            </div>
            <div className={styles.memberModalRight}>
              <p style={{ marginBottom: "1.5rem" }}>{selectedAward.content}</p>
              {selectedAward.awardees.length > 0 && (
                <>
                  <h4 style={{ color: "#000", fontFamily: "var(--font-display), sans-serif", fontSize: "1.2rem", marginBottom: "0.8rem" }}>Past Awardees:</h4>
                  <ul className={styles.awardeeList}>
                    {selectedAward.awardees.map((awardee, idx) => (
                      <li key={idx}>{awardee}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
