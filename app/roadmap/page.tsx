import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Circle } from "lucide-react"

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Zyrachain Roadmap
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our vision for the future of Zyrachain, ZyraWallet, ZyraDEX, and the $Zyra token ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Q4 2025 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Circle className="text-primary-foreground" size={24} />
                  </div>
                  <div className="w-1 h-24 bg-primary/30 mt-4"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Q4 2025</h3>
                  <p className="text-muted-foreground mb-4">Beta Launch & Core Features</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      ZyraWallet beta launch on Pi Network testnet
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      ZyraDEX core trading features
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      $Zyra token launch and distribution
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Security audit completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q1 2026 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center shrink-0">
                    <Circle className="text-primary/50" size={24} />
                  </div>
                  <div className="w-1 h-24 bg-primary/30 mt-4"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Q1 2026</h3>
                  <p className="text-muted-foreground mb-4">Mainnet Launch & Partnerships</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Mainnet launch on Pi Network
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Merchant partnerships
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Mobile app launch
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q2 2026 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center shrink-0">
                    <Circle className="text-primary/50" size={24} />
                  </div>
                  <div className="w-1 h-24 bg-primary/30 mt-4"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Q2 2026</h3>
                  <p className="text-muted-foreground mb-4">DeFi Integration & Expansion</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      DeFi protocol integrations
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Cross-chain bridge launch
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Governance token introduction
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q3 2026 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center shrink-0">
                    <Circle className="text-primary/50" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Q3 2026</h3>
                  <p className="text-muted-foreground mb-4">Institutional Services & Global Expansion</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Institutional services launch
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Global expansion to new markets
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Advanced features and tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
