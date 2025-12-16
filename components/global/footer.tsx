"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import zLogoCustom from "@public/pic/z-logo-custom.png"
import tl from "@public/pic/uil-telegram.png"
import xl from "@public/pic/uil-tumblr-square.png"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src={zLogoCustom}
                alt="Zyrachain" 
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm">{t('description')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/wallet" className="hover:text-background transition-colors">
                  ZyraWallet
                </Link>
              </li>
              <li>
                <Link href="/dex" className="hover:text-background transition-colors">
                  ZyraDEX
                </Link>
              </li>
              <li>
                <Link href="/token" className="hover:text-background transition-colors">
                  $Zyra Token
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-background transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-background transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-background transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/legal/privacy" className="hover:text-background transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-background transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/disclosures" className="hover:text-background transition-colors">
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/70">{t('copyright', { year: currentYear })}</p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/zyrachains" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label={t('social.telegram')}>
                <Image src={tl} alt="Telegram" width={20} height={20} className="w-5 h-5" />
              </a>
              <a href="https://x.com/zyradex" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label={t('social.twitter')}>
                <Image src={xl} alt="Twitter" width={20} height={20} className="w-5 h-5" />
              </a>
              {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label={t('social.linkedin')}>
                <Image src={ll} alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              </a> */}
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label={t('social.github')}>
                <Image src={gl} alt="GitHub" width={20} height={20} className="w-5 h-5" />
              </a> */}
              {/* <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label={t('social.medium')}>
                <Image src={ml} alt="Medium" width={20} height={20} className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
