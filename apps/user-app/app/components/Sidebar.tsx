"use client"

import Link from "next/link"
import { ArrowRightLeft, Clock, Home, LucideIcon, Percent, Search } from "lucide-react"

import { cn } from "@repo/ui/lib/utils"
import { buttonVariants } from "@repo/ui/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip"

interface NavProps {
  isCollapsed: boolean
}
// #020817
// #0f172a
// #1e293b
const links=[
  {
    title: "Home",
    label: "128",
    icon: Home,
    variant: "default",
  },
  {
    title: "Explore",
    label: "9",
    icon: Search,
    variant: "default",
  },
  {
    title: "Rewards",
    label: "",
    icon: Percent,
    variant: "default",
  },
  {
    title: "Transfer",
    label: "23",
    icon: ArrowRightLeft,
    variant: "default",
  },
  {
    title: "Transaction",
    label: "",
    icon: Clock,
    variant: "default",
  },
];
export function Sidebar({isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group w-[10vw] h-[100vh] flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={"/dashboard/"+link.title.toLocaleLowerCase()}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}  
              href={"/dashboard/"+link.title.toLocaleLowerCase()}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}