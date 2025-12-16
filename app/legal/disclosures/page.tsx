import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { AlertCircle } from "lucide-react"

export default function DisclosuresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">Risk Disclosures</h1>
          <p className="text-muted-foreground mb-12">Important information about risks associated with Zyrachain products and services</p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-12 flex gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
              <p className="text-muted-foreground">
                Cryptocurrency and blockchain investments carry significant risks. Please read all disclosures carefully
                before using ZyraWallet, ZyraDEX, $Zyra token, or any Zyrachain services.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Market Risks</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Volatility Risk</h3>
                  <p className="text-muted-foreground">
                    Cryptocurrency prices, including $Zyra token, are highly volatile and can fluctuate significantly. 
                    The value of your holdings may decrease substantially.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Liquidity Risk</h3>
                  <p className="text-muted-foreground">
                    There is no guarantee of sufficient liquidity to buy or sell tokens on ZyraDEX at any given time. Market
                    conditions may affect your ability to trade.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Exchange Risk</h3>
                  <p className="text-muted-foreground">
                    Trading on ZyraDEX involves risks including potential technical issues, market manipulation, and smart 
                    contract vulnerabilities that could impact your trades.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Technology Risks</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Smart Contract Risk</h3>
                  <p className="text-muted-foreground">
                    While our smart contracts have been audited, there is always a risk of undiscovered vulnerabilities
                    or exploits that could result in loss of funds.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Blockchain Risk</h3>
                  <p className="text-muted-foreground">
                    The Pi Network blockchain may experience technical issues, network congestion, or other problems
                    that could affect Zyrachain transactions and services.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Wallet Risk</h3>
                  <p className="text-muted-foreground">
                    Loss of private keys or wallet access could result in permanent loss of your assets stored in ZyraWallet. 
                    We cannot recover lost funds or private keys.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Regulatory Risks</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Regulatory Changes</h3>
                  <p className="text-muted-foreground">
                    Changes in cryptocurrency regulations could impact the availability or use of Zyrachain products in certain
                    jurisdictions.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Legal Uncertainty</h3>
                  <p className="text-muted-foreground">
                    The legal status of cryptocurrencies and DeFi platforms remains uncertain in many jurisdictions and may
                    change, potentially affecting Zyrachain operations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">No Investment Advice</h2>
              <p className="text-muted-foreground mb-4">
                This website and our services do not constitute investment advice, financial advice, or a recommendation
                to buy, sell, or trade any tokens. We strongly recommend consulting with a qualified financial advisor before making
                any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Zyrachain shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including loss of profits, data, or use, arising from your
                use of Zyrachain products or services.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
