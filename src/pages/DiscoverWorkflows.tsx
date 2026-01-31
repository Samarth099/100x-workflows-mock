import { useState } from "react"

const NAV_LINKS = [
  { label: "Workflows", href: "#", active: true },
  { label: "Prompt Library", href: "#" },
  { label: "Articles", href: "#" },
  { label: "Creator Program", href: "#" },
]

const SIDEBAR_CATEGORIES = [
  { label: "All Workflows", href: "#", active: true },
  { label: "By Use cases", href: "#", expandable: true },
  { label: "Games", href: "#" },
  { label: "NetSuite", href: "#" },
  { label: "Whatsapp", href: "#" },
  { label: "Job Application", href: "#" },
  { label: "SEO", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Recruiters", href: "#" },
]

const WORKFLOWS = [
  {
    id: "1",
    title: "producthunt.com/database/people/export/csv",
    description:
      "L2 orchestration workflow: Given a natural-language date, opens Product Hunt Daily Leaderboard, extracts all products, collects launches for each product, extracts comment authors from each launch, enriches profiles, exports CSV, and renders AIUI dashboard.",
  },
  {
    id: "2",
    title: "www.producthunt.com/products/extract-launches",
    description:
      "Extracts all launch links/URLs from a Product Hunt product's launches page. Finds all launch cards and extracts their URLs. Returns array of launch URLs with count.",
  },
  {
    id: "3",
    title: "producthunt.com/people/export",
    description:
      "L2 workflow: End-to-end Product Hunt people database export. Gathers all roles (makers, hunters, commentators, creators) from launches and forums, enriches profiles with social links and metrics.",
  },
  {
    id: "4",
    title: "Lead enrichment from CRM",
    description:
      "Automatically enrich new leads with company data and contact info when they're added to your CRM.",
  },
  {
    id: "5",
    title: "Slack to ticket triage",
    description:
      "Create support tickets from Slack messages and route them by priority and team.",
  },
  {
    id: "6",
    title: "Daily standup reminder",
    description:
      "Send a daily standup prompt to your team and compile responses into a thread.",
  },
]

function Logo100x() {
  return (
    <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9621_9008)">
        <path d="M0 2.95903L1.74367 0H3.14754C4.66859 0 5.90163 1.1966 5.90163 2.67267V12.9816H2.54844V4.10446C2.54844 3.47186 2.01999 2.95903 1.36811 2.95903H0Z" fill="#4F49F3" />
        <path d="M20.0646 6.49078C20.0646 10.0755 17.07 12.9816 13.376 12.9816C9.68207 12.9816 6.6875 10.0755 6.6875 6.49078C6.6875 2.90602 9.68207 0 13.376 0C17.07 0 20.0646 2.90602 20.0646 6.49078ZM10.0318 6.49078C10.0318 8.28318 11.5291 9.73614 13.376 9.73614C15.223 9.73614 16.7203 8.28318 16.7203 6.49078C16.7203 4.6984 15.223 3.24539 13.376 3.24539C11.5291 3.24539 10.0318 4.6984 10.0318 6.49078Z" fill="#4F49F3" />
        <path d="M28.5234 12.9816C31.0753 12.9816 32.9005 12.3611 34.1206 10.7862L41.9988 0H37.9802L31.9836 7.9634C30.9123 9.41365 30.1442 9.73615 28.5234 9.73615V12.9816Z" fill="#4F49F3" />
        <path d="M28.5234 3.24539C30.1258 3.24539 30.7805 3.53174 32.432 5.01126L34.2486 2.67267C32.2668 0.763622 31.1559 0 28.5234 0V3.24539Z" fill="#4F49F3" />
        <path d="M37.73 12.9818H41.3082L37.9502 7.875L36.0234 10.4045L37.73 12.9818Z" fill="#4F49F3" />
        <path d="M27.5401 12.9816C25.7662 12.9816 24.0649 12.2977 22.8106 11.0805C21.5562 9.86321 20.8516 8.21221 20.8516 6.49078C20.8516 4.76932 21.5562 3.11836 22.8106 1.90111C24.0649 0.683848 25.7662 -2.05283e-08 27.5401 0V3.24539C26.6531 3.24539 25.8025 3.58731 25.1753 4.19594C24.5482 4.80457 24.1958 5.63006 24.1958 6.49078C24.1958 7.3515 24.5482 8.177 25.1753 8.7856C25.8025 9.39425 26.6531 9.73614 27.5401 9.73614V12.9816Z" fill="#4F49F3" />
      </g>
      <defs>
        <clipPath id="clip0_9621_9008">
          <rect width="42" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.14368 0.900864C6.54361 0.519978 7.17659 0.535416 7.55747 0.935347L11.7241 5.31035C12.092 5.69655 12.092 6.30345 11.7241 6.68966L7.55747 11.0647C7.17659 11.4646 6.54361 11.48 6.14368 11.0991C5.74375 10.7183 5.72831 10.0853 6.1092 9.68535L8.66667 7L1 7C0.447715 7 0 6.55229 0 6C0 5.44772 0.447715 5 1 5H8.66667L6.1092 2.31466C5.72831 1.91473 5.74375 1.28175 6.14368 0.900864Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="size-5" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0391 16.0417L20.1641 20.1667" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.3359 10.0834C18.3359 5.52702 14.6423 1.83337 10.0859 1.83337C5.52959 1.83337 1.83594 5.52702 1.83594 10.0834C1.83594 14.6397 5.52959 18.3334 10.0859 18.3334C14.6423 18.3334 18.3359 14.6397 18.3359 10.0834Z" stroke="#696969" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function DiscoverWorkflows() {
  const [searchQuery, setSearchQuery] = useState("")
  const [useCasesExpanded, setUseCasesExpanded] = useState(true)

  return (
    <div className="flex min-h-screen flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#CBD5E1] bg-[#fffffa] transition-all duration-200">
        <div className="mx-auto flex h-[60px] w-full max-w-[1700px] items-center bg-[#fffffa] px-4">
          <a href="/" className="flex cursor-pointer items-center gap-2.5">
            <Logo100x />
          </a>
          <nav className="ml-8 hidden items-center gap-8 xl:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative px-4 py-2 text-[15px] font-[600] transition-colors duration-200 text-[#334155]`}
              >
                <span className="relative z-10 inline-block">{link.label}</span>
                {link.active ? (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-100 bg-[#051A1E] opacity-100" />
                ) : (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-[#051A1E] opacity-0 transition-transform duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
                )}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <a href="#" className="group relative px-3 py-2 text-[14px] font-[600] text-[#334155] transition-colors duration-200">
              <span className="relative z-10 inline-block">Sign in</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-[#051A1E] opacity-0 transition-transform duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
            </a>
            <button className="flex cursor-pointer items-center gap-2 rounded-full bg-[#051A1E] px-4 py-2 text-[#F2F2EE] transition-colors hover:opacity-90">
              <span className="hidden sm:block">Install 100X Bot</span>
              <ArrowRightIcon className="h-3 w-3 shrink-0 text-[#F2F2EE]" />
            </button>
          </div>
        </div>
      </header>

      <main id="page-main-content" className="flex-1 overflow-y-auto">
        {/* Hero section */}
        <div className="w-full bg-[#F7F5F3]">
          <div className="mx-auto flex w-[80vw] max-w-[1200px] flex-col-reverse items-center justify-between gap-[60px] pt-8 pb-11 sm:w-[60vw] sm:pt-14 sm:pb-[66px] xl:w-full xl:flex-row xl:px-5 xl:pt-[120px] xl:pb-[60px]">
            <div className="flex w-full max-w-[440px] flex-col justify-center gap-10 text-center lg:text-left">
              <div className="flex flex-col gap-4 xl:gap-5">
                <h1 className="font-[Uxum] text-[32px] font-[500] leading-tight text-[#051A1E] xl:text-[48px]">
                  Agent Workflows
                </h1>
                <p className="text-base font-[400] text-[#5E5F5F] md:text-lg">
                  Explore our curated collection of Agent workflows. Each workflow has been screen-recorded by our creators
                </p>
              </div>
              <div className="relative w-full">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 xl:left-7">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#252525] bg-[#FDFFFA] py-3.5 pr-3 pl-[58px] text-[#696969] placeholder-[#696969] focus:outline-none xl:py-[18px] xl:pl-[62px]"
                />
              </div>
            </div>
            <div className="w-full max-w-[520px]">
              <img
                src="/workflow-header.png"
                alt="Workflow Header"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* Main content with sidebar */}
        <div
          className="min-h-[400px]"
          style={{
            background: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            backgroundColor: "rgb(255, 255, 250)",
          }}
        >
          <div className="mx-auto max-w-[1200px] px-[5vw] py-8 sm:pt-[60px] xl:px-0 xl:pt-[100px]">
            <div className="flex flex-col gap-10 sm:gap-[60px] xl:flex-row xl:gap-20">
              {/* Sidebar */}
              <aside className="static w-[250px] xl:sticky xl:top-24">
                <div className="hidden flex-col gap-9 xl:flex xl:w-[250px]">
                  <h3 className="px-4 font-[Uxum] text-2xl font-[500] text-[#051A1E]">Discover</h3>
                  <nav aria-label="Workflow categories">
                    <a
                      href="#"
                      className="mb-4 flex cursor-pointer items-center gap-3 rounded-[5px] bg-[#F3F0EE] px-3 py-2.5 transition-all xl:rounded-lg xl:px-4 xl:py-3"
                    >
                      <h3 className="text-[18px] font-[400] whitespace-nowrap text-[#2C2D2D]">All Workflows</h3>
                    </a>
                    <button
                      onClick={() => setUseCasesExpanded(!useCasesExpanded)}
                      className="mb-4 flex w-full cursor-pointer items-center justify-between gap-3 rounded-[5px] px-3 py-2.5 transition-all hover:bg-[#F3F0EE] xl:rounded-lg xl:px-4 xl:py-3"
                    >
                      <h3 className="text-[18px] font-[400] whitespace-nowrap text-[#2C2D2D]">By Use cases</h3>
                      <svg className="h-[7px] w-[14px] transition-transform" width="15" height="8" viewBox="0 0 15 8" fill="none">
                        <path d="M6.79399 7.2437C7.18448 7.58543 7.81864 7.58543 8.20914 7.2437L14.2071 1.99473C14.5976 1.653 14.5976 1.09803 14.2071 0.756295C13.8166 0.414565 13.1825 0.414565 12.792 0.756295L7.5 5.38742L2.20802 0.759031C1.81753 0.417301 1.18336 0.417301 0.792871 0.759031C0.402377 1.10076 0.402377 1.65573 0.792871 1.99746L6.79086 7.24644L6.79399 7.2437Z" fill="#515151" />
                      </svg>
                    </button>
                    {useCasesExpanded && (
                      <div className="ml-4 space-y-0">
                        {SIDEBAR_CATEGORIES.slice(2).map((cat) => (
                          <a
                            key={cat.label}
                            href={cat.href}
                            className="mb-4 flex cursor-pointer items-center gap-3 rounded-[5px] px-3 py-2.5 transition-all hover:bg-[#F3F0EE] xl:rounded-lg xl:px-4 xl:py-3"
                          >
                            <h3 className="text-[18px] font-[400] whitespace-nowrap text-[#2C2D2D]">{cat.label}</h3>
                          </a>
                        ))}
                      </div>
                    )}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <div className="h-full flex-1 overflow-auto rounded-lg">
                <div className="mb-8 flex flex-wrap items-center justify-between xl:mb-[60px]">
                  <span className="font-[Uxum] text-2xl font-[500] text-[#051A1E] xl:text-[32px]">All workflows</span>
                  <div className="text-right text-sm text-gray-600">Showing 1-10 of 239 workflows</div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {WORKFLOWS.map((workflow) => (
                    <a
                      key={workflow.id}
                      href="#"
                      className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-black bg-[#F5F0EB] transition-shadow hover:shadow-lg"
                    >
                      <div className="h-[200px] w-full border-b-2 border-black bg-gray-100">
                        <img
                          alt={workflow.title}
                          src="/base_workflow_image.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-[30px] py-8">
                        <h3 className="mb-3 font-[Uxum] text-xl font-[500] text-[#051A1E]">{workflow.title}</h3>
                        <p className="mb-6 line-clamp-3 font-dm-sans text-sm font-[400] leading-tight text-[#474747]">
                          {workflow.description}
                        </p>
                        <div className="mt-auto flex flex-1 items-end">
                          <p className="inline-flex cursor-pointer items-center gap-2 text-[18px] font-[600] text-[#051A1E]">
                            <span className="text-base font-[600] leading-7 text-[#051A1E]">See how it works</span>
                            <ArrowRightIcon className="h-2.5 w-3 text-[#051A1E]" />
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden text-white" style={{ background: "linear-gradient(288.09deg, rgb(16, 16, 16) -1.92%, rgb(33, 33, 33) 100%)" }}>
        <div className="mx-auto max-w-[1700px] px-4 pt-12 pb-8 md:px-8 lg:px-16">
          <p className="text-sm text-[#F2F2EE]">© {new Date().getFullYear()} Unlogged, Inc.</p>
          <div className="mt-4 flex gap-6">
            <a href="#" className="text-sm text-[#F2F2EE] hover:underline">Privacy policy</a>
            <a href="#" className="text-sm text-[#F2F2EE] hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
