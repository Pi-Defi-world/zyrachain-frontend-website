"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"

export default function SupportPage() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "GCAO7I2ZBIEFXNYD3KZFA3UXLMDVCYUG6CTCYG56746LZB5MIUFIIBJ5"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Support Zyrachain</h1>
            <p className="text-xl text-foreground/70 text-balance">
              Help us build the future of decentralized finance on Pi Network
            </p>
          </div>
        </section>

        {/* Why We Need Support */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Your Support Matters</h2>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Zyrachain is building critical infrastructure for the Pi Network ecosystem. Your donations directly
                support:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Development & Innovation</h3>
                  <p className="text-sm">
                    Funding continuous development of ZyraWallet, ZyraDEX, $Zyra token, security audits, and new features that
                    enhance the ecosystem.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Security & Compliance</h3>
                  <p className="text-sm">
                    Ensuring the highest standards of security, regulatory compliance, and risk management to protect
                    users across all Zyrachain products.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Community Growth</h3>
                  <p className="text-sm">
                    Supporting education, partnerships, and community initiatives that drive adoption of Zyrachain products 
                    and awareness of the ecosystem.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Infrastructure & Operations</h3>
                  <p className="text-sm">
                    Maintaining reliable systems, monitoring, and operational excellence to ensure 24/7 availability of 
                    ZyraWallet, ZyraDEX, and all ecosystem services.
                  </p>
                </div>
              </div>

              <p className="pt-4">
                Every contribution, no matter the size, helps us accelerate development and bring decentralized finance 
                solutions to millions of users on Pi Network. Your support is a vote of confidence in our mission to build 
                the future of DeFi on Pi Network.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 md:py-24 bg-foreground/5">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Donate with Pi</h2>

            <div className="bg-background border-2 border-primary/20 rounded-lg p-8 md:p-12">
              <div className="mb-8">
                <p className="text-sm text-foreground/60 mb-2">Send Pi to our wallet address</p>
                <div className="bg-foreground/5 rounded-lg p-4 border border-foreground/10">
                  <p className="text-xs text-foreground/50 mb-3">Pi Wallet Address</p>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-sm md:text-base font-mono text-foreground break-all">
                      {walletAddress}
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      title="Copy wallet address"
                    >
                      {copied ? (
                        <Check size={20} className="text-green-500" />
                      ) : (
                        <Copy size={20} className="text-primary" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-900">
                  <strong>Important:</strong> Make sure you&apos;re sending Pi from your Pi Wallet. Double-check the wallet
                  address to ensure your donation reaches us safely.
                </p>
              </div>

              <div className="space-y-3 text-sm text-foreground/70">
                <p>
                  <strong>How to send:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open your Pi Wallet application</li>
                  <li>Select &quot;Send&quot; or &quot;Transfer&quot;</li>
                  <li>Paste the Pi wallet address above</li>
                  <li>Enter the amount of Pi you wish to donate</li>
                  <li>Confirm the transaction</li>
                  <li>Your donation will be received within minutes</li>
                </ol>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Thank You!</h3>
              <p className="text-foreground/70 mb-4">
                We&apos;re deeply grateful for your support. Every contribution helps us build a more stable and prosperous
                future for the Pi Network ecosystem.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
