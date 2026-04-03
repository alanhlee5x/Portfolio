import { useEffect, useRef, useState } from "react";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-1 h-7 w-7 text-[#7c3f2c] transition-transform duration-200 group-hover:scale-110"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-1 h-7 w-7 text-[#7c3f2c] transition-transform duration-200 group-hover:scale-110"
    aria-hidden="true"
  >
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.46-1.19a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-1 h-7 w-7 text-[#7c3f2c] transition-transform duration-200 group-hover:scale-110"
    aria-hidden="true"
  >
    <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-7 w-7 text-[#7c3f2c] transition-transform duration-200 group-hover:scale-110"
    aria-hidden="true"
  >
    <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.5c0-3.07-1.64-4.5-3.83-4.5-1.76 0-2.55.97-2.99 1.65V8.5h-3.38c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.9-1.39 1.95-1.39 1.38 0 1.93 1.05 1.93 2.59V20H21v-7.5-.01z" />
  </svg>
);

export default function AlanLeePortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );
  const [heroProgress, setHeroProgress] = useState(0);
  const galleryScrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 180);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      setIsLoaded(false);
      setTimeout(() => setIsLoaded(true), 50);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setHeroProgress(0);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      const nextValue = Math.min(window.scrollY / heroHeight, 1);
      setHeroProgress(nextValue);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const reveal = (delay = "delay-0") =>
    `${
      isLoaded
        ? "translate-y-0 opacity-100 blur-0"
        : "translate-y-6 opacity-0 blur-sm"
    } transform transition-all duration-1000 ease-out ${delay}`;

  const navigateTo = (path) => {
    if (path === pathname) return;
    window.history.pushState({}, "", path);
    setPathname(path);
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 50);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollGallery = (direction) => {
    const container = galleryScrollRef.current;
    if (!container) return;
    const amount = Math.min(container.clientWidth * 0.8, 420);
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const resumeItems = [
    {
      title: "Construction Management Student",
      company: "University of Washington",
      period: "Expected June 2026",
      description:
        "Focused on construction operations, project delivery, scheduling, estimating, and field coordination.",
    },
    {
      title: "Project Management Intern",
      company: "MN Custom Homes",
      period: "June 2025 - Sept 2025",
      description:
        "Worked across high-end residential projects, helping coordinate subcontractors, track punch lists, support quality control, and stay involved in day-to-day site operations.",
    },
    {
      title: "Program Mentor",
      company: "Sawhorse Revolution",
      period: "Sept 2022 - Dec 2024",
      description:
        "Mentored students in hands-on building work, power tool safety, and jobsite habits.",
    },
  ];

  const galleryItems = [
    {
      title: "Utility Shed",
      subtitle: "Hands-on carpentry and small-structure construction",
    },
    {
      title: "Deck and Pergola",
      subtitle: "Outdoor framing, detailing, and finish work",
    },
    {
      title: "Farm Fence",
      subtitle: "Site layout, assembly, and durable exterior work",
    },
    {
      title: "Farmer Tool Shed",
      subtitle: "Functional storage built for community use",
    },
    {
      title: "Duwamish Wooden Boat",
      subtitle: "Collaborative build rooted in craft and purpose",
    },
    {
      title: "Community Library",
      subtitle: "Small public structure with local impact",
    },
  ];

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Resume", href: "/#resume" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (event, href) => {
    event.preventDefault();

    if (href === "/about") {
      navigateTo("/about");
      return;
    }

    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        navigateTo("/");
        setTimeout(() => {
          const element = document.querySelector(href.slice(1));
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      } else {
        const element = document.querySelector(href.slice(1));
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const header = (
    <header
      className={`sticky top-0 z-50 border-b border-[#ded8cf] bg-[#f7f4ef]/88 backdrop-blur-xl ${reveal()}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          type="button"
          onClick={() => navigateTo("/")}
          className="text-left"
        >
          <p className="text-xs uppercase tracking-[0.42em] text-[#8b8175]">
            Alan H. <span className="text-[#7c3f2c]">Lee</span>
          </p>
          <h1 className="mt-1 text-lg text-[#1f1c19] md:text-xl">
            Portfolio
          </h1>
        </button>
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm uppercase tracking-[0.24em] text-[#5f574f] transition duration-200 hover:text-[#7c3f2c]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );

  const homePage = (
    <>
      <section className="relative">
        <div
          className="fixed inset-x-0 top-[77px] z-0 flex h-[calc(100vh-77px)] items-center justify-center overflow-hidden border-b border-[#e4ddd3] pointer-events-none"
          style={{
            opacity: 1 - heroProgress,
            transform: `scale(${1 - heroProgress * 0.04})`,
          }}
        >
          <div className="absolute inset-0">
            <img
              src="/hero-bg.jpg"
              alt="Hero background"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center md:px-10">
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#2a2a2a] md:text-xs">
              <span>Construction Management</span>
              <span className="text-[#7c3f2c]">•</span>
              <span>Real Estate</span>
              <span className="text-[#7c3f2c]">•</span>
              <span>Business</span>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center">
                <h2 className="max-w-6xl text-7xl leading-[0.88] tracking-[-0.05em] text-black md:text-[10rem] xl:text-[12rem]">
                  Alan H. <span className="text-[#7c3f2c]">Lee</span>
                </h2>
                <p
                  className={`mt-4 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-[#2a2a2a] transition-all duration-1200 ease-out ${
                    isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                  }`}
                >
                  Seattle, Washington
                </p>

                <div className="mt-4 h-px w-32 bg-[#7c3f2c]/80" />
              </div>

              <p
                className="max-w-3xl text-lg leading-9 text-black md:text-[24px]"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Construction Management senior at the University of Washington,
                currently working as a Project Engineer at Venture General
                Contracting, with a growing focus on residential development and
                strong interests in business, sales, and management.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh-77px)]" />

        <div className="relative z-10 -mt-[calc(100vh-77px)] pt-[calc(100vh-77px)]">
          <div className="rounded-t-[2.5rem] border-x border-t border-[#e4ddd3] bg-[#f7f4ef] shadow-[0_-18px_50px_rgba(31,28,25,0.08)]">
            <section
              id="resume"
              className={`rounded-t-[2.5rem] border-b border-[#e4ddd3] bg-[#efe9e1] ${reveal(
                "delay-200"
              )}`}
            >
              <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#8b8175]">
                      Experience
                    </p>
                    <h3 className="mt-5 text-4xl text-[#1f1c19] md:text-5xl">
                      Resume
                    </h3>
                  </div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit rounded-full border border-[#d6cec2] bg-[#fbf9f5] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#2f2a25] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="grid gap-6 md:auto-rows-fr">
                  {resumeItems.map((item, index) => (
                    <div
                      key={index}
                      className="h-full grid gap-5 rounded-[2rem] border border-[#ddd5ca] bg-[#faf7f2] p-7 shadow-[0_16px_40px_rgba(31,28,25,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(31,28,25,0.10)] md:grid-cols-[0.25fr_0.75fr]"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8b8175] whitespace-nowrap">
                          {item.period}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[28px] leading-tight text-[#1f1c19]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#7c3f2c] whitespace-nowrap">
                          {item.company}
                        </p>
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b443d]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="group rounded-[2rem] border border-[#ddd5ca] bg-[#faf7f2] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(31,28,25,0.10)]">
                    <h4 className="mb-4 text-2xl text-[#1f1c19]">Toolkit</h4>
                    <ul className="space-y-2 text-[#4b443d]">
                      <li>Scheduling (P6, MS Project)</li>
                      <li>Estimating & Takeoffs</li>
                      <li>Field Coordination</li>
                      <li>Bluebeam / Plan Reading</li>
                      <li>Excel / Cost Tracking</li>
                    </ul>
                  </div>

                  <div className="group rounded-[2rem] border border-[#ddd5ca] bg-[#faf7f2] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(31,28,25,0.10)]">
                    <h4 className="mb-4 text-2xl text-[#1f1c19]">Enjoys</h4>
                    <ul className="space-y-2 text-[#4b443d]">
                      <li>Hands-on Building - Carpentry</li>
                      <li>Real Estate & Development</li>
                      <li>Photography</li>
                      <li>Travel</li>
                      <li>Rock Climbing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="gallery"
              className={`mx-auto max-w-7xl px-6 py-24 md:px-10 ${reveal(
                "delay-300"
              )}`}
            >
              <div className="mb-12 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8b8175]">
                    Selected Work
                  </p>
                  <h3 className="mt-5 text-4xl text-[#1f1c19] md:text-5xl">
                    Project Gallery
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollGallery("left")}
                    aria-label="Scroll gallery left"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6cec2] bg-[#fbf9f5] text-[#2f2a25] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollGallery("right")}
                    aria-label="Scroll gallery right"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6cec2] bg-[#fbf9f5] text-[#2f2a25] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative -mx-3 px-3">
                <div
                  ref={galleryScrollRef}
                  className="flex gap-6 overflow-x-auto overflow-y-visible px-3 py-4 pb-6 snap-x snap-mandatory"
                  style={{
                    scrollbarWidth: "auto",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {galleryItems.map((item, index) => (
                    <div
                      key={index}
                      className="group relative z-0 w-[calc((100%-2rem)/3)] min-w-0 flex-shrink-0 snap-start rounded-[2rem] border border-[#ddd5ca] bg-[#faf7f2] transition duration-300 hover:z-10 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#b9aa96]"
                    >
                      <div className="relative h-72 rounded-t-[2rem] overflow-hidden bg-[#ebe4da]">
                        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.18),rgba(124,63,44,0.08),rgba(31,28,25,0.04))] transition duration-300 group-hover:scale-105" />
                      </div>
                      <div className="space-y-2 p-6">
                        <h4 className="text-2xl leading-tight text-[#1f1c19]">
                          {item.title}
                        </h4>
                        <p className="leading-7 text-[#5f574f]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="contact"
              className={`border-t border-[#d9d0c4] bg-[#f3eee7] text-[#1f1c19] ${reveal(
                "delay-500"
              )}`}
            >
              <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                <div className="mb-12">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#7c3f2c]">
                    Contact
                  </p>
                  <h3 className="mt-5 text-4xl md:text-5xl">Let’s connect.</h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <a
                    href="mailto:Alanhlee5x@gmail.com"
                    className="group flex items-center justify-between rounded-[1.75rem] border border-[#ddd5ca] bg-[#faf7f2] p-6 transition hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#7c3f2c]">
                        Email
                      </p>
                      <p className="text-xl">Alanhlee5x@gmail.com</p>
                    </div>
                    <MailIcon />
                  </a>

                  <div className="group flex items-center justify-between rounded-[1.75rem] border border-[#ddd5ca] bg-[#faf7f2] p-6">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#7c3f2c]">
                        Phone
                      </p>
                      <p className="text-xl">469-740-6508</p>
                    </div>
                    <PhoneIcon />
                  </div>

                  <div className="group flex items-center justify-between rounded-[1.75rem] border border-[#ddd5ca] bg-[#faf7f2] p-6">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#7c3f2c]">
                        Location
                      </p>
                      <p className="text-xl">Seattle, Washington</p>
                    </div>
                    <MapPinIcon />
                  </div>

                  <a
                    href="https://linkedin.com/in/alan-leee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[1.75rem] border border-[#ddd5ca] bg-[#faf7f2] p-6 transition hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#7c3f2c]">
                        LinkedIn
                      </p>
                      <p className="text-xl">linkedin.com/in/alan-leee</p>
                    </div>
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );

  const aboutPage = (
    <section
      className={`mx-auto max-w-7xl px-6 py-24 md:px-10 ${reveal("delay-100")}`}
    >
      <div className="mb-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8b8175]">
          Background
        </p>
        <h2 className="mt-5 text-5xl leading-tight text-[#1f1c19] md:text-6xl">
          About Me
        </h2>
        <div className="mt-6 h-px w-28 bg-[#7c3f2c]/80" />
      </div>

      <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-lg leading-8 text-[#5f574f]">
            A more personal look at how I got into construction and why I chose
            to build a career around it.
          </p>
        </div>
        <div className="space-y-7 text-lg leading-9 text-[#4b443d]">
          <p>
            I was introduced to construction early on, around age 12, when my
            parents started renovating and flipping houses. I would tag along
            whenever I could, helping out in small ways—painting, holding
            flashlights, carrying materials—just trying to be part of the
            process. That early exposure stuck with me and sparked a genuine
            interest in building.
          </p>
          <p>
            In high school, I joined Sawhorse Revolution, where I spent my
            summers working on community-based construction projects around the
            Seattle area. Alongside a team of 10–15 students, I helped build
            projects for local nonprofits, including a tool shed at the Danny
            Woo Community Garden, a gallery space for Lighthouse for the Blind,
            a wooden boat for Duwamish River cleanup efforts, and Estelita’s
            Library, a small community book exchange. Those experiences gave me
            hands-on skills, but more importantly, they showed me the impact
            construction can have beyond just the physical structure.
          </p>
          <p>
            I later returned to the program as a mentor, helping guide new
            students and support project organization. That shift—from learning
            to leading—pushed me in new ways and deepened my appreciation for
            both the work and the people involved.
          </p>
          <p>
            When I got to college, choosing construction management felt like a
            natural next step. What I enjoy most about construction is how
            tangible it is—you take something that exists only on paper and turn
            it into something real. There’s a real sense of responsibility in
            that, but also a lot of satisfaction. At the end of the day, you’re
            not just building structures—you’re building homes, workplaces, and
            spaces that people rely on every day.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div
      className="min-h-screen bg-[#f7f4ef] text-[#1f1c19]"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {header}
      <main>{pathname === "/about" ? aboutPage : homePage}</main>
    </div>
  );
}