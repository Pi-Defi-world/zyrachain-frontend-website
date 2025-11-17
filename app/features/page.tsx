import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Lock, Zap, TrendingUp, Users, BarChart3, Shield } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Lock,
      title: "Secure & Transparent",
      description:
        "Multi-signature wallets, regular audits, and full on-chain transparency ensure your assets are always protected and verifiable.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Transactions settle in seconds with minimal fees. No waiting, no delays, just instant value transfer.",
    },
    {
      icon: TrendingUp,
      title: "Token Utility",
      description:
        "$Zyra token powers the entire ecosystem with staking rewards, governance rights, and access to premium features.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built for the Pi Network community with governance participation and community-focused development.",
    },
    {
      icon: BarChart3,
      title: "DeFi Ready",
      description: "Seamlessly integrate with DeFi protocols, lending platforms, and decentralized exchanges.",
    },
    {
      icon: Shield,
      title: "Compliance First",
      description: "Designed with regulatory compliance in mind, supporting institutional adoption and mainstream use.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Powerful Features for the Zyrachain Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Zyrachain combines cutting-edge blockchain technology with user-friendly design to deliver the DeFi experience 
              you deserve on Pi Network.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Detailed Features */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Security</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Your security is our priority. Zyrachain implements industry-leading security practices including
                  regular third-party audits, and continuous monitoring.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Secure wallet protection for ZyraWallet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Regular security audits by leading firms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">24/7 monitoring and threat detection</span>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Insurance coverage for user funds</span>
                  </li> */}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 min-h-80 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/30" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 min-h-80 flex items-center justify-center order-2 md:order-1">
                <Zap className="w-32 h-32 text-accent/30" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Lightning-Fast Transactions</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Experience the speed of blockchain without the wait. Zyrachain transactions on Pi Network settle in seconds, 
                  not hours or days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Sub-second transaction confirmation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Minimal transaction fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">High throughput capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">Scalable infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
