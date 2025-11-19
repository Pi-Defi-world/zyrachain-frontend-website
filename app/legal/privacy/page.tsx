import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Zyrachain (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                and use our services including ZyraWallet, ZyraDEX, and other Zyrachain products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Information you provide directly (name, email, wallet address)</li>
                <li>Information collected automatically (IP address, browser type, pages visited)</li>
                <li>Information from third-party sources (analytics providers, payment processors)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at contact@zyrachain.com
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
