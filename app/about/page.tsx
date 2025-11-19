import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Users, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              About Zyrachain
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We&apos;re building the future of decentralized finance on Pi Network. Zyrachain is the foundation chain of 
              the Zyra ecosystem, designed to power and connect all Zyra products including ZyraWallet, ZyraDEX, and $Zyra token.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To create a dynamic and interconnected environment where users, KOLs, and ecosystem partners actively 
                co-create value. Through structured experience programs, transparent rewards, and meaningful engagement, 
                Zyrachain aims to accelerate the adoption of decentralized products and services.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in the power of blockchain technology to democratize finance and provide financial services
                to everyone, everywhere on the Pi Network.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Zyrachain envisions a decentralized ecosystem where innovators, creators, and pioneers collaborate to 
                shape the future of Web3. Our goal is to empower individuals and communities globally, giving them the 
                tools, opportunities, and incentives to build, experience, and grow within a unified blockchain-powered network.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision Zyrachain becoming the leading DeFi ecosystem on Pi Network, powering wallets, exchanges, 
                and decentralized applications for millions of users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate to provide cutting-edge solutions that advance the blockchain ecosystem.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in complete transparency with real-time reserve tracking and public verification.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">
                We&apos;re committed to building with and for our community, listening to feedback and evolving together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zyrachain */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Why Choose Zyrachain?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Complete Ecosystem</h3>
                <p className="text-muted-foreground">
                  Zyrachain offers a full suite of DeFi products including ZyraWallet, ZyraDEX, and $Zyra token, all integrated seamlessly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Built for Pi Network</h3>
                <p className="text-muted-foreground">
                  Access to 55+ million engaged Pi Network users ready to adopt blockchain solutions and DeFi products.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Community-Driven</h3>
                <p className="text-muted-foreground">
                  The Provena Experience Points (PEP) system rewards community participation and engagement with real value.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Technology</h3>
                <p className="text-muted-foreground">
                  Fast, secure, and scalable infrastructure built on Pi Network blockchain for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
