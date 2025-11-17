"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useLocale } from 'next-intl'
import { locales, localeNames } from '@/i18n/config'

export function LanguageSelector() {
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-border hover:bg-muted transition-all text-foreground hover:border-primary flex items-center gap-2"
        aria-label="Select language"
        title="Select language"
      >
        <Globe size={20} className="text-foreground" />
        {/* <span className="text-sm hidden sm:inline">{localeNames[currentLocale as keyof typeof localeNames]}</span> */}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  setIsOpen(false)
                  // Language switching will be handled by routing in the future
                }}
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-muted transition-colors ${
                  locale === currentLocale ? 'bg-muted font-semibold' : ''
                }`}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

