import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { FileText, Download, BookOpen } from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-orange-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-orange-400" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zyrachain Whitepaper
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn about Zyrachain&apos;s vision, technology, and roadmap for building the future of decentralized finance on Pi Network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/coming-soon"
                className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download PDF
              </Link>
              <Link 
                href="/roadmap"
                className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold"
              >
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Executive Summary */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-orange-400" size={24} />
                <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Zyrachain is a next-generation decentralized ecosystem built to unify creators, users, developers, and innovators 
                under one collaborative framework. Zyrachain serves as the backbone for multiple 
                products including ZyraDEX, ZyraWallet, and $Zyra token, offering a wide range of blockchain 
                experiences from finance to social interaction.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vision & Mission</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Zyrachain envisions a decentralized ecosystem where innovators, creators, and pioneers collaborate to shape 
                    the future of Web3. Our goal is to empower individuals and communities globally, giving them the tools, 
                    opportunities, and incentives to build, experience, and grow within a unified blockchain-powered network.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to create a dynamic and interconnected environment where users, KOLs, and ecosystem partners 
                    actively co-create value. Through structured experience programs, transparent rewards, and meaningful engagement, 
                    Zyrachain aims to accelerate the adoption of decentralized products and services while fostering user-generated 
                    growth through community-driven participation.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Technology & Infrastructure</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Built on Pi Network</h3>
                  <p className="text-muted-foreground">
                    Zyrachain leverages the Pi Network blockchain, providing fast, secure, and scalable infrastructure for 
                    decentralized applications. The Pi Network&apos;s growing ecosystem of 55+ million users provides a massive 
                    addressable market for Zyrachain products.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Provena Experience Points (PEP)</h3>
                  <p className="text-muted-foreground">
                    At its core, Zyrachain introduces the Provena Experience Points (PEP) system, allowing participants to earn 
                    real rewards such as tokens, badges, NFTs, and early access by completing tasks, promoting projects, and 
                    contributing to the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Ecosystem Products */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ecosystem Products</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ZyraWallet</h3>
                  <p className="text-muted-foreground text-sm">
                    Secure wallet for storing, managing, and transferring Zyra tokens and Pi assets seamlessly across the ecosystem.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ZyraDEX</h3>
                  <p className="text-muted-foreground text-sm">
                    Decentralized exchange built for speed, liquidity, and transparency, enabling peer-to-peer trading on Pi Network.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">$Zyra Token</h3>
                  <p className="text-muted-foreground text-sm">
                    The native token of Zyrachain, powering transactions, staking, governance, and ecosystem utilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Future Products</h3>
                  <p className="text-muted-foreground text-sm">
                    Additional DeFi products and features are in development to expand the Zyrachain ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Tokenomics */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tokenomics</h2>
              <p className="text-muted-foreground mb-4">
                The $Zyra token serves as the utility and governance token for the Zyrachain ecosystem. Key details:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Total Supply: 1,000,000,000 $Zyra</li>
                <li>Blockchain: Pi Network</li>
                <li>Use Cases: Transaction fees, staking rewards, governance, DeFi integration</li>
                <li>Distribution: Community-focused allocation with fair launch principles</li>
              </ul>
            </div>

            {/* Roadmap */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Roadmap</h2>
              <p className="text-muted-foreground mb-4">
                Zyrachain is committed to continuous development and expansion. Our roadmap includes:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Q4 2025: Beta launch of core products on Pi Network testnet</li>
                <li>Q1 2026: Mainnet launch and merchant partnerships</li>
                <li>Q2 2026: DeFi integration and cross-chain bridge launch</li>
                <li>Q3 2026: Institutional services and global expansion</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/roadmap"
                  className="text-orange-400 hover:text-orange-300 font-semibold"
                >
                  View Full Roadmap →
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-orange-400/10 to-orange-600/10 border border-orange-400/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Join the Ecosystem?</h2>
              <p className="text-muted-foreground mb-6">
                Start exploring Zyrachain products and become part of the decentralized future on Pi Network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/wallet"
                  className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-opacity font-semibold"
                >
                  Get ZyraWallet
                </Link>
                <Link 
                  href="/dex"
                  className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  Trade on ZyraDEX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

