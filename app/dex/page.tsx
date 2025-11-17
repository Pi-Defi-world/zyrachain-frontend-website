import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { TrendingUp, Zap, Shield, BarChart3, ArrowLeftRight, Coins } from "lucide-react"
import Image from "next/image"
import zyradexPic from "@public/pic/zyradex-pic.png"
import zyradex from "@public/pic/zyradex.png"
import Link from "next/link"

export default function DexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                ZyraDEX
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Decentralized exchange built for speed, liquidity, and transparency — enabling peer-to-peer trading on Pi Network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/coming-soon" className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold">
                  Start Trading
                </Link>
                <Link href="/features" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={zyradex}
                alt="ZyraDEX"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Why Choose ZyraDEX?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Trade with minimal latency and high throughput. Transactions settle in seconds on the Pi Network blockchain.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Deep Liquidity</h3>
              <p className="text-muted-foreground">
                Access to deep liquidity pools for optimal trading. Competitive prices and minimal slippage for all trades.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fully Transparent</h3>
              <p className="text-muted-foreground">
                All transactions are on-chain and verifiable. No hidden fees, no intermediaries, complete transparency.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowLeftRight className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Low Fees</h3>
              <p className="text-muted-foreground">
                Competitive trading fees with additional discounts for $Zyra token holders. Keep more of your profits.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Coins className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Asset Trading</h3>
              <p className="text-muted-foreground">
                Trade $Zyra, Pi coins, and other tokens on the Pi Network. Wide selection of trading pairs available.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Advanced Charts</h3>
              <p className="text-muted-foreground">
                Professional trading interface with real-time charts, order books, and market depth analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">How It Works</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-400/10">
                    <span className="text-orange-400 font-bold text-xl">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Connect Your Wallet</h3>
                  <p className="text-muted-foreground">
                    Connect your ZyraWallet or compatible wallet to start trading. Your funds stay in your control.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-400/10">
                    <span className="text-orange-400 font-bold text-xl">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Select Trading Pair</h3>
                  <p className="text-muted-foreground">
                    Choose from a wide range of trading pairs. Swap between $Zyra, Pi coins, and other tokens.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-400/10">
                    <span className="text-orange-400 font-bold text-xl">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Execute Trade</h3>
                  <p className="text-muted-foreground">
                    Place your order and execute trades instantly. All transactions are processed on-chain for transparency.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-400/10">
                    <span className="text-orange-400 font-bold text-xl">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Receive Tokens</h3>
                  <p className="text-muted-foreground">
                    Your tokens are instantly deposited to your wallet. No waiting, no delays.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={zyradexPic}
                alt="ZyraDEX Trading"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liquidity Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Provide Liquidity & Earn</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become a liquidity provider and earn trading fees. Help build the ZyraDEX ecosystem while earning passive income.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <Coins className="text-orange-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-foreground mb-2">Add Liquidity</h3>
              <p className="text-muted-foreground text-sm">
                Deposit tokens into liquidity pools to enable trading
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <TrendingUp className="text-orange-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-foreground mb-2">Earn Fees</h3>
              <p className="text-muted-foreground text-sm">
                Receive a share of trading fees from all transactions
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <BarChart3 className="text-orange-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-foreground mb-2">Track Performance</h3>
              <p className="text-muted-foreground text-sm">
                Monitor your liquidity position and earnings in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

