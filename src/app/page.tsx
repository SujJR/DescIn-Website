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

const chapterCards = [
  {
    name: "IIT Guwahati",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/48cf9a3ba77762c599d85f2401f4a6656f1c6e10?width=120",
  },
  {
    name: "IISc Bengaluru",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/a5bdcf5c23169b79d9455994d2119a099d16bd11?width=120",
  },
  {
    name: "IIT Guwahati",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/3f26a66d34e3ec450ff86a5d2eb991c5c41e201e?width=120",
  },
  {
    name: "IIT Guwahati",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/c89ef1d60424b9a1734ac150d9d0c2a389b6ffd5?width=120",
  },
  {
    name: "IISc Bengaluru",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/365f1348007d570a0d9da9006ca799a10656fca9?width=120",
  },
  {
    name: "IIT Guwahati",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/69a0d5a130442c46ac46f6d40f67026f0e3cec65?width=120",
  },
];

const governingCouncil = [
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
  {
    name: "Dr. Sougata Karmakar",
    role: "HoD, Department of Design at IIT Guwahati",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/98d3994c9195b2584729a1c90ef55587fe4dd82b?width=778",
    bio:
      "He is a distinguished Professor and former Head of the Department of Design at IIT Guwahati, where he has established himself as a leading authority in the fields of Ergonomics and Human Factors. With a specialized academic background in Physiology and Human Resource Management, his research bridges the critical gap between biological science and industrial application, focusing heavily on Physical, Cognitive, and Virtual Ergonomics. He leads the Ergonomics Laboratory at IITG, spearheading innovative projects in Digital Human Modeling (DHM) and CAD-based simulations to evaluate human-product interactions before physical prototyping. Beyond his extensive publication record of over 40 international journal papers, Dr. Karmakar is a prolific inventor with more than 10 granted patents, particularly in ergonomic tool design and occupational health interventions.",
  },
];

const heroSlides = [
  {
    image: "/slides/hero-slide-1.png",
    alt: "DeScIn hero intro",
    ctaLabel: "Know more",
    ctaHref: "#about",
    ctaClassName: "slideCtaKnowMore",
  },
  {
    image: "/slides/hero-slide-2.png",
    alt: "Indian Winter School on Design Research",
    ctaLabel: "Register Here",
    ctaHref: "#events",
    ctaClassName: "slideCtaRegister",
  },
];

const membershipTypes = [
  {
    title: "Student Members",
    copy:
      "Early PhD students in design research who have completed their coursework and are about to begin focused research in the second or third year.",
  },
  {
    title: "Associate Members",
    copy:
      "Emerging researchers and professionals building solid foundations in design research methodology and project framing.",
  },
  {
    title: "Full Members",
    copy:
      "Researchers and practitioners with active contributions to design science, publications, and mentoring activity.",
  },
  {
    title: "Fellows",
    copy:
      "Senior design science leaders recognized for long-term impact through research, guidance, and institution building.",
  },
];

const principleCards = [
  {
    marker: "Q",
    title: "Quality",
    copy: "Highest quality in design research",
  },
  {
    marker: "I",
    title: "Inclusivity",
    copy: "Widest representation of design research",
  },
  {
    marker: "R",
    title: "Responsibility",
    copy: "Commitment to vision and mission",
  },
  {
    marker: "O",
    title: "Ownership",
    copy: "Leadership and onus retained",
  },
];

const benefitCards = [
  {
    marker: "S",
    title: "Support",
    copy:
      "Develop, if necessary, support with which to impact the goals via the focus of the project.",
  },
  {
    marker: "K",
    title: "Knowledge",
    copy:
      "Obtain an overview of research methods and details of some frequently used methods.",
  },
  {
    marker: "N",
    title: "Networking",
    copy:
      "Become member of a growing network of design researchers and mentors.",
  },
];

const eventCards = [
  {
    title: "DRM Gurukooll",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "ICoRD",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "i4AM",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "ServDesign",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/db37945e65c35ffa874761eacc7d6b752b18e352?width=778",
  },
];

const specialInterestGroups = [
  {
    title: "Design Education",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "Design Research Quality",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "Design Research",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecaefda523087a16ccebf206a239255507045993?width=778",
  },
  {
    title: "DRM",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/db37945e65c35ffa874761eacc7d6b752b18e352?width=778",
  },
];

const resourceArticles = [
  {
    title: "Design Education",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Tellus nunc nunc morbi viverra. Diam donec eu gravida non facilisis nulla ut feugiat.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
  },
  {
    title: "Prototyping Techniques",
    copy:
      "Rapid prototyping allows designers to test ideas quickly and gather feedback. This iterative process is essential for refining concepts before full-scale development.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
  },
  {
    title: "User-Centered Design",
    copy:
      "Understanding user needs through interviews and observations is crucial for effective design. Applying empathy helps create more meaningful and usable products.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b37f71378e12e304124214ce645fbe0414c6bb0b?width=830",
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

// Backup toggle: keep Articles & Resources code available for quick restore.
const showArticlesResourcesBackup = false;

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
    <section
      className={`${styles.band} ${dark ? styles.blackBand : styles.lightBand} ${dark ? styles.gridDark : styles.gridLight}`}
    >
      <div className={styles.container}>
        <SectionTitle title={title} />
        <div
          className={`${styles.resourceLayout} ${dark ? styles.resourceLayoutDark : ""}`}
        >
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
              <button className={`${styles.tab} ${styles.tabActive}`}>
                Most Recent
              </button>
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
  const [selectedMember, setSelectedMember] = useState<
    (typeof governingCouncil)[number] | null
  >(null);
  const governingSliderRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
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

  return (
    <div className={styles.page}>
      <header className={styles.siteHeader}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ec3db5819aa6d2f09c6b92fbd6c528b02034f34f?width=92"
              alt="DeScIn logo"
            />
            <span>DeScIn</span>
          </a>
          <nav className={styles.siteNav}>
            {navItems.map((item) => (
              <a href={item.href} key={item.label} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <button className={styles.loginButton}>Log in</button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection} id="hero">
          <div className={styles.container}>
            <div
              className={styles.heroCard}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={styles.heroSlidesTrack}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div className={styles.heroSlide} key={slide.image}>
                    <img src={slide.image} alt={slide.alt} className={styles.heroSlideImage} />
                    <a
                      href={slide.ctaHref}
                      className={`${styles.slideCta} ${styles[slide.ctaClassName as keyof typeof styles]}`}
                    >
                      {slide.ctaLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className={styles.heroControlsOverlay}>
                <button
                  className={styles.slideArrowLeft}
                  aria-label="Previous slide"
                  onClick={prevSlide}
                >
                  &lt;
                </button>
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
                <button
                  className={styles.slideArrowRight}
                  aria-label="Next slide"
                  onClick={nextSlide}
                >
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
              DRM GURUKOOLL is an annual event hosted at a different institution each year,
              with the objectives of exposing designers and early (career) design
              researchers to the current understanding of design and design research, and
              supporting them to adopt a systematic methodology. This second edition,
              themed &quot;Design Innovation through Research&quot;, will be hosted by IIT Guwahati
              in mid-June over 8 days where the participants will experience several
              mini-design workshops focussing on the key areas of design innovation,
              supported by mentorship in several, commonly used design research methods
              embedded in DRM, a design research methodology used worldwide.
            </p>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="principles">
          <div className={styles.container}>
            <SectionTitle title="4 Principles" />
            <div className={styles.principleGrid}>
              {principleCards.map((principle) => (
                <article className={styles.principleCard} key={principle.title}>
                  <div className={styles.principleIcon}>{principle.marker}</div>
                  <h4>{principle.title}</h4>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`} id="organisation">
          <div className={styles.container}>
            <SectionTitle title="Organisation" />

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
                        <article
                          className={styles.memberCard}
                          key={`${member.name}-${index}`}
                          role="button"
                          tabIndex={0}
                          onClick={() => setSelectedMember(member)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              setSelectedMember(member);
                            }
                          }}
                        >
                          <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
                          <div className={styles.memberInfo}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberRole}>{member.role}</p>
                          </div>
                        </article>
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

              <div className={styles.orgRow}>
                <div className={styles.orgRowHeader}>
                  <div className={styles.orgTitleGroup}>
                    <h3 className={styles.orgTitle}>Task Force</h3>
                    <span className={styles.comingSoonPill}>Coming soon</span>
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
                  <div className={styles.orgCollapsedPanel}>
                    <p>Task Force details will be added here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="membership">
          <div className={styles.container}>
            <SectionTitle title="Membership" />
            <div className={styles.membershipRows}>
              {membershipTypes.map((type, index) => (
                <article className={styles.membershipRow} key={type.title}>
                  <div className={styles.membershipIcon}>{index + 1}</div>
                  <div className={styles.membershipText}>
                    <h4>{type.title}</h4>
                    <p>{type.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`}>
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <SectionTitle title="Benefits" />
              <p className={styles.leadText}>
                Understanding relationships among design, methods, and methodology through
                practical guidance and structured mentorship.
              </p>
            </div>
            <div className={styles.benefitGrid}>
              {benefitCards.map((benefit) => (
                <article className={styles.benefitCard} key={benefit.title}>
                  <div className={styles.benefitIcon}>{benefit.marker}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`}>
          <div className={styles.container}>
            <div className={styles.feeHeader}>
              <SectionTitle title="Fees" />
              <span className={styles.comingSoonPill}>Coming soon</span>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`} id="events">
          <div className={styles.container}>
            <SectionTitle title="Events" />
            <div className={styles.eventGrid}>
              {eventCards.map((event) => (
                <article className={styles.eventCard} key={event.title}>
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                  <div className={styles.eventBody}>
                    <h4>{event.title}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus nunc nunc morbi viverra.
                      Diam donec eu gravida non facilisis nulla ut feugiat.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.lightBand} ${styles.gridLight}`}>
          <div className={styles.container}>
            <div className={styles.splitIntro}>
              <SectionTitle title="Student Chapters" />
              <p className={styles.leadText}>
                Stay connected. DeScIn is a growing international community of people who
                care deeply about design and its impact on the world. Members come from
                academia, industry, and education, all united by a common goal.
              </p>
            </div>

            <div className={styles.chapterGrid}>
              {chapterCards.map((chapter, index) => (
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
            <SectionTitle title="Awards & Fellowship" />
            <div className={styles.awardsBlock}>
              <p className={styles.subCopy}>
                Stay connected. The DeScIn is more than an organisation - it is a growing
                community built around mentorship, collaboration, and design research impact.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.darkBand}`}>
          <div className={styles.container}>
            <SectionTitle title="Special Interest Groups" />
            <div className={styles.eventGrid}>
              {specialInterestGroups.map((group) => (
                <article className={styles.eventCard} key={group.title}>
                  <img src={group.image} alt={group.title} className={styles.eventImage} />
                  <div className={styles.eventBody}>
                    <h4>{group.title}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus nunc nunc morbi viverra.
                      Diam donec eu gravida non facilisis nulla ut feugiat.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources">
          <ResourceSection title="Resources" />
        </section>

        {showArticlesResourcesBackup && <ResourceSection title="Articles & Resources" dark />}
      </main>

      <footer className={styles.siteFooter}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a60ffb900e83eb04c59153aad12ceffa30044ac8?width=225"
              alt="DeScIn"
            />
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

      {selectedMember && (
        <div className={styles.memberModalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={styles.memberModalCard} onClick={(event) => event.stopPropagation()}>
            <button
              className={styles.memberModalClose}
              aria-label="Close member details"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>

            <div className={styles.memberModalLeft}>
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className={styles.memberModalImage}
              />
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.role}</p>
            </div>

            <div className={styles.memberModalRight}>
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
