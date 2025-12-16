import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Wallet, TrendingUp, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">The Zyrachain Ecosystem</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A complete DeFi ecosystem built on Pi Network, designed for security, speed, and seamless
              blockchain interactions.
            </p>
          </div>

          {/* Product Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
              <Wallet className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">ZyraWallet</h2>
              <p className="text-muted-foreground mb-6">
                Secure wallet for storing, managing, and transferring Zyra tokens and Pi assets seamlessly across the ecosystem.
              </p>
              <Link href="/wallet" className="text-primary hover:text-orange-300 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">ZyraDEX</h2>
              <p className="text-muted-foreground mb-6">
                Decentralized exchange built for speed, liquidity, and transparency — enabling peer-to-peer trading on Pi Network.
              </p>
              <Link href="/dex" className="text-primary hover:text-orange-300 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">$Zyra Token</h2>
              <p className="text-muted-foreground mb-6">
                The native token of Zyrachain — powering transactions, staking, governance, and ecosystem utilities.
              </p>
              <Link href="/token" className="text-primary hover:text-orange-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Zyrachain?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Built for Pi Network</h3>
                <p className="text-muted-foreground">
                  Native integration with Pi Network blockchain for optimal performance and access to 55+ million users.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Transactions settle in seconds with minimal fees on the Pi Network.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Wallet className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Secure</h3>
                <p className="text-muted-foreground">
                  Industry-leading security practices with regular audits and continuous monitoring.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Community-Driven</h3>
                <p className="text-muted-foreground">
                  The Provena Experience Points (PEP) system rewards community participation with real value.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our products and join the Zyrachain ecosystem on Pi Network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wallet" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold">
                Get ZyraWallet
              </Link>
              <Link href="/dex" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                Trade on ZyraDEX
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
