"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslations } from 'next-intl'
import logo1 from "@public/logo/logo-named.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('common')

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src={logo1}
            alt="Zyrachain" 
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/wallet" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('wallet')}
          </Link>
          <Link href="/dex" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('dex')}
          </Link>
          <Link href="/token" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('token')}
          </Link>
          <Link href="/features" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('features')}
          </Link>
          <Link href="/roadmap" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('roadmap')}
          </Link>
          <Link href="/whitepaper" className="text-foreground hover:text-orange-400 transition-colors text-sm font-medium">
            {t('whitepaper')}
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          <Link href="/coming-soon" className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity whitespace-nowrap text-sm font-semibold">
            {t('getStarted')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col p-4">
              {/* Main Navigation */}
              <Link href="/" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('home')}
              </Link>
              <Link href="/wallet" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('wallet')}
              </Link>
              <Link href="/dex" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('dex')}
              </Link>
              <Link href="/token" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('token')}
              </Link>
              <Link href="/features" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('features')}
              </Link>
              <Link href="/roadmap" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('roadmap')}
              </Link>
              <Link href="/whitepaper" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('whitepaper')}
              </Link>
              <Link href="/security" className="text-foreground hover:text-orange-400 px-4 py-2" onClick={() => setIsOpen(false)}>
                {t('security')}
              </Link>
              
              {/* Company */}
              <div className="mt-2 pt-2 border-t border-border">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Company</p>
                <Link href="/about" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('about')}
                </Link>
                <Link href="/contact" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('contact')}
                </Link>
                <Link href="/support" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  {t('support')}
                </Link>
              </div>

              {/* Legal */}
              <div className="mt-2 pt-2 border-t border-border">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Legal</p>
                <Link href="/legal/privacy" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  Terms of Service
                </Link>
                <Link href="/legal/disclosures" className="text-foreground hover:text-orange-400 px-4 py-2 block" onClick={() => setIsOpen(false)}>
                  Disclosures
                </Link>
              </div>

              {/* CTA */}
              <div className="px-4 py-4 mt-4">
                <Link href="/coming-soon" className="w-full block px-6 py-2 bg-orange-400 text-white rounded-lg text-center font-semibold">
                  {t('getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
