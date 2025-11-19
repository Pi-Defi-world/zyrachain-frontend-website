import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Shield, Wallet, Zap, Lock, Download } from "lucide-react"
import { getTranslations } from 'next-intl/server'
import Image from "next/image"
import zyrawalletPic from "@public/pic/zyrawallet-pic.png"
import zyrawallet from "@public/pic/zyrawallet.png"
import Link from "next/link"

export async function generateMetadata() {
  const t = await getTranslations('wallet')
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default function WalletPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                ZyraWallet
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Secure wallet for storing, managing, and transferring Zyra tokens and Pi assets seamlessly across the ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/coming-soon" className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Soon
                </Link>
                <Link href="/features" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={zyrawallet}
                alt="ZyraWallet"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your assets are protected with industry-leading security measures, including multi-signature wallets and hardware security modules.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Easy Management</h3>
              <p className="text-muted-foreground">
                Intuitive interface for managing all your digital assets. View balances, transaction history, and manage multiple wallets.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast Transfers</h3>
              <p className="text-muted-foreground">
                Send and receive tokens quickly on the Pi Network with minimal fees and instant confirmations.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Private Keys</h3>
              <p className="text-muted-foreground">
                Your keys, your crypto. Full control over your private keys with secure backup and recovery options.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Asset Support</h3>
              <p className="text-muted-foreground">
                Support for Zyra tokens, Pi coins, and other assets on the Pi Network blockchain.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">DEX Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly connect with ZyraDEX for trading and DeFi operations directly from your wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Bank-Level Security</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ZyraWallet implements multiple layers of security to protect your assets:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Encrypted private key storage with hardware security modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Biometric authentication support (fingerprint, face ID)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Multi-signature transaction support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Regular security audits and penetration testing</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image 
                src={zyrawalletPic}
                alt="ZyraWallet Security"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

