import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Coins, TrendingUp, Users, Zap, Lock, BarChart3 } from "lucide-react"
import Image from "next/image"
import zyracoin from "@public/pic/zyracoin.png"
import Link from "next/link"

export default function TokenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                $Zyra Token
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The native token of Zyrachain — powering transactions, staking, governance, and ecosystem utilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dex" className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold">
                  Trade on ZyraDEX
                </Link>
                <Link href="/whitepaper" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                  Read Whitepaper
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={zyracoin}
                alt="$Zyra Token"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Tokenomics</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Liquidity Pool</span>
                  <span className="text-orange-400 font-bold">30%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Team & Advisors</span>
                  <span className="text-orange-400 font-bold">15%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Marketing & KOL</span>
                  <span className="text-orange-400 font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Angel Investors</span>
                  <span className="text-orange-400 font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Community Airdrop</span>
                  <span className="text-orange-400 font-bold">5%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground font-medium">Treasury & Reserves</span>
                  <span className="text-orange-400 font-bold">30%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Coins className="text-orange-400" size={24} />
                    <span className="text-foreground font-medium">Total Supply</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-400">1,000,000,000 $Zyra</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="text-orange-400" size={24} />
                    <span className="text-foreground font-medium">Initial Market Cap</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-400">TBD</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="text-orange-400" size={24} />
                    <span className="text-foreground font-medium">Blockchain</span>
                  </div>
                  <p className="text-xl font-bold text-orange-400">Pi Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Token Utility</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transaction Fees</h3>
              <p className="text-muted-foreground">
                Pay for transactions on the Zyrachain network using $Zyra tokens with discounted rates for token holders.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Staking Rewards</h3>
              <p className="text-muted-foreground">
                Stake your $Zyra tokens to earn rewards and help secure the Zyrachain network.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Governance</h3>
              <p className="text-muted-foreground">
                Participate in governance decisions and vote on proposals that shape the future of Zyrachain.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">DeFi Integration</h3>
              <p className="text-muted-foreground">
                Use $Zyra tokens in DeFi protocols, liquidity pools, and yield farming on ZyraDEX.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <Coins className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ecosystem Access</h3>
              <p className="text-muted-foreground">
                Unlock premium features, early access to new products, and exclusive benefits across the Zyra ecosystem.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-orange-400/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-orange-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Rewards & Incentives</h3>
              <p className="text-muted-foreground">
                Earn $Zyra tokens through the Provena Experience Points (PEP) system and community participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

