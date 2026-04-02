export default function App() {
  const resumeItems = [
    {
      title: "Project Management Intern",
      company: "MN Custom Homes",
      period: "2025",
      description:
        "Worked across high-end residential projects, helping coordinate subcontractors, track punch lists, support quality control, and stay involved in day-to-day site operations.",
    },
    {
      title: "Construction Management Student",
      company: "University of Washington",
      period: "Present",
      description:
        "Focused on construction operations, project delivery, scheduling, estimating, and field coordination.",
    },
    {
      title: "Program Mentor",
      company: "Sawhorse Revolution",
      period: "Past Experience",
      description:
        "Mentored students in hands-on building work, power tool safety, and jobsite habits.",
    },
  ];

  const galleryItems = [
    {
      title: "Residential Construction",
      subtitle: "Field experience, coordination, and craftsmanship",
    },
    {
      title: "Project Documentation",
      subtitle: "Planning, scheduling, and visual communication",
    },
    {
      title: "Hands-On Building",
      subtitle: "Tools, materials, and learning through making",
    },
    {
      title: "Design + Construction",
      subtitle: "An interest in both process and finished space",
    },
  ];

  const navItems = ["About", "Resume", "Gallery", "Contact"];

  return (
    <div
      className="min-h-screen bg-[#f3eadb] text-[#2f2a24]"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <header className="sticky top-0 z-50 border-b border-[#b79670]/40 bg-[#f3eadb]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#8c6245]">
              Alan H. <span className="text-[#c96d44]">Lee</span>
            </p>
            <h1 className="text-lg md:text-xl">Portfolio</h1>
          </div>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-[0.25em] text-[#6b5b4d] transition hover:text-[#c96d44]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#b79670]/30">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-10 top-16 h-36 w-36 rounded-full bg-[#9f8a64]" />
            <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-t-full bg-[#6a7a5b]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-28">
            <div className="space-y-10 md:space-y-12">
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#6b5b4d]">
                <span>Construction Management</span>
                <span className="mx-1 text-[#c96d44]">•</span>
                <span>Real Estate</span>
                <span className="mx-1 text-[#c96d44]">•</span>
                <span>Business</span>
              </div>

              <h2 className="mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">
                Alan H. <span className="text-[#c96d44]">Lee</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52463c] md:text-xl">
                Construction Management senior at the University of Washington,
                currently working as a Project Engineer at Venture General
                Contractors, with a growing focus on residential development and
                strong interests in business, sales, and management.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative h-[360px] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#b79670]/40 bg-[#e7d8c1] p-5 shadow-[0_18px_60px_rgba(47,42,36,0.12)]">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-[#8c6245]/25 bg-[#f8f1e7] p-6">
                  <div className="space-y-3">
                    <div className="h-24 w-24 rounded-full bg-[#c96d44]/85" />
                    <h3 className="text-3xl">Seattle Based</h3>
                    <p className="leading-7 text-[#5e5146]">
                      Drawn to projects that balance planning, field
                      coordination, and design awareness.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm uppercase tracking-[0.18em] text-[#6b5b4d]">
                    <div className="rounded-2xl bg-[#d8c4a8] p-4">Build</div>
                    <div className="rounded-2xl bg-[#b6b089] p-4">Detail</div>
                    <div className="rounded-2xl bg-[#c96d44]/80 p-4 text-white">
                      Craft
                    </div>
                    <div className="rounded-2xl bg-[#7c8a68] p-4 text-white">
                      Process
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h3 className="mt-4 text-4xl md:text-5xl">About Me</h3>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#4f4338]">
              <p>
                I was introduced to construction early on, around age 12, when
                my parents started renovating and flipping houses. I would tag
                along whenever I could, helping out in small ways—painting,
                holding flashlights, carrying materials—just trying to be part
                of the process. That early exposure stuck with me and sparked a
                genuine interest in building.
              </p>
              <p>
                In high school, I joined Sawhorse Revolution, where I spent my
                summers working on community-based construction projects around
                the Seattle area. Alongside a team of 10–15 students, I helped
                build projects for local nonprofits, including a tool shed at
                the Danny Woo Community Garden, a gallery space for Lighthouse
                for the Blind, a wooden boat for Duwamish River cleanup efforts,
                and Estelita’s Library, a small community book exchange. Those
                experiences gave me hands-on skills, but more importantly, they
                showed me the impact construction can have beyond just the
                physical structure.
              </p>
              <p>
                I later returned to the program as a mentor, helping guide new
                students and support project organization. That shift—from
                learning to leading—pushed me in new ways and deepened my
                appreciation for both the work and the people involved.
              </p>
              <p>
                When I got to college, choosing construction management felt
                like a natural next step. What I enjoy most about construction
                is how tangible it is—you take something that exists only on
                paper and turn it into something real. There’s a real sense of
                responsibility in that, but also a lot of satisfaction. At the
                end of the day, you’re not just building structures—you’re
                building homes, workplaces, and spaces that people rely on every
                day.
              </p>
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="border-y border-[#b79670]/30 bg-[#efe4d2]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <h3 className="mb-12 text-4xl md:text-5xl">Resume</h3>

            <div className="grid gap-6">
              {resumeItems.map((item, index) => (
                <div
                  key={index}
                  className="grid gap-4 rounded-[2rem] border border-[#b79670]/35 bg-[#f8f1e7] p-6 shadow-[0_12px_35px_rgba(47,42,36,0.06)] md:grid-cols-[0.25fr_0.75fr]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#8c6245]">
                      {item.period}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl">{item.title}</h4>
                    <p className="mt-1 text-base uppercase tracking-[0.2em] text-[#6b5b4d]">
                      {item.company}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-[#4f4338]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          <h3 className="mb-12 text-4xl md:text-5xl">Gallery</h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-[#b79670]/35 bg-[#f6ecdf] shadow-[0_12px_35px_rgba(47,42,36,0.06)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(47,42,36,0.14)]"
              >
                <div className="relative h-72 overflow-hidden bg-[#dcc4a7]" />
                <div className="space-y-2 p-6">
                  <h4 className="text-2xl">{item.title}</h4>
                  <p className="leading-7 text-[#5e5146]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#b79670]/30 bg-[#2f2a24] text-[#f3eadb]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <h3 className="mb-10 text-4xl md:text-5xl">Contact</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p>Email</p>
                <p className="text-xl">Alanhlee5x@gmail.com</p>
              </div>
              <div>
                <p>Phone</p>
                <p className="text-xl">469-740-6508</p>
              </div>
              <div>
                <p>Location</p>
                <p className="text-xl">Seattle, Washington</p>
              </div>
              <div>
                <p>LinkedIn</p>
                <p className="text-xl">linkedin.com/in/alan-leee</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}