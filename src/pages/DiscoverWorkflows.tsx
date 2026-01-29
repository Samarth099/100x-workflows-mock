import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const NAV_LINKS = [
  { label: "Discover", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
]

type WorkflowCategory = "Productivity" | "Sales" | "Support" | "DevOps"
type TabId = "All" | "Popular" | WorkflowCategory

const CATEGORY_TABS: { id: TabId; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Popular", label: "Popular" },
  { id: "Productivity", label: "Productivity" },
  { id: "Sales", label: "Sales" },
  { id: "Support", label: "Support" },
  { id: "DevOps", label: "DevOps" },
]

function formatRuns(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k runs`
  return `${count} runs`
}

const WORKFLOWS: {
  id: string
  title: string
  description: string
  category: WorkflowCategory
  runsCount: number
}[] = [
  {
    id: "1",
    title: "Lead enrichment from CRM",
    description:
      "Automatically enrich new leads with company data and contact info when they’re added to your CRM.",
    category: "Sales",
    runsCount: 12400,
  },
  {
    id: "2",
    title: "Slack to ticket triage",
    description:
      "Create support tickets from Slack messages and route them by priority and team.",
    category: "Support",
    runsCount: 8200,
  },
  {
    id: "3",
    title: "Daily standup reminder",
    description:
      "Send a daily standup prompt to your team and compile responses into a thread.",
    category: "Productivity",
    runsCount: 5100,
  },
  {
    id: "4",
    title: "Deploy on merge",
    description:
      "Trigger a staging deploy when a PR is merged to main, then notify the channel.",
    category: "DevOps",
    runsCount: 3900,
  },
  {
    id: "5",
    title: "Invoice to accounting",
    description:
      "When an invoice is approved, sync it to your accounting software and archive the PDF.",
    category: "Productivity",
    runsCount: 2700,
  },
  {
    id: "6",
    title: "New signup onboarding",
    description:
      "Send a welcome sequence and add the user to the right segments based on signup source.",
    category: "Sales",
    runsCount: 18100,
  },
]

export function DiscoverWorkflows() {
  const [selectedTab, setSelectedTab] = useState<TabId>("All")

  const filteredWorkflows = useMemo(() => {
    if (selectedTab === "All") {
      return [...WORKFLOWS].sort((a, b) => b.runsCount - a.runsCount)
    }
    if (selectedTab === "Popular") {
      return [...WORKFLOWS].sort((a, b) => b.runsCount - a.runsCount)
    }
    return WORKFLOWS.filter((w) => w.category === selectedTab)
  }, [selectedTab])

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            100x<span className="text-primary">.bot</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Sign in
            </Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Hero */}
        <section className="mb-12 text-center lg:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Discover Workflows
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Record once and Automate forever. Browse ready-made workflows and
            start automating in minutes.
          </p>

          {/* Search */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search workflows..."
              className="h-11 pl-9 pr-4"
            />
          </div>
        </section>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORY_TABS.map((tab) => (
            <Button
              key={tab.id}
              variant={selectedTab === tab.id ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Workflow grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkflows.map((workflow) => (
            <Card
              key={workflow.id}
              className="flex flex-col border-border/60 bg-card/50 transition-colors hover:border-primary/30 hover:bg-card/80"
            >
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {workflow.category}
                  </Badge>
                </div>
                <CardTitle className="text-base">{workflow.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <p className="text-xs text-muted-foreground">
                  {formatRuns(workflow.runsCount)}
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Use workflow
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 100x.bot. Record once, automate
              forever.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
