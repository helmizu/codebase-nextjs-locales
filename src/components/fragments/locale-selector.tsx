"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl"
import { Link, routing, usePathname } from "@/i18n/routing"

export function LocaleSelector() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <span className="sr-only">Locale</span>
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20">
        {routing.locales.map((l) => (
          <Link key={l} href={pathname} locale={l}>
            <DropdownMenuCheckboxItem
              checked={l === locale}
              key={l}
              onSelect={() => {
                toast({
                  description: `Switched to ${l.toUpperCase()}`,
                })
              }}
              className="uppercase"
            >
              {l}
            </DropdownMenuCheckboxItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
