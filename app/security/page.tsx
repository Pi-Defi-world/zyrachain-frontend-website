import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Shield, Lock, Eye, CheckCircle } from "lucide-react"

export default function Security() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Zyrachain Security & Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enterprise-grade security measures and compliance standards to protect your assets on ZyraWallet, ZyraDEX, 
              and the Zyrachain ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Security Measures</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Authentication</h3>
              <p className="text-muted-foreground mb-4">
                WebAuthn/FIDO2 passkeys provide biometric and PIN-based authentication without passwords.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Biometric authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>PIN-based security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>No password storage</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Encryption</h3>
              <p className="text-muted-foreground mb-4">
                Military-grade encryption protects your data at rest and in transit.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>AES-256 at rest</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>TLS 1.3 in transit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Client-side encryption</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Key Management</h3>
              <p className="text-muted-foreground mb-4">
                Hardware security modules and multi-signature transactions protect critical keys.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Hardware security modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Multi-signature transactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Key rotation policies</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                24/7 threat detection and regular security audits ensure continuous protection.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>24/7 threat detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Regular security audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Incident response team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Compliance Standards</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">KYC/AML</h3>
              <p className="text-muted-foreground">
                Comprehensive user verification procedures to comply with anti-money laundering regulations.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Licensing</h3>
              <p className="text-muted-foreground">
                Money transmitter compliance and regulatory licenses in key jurisdictions.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Audits</h3>
              <p className="text-muted-foreground">
                Regular financial and security audits by independent third-party firms.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Insurance</h3>
              <p className="text-muted-foreground">
                Cold wallet insurance and comprehensive coverage for digital assets.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Reserves</h3>
              <p className="text-muted-foreground">
                Public reserve reports and real-time verification of collateral backing.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Privacy</h3>
              <p className="text-muted-foreground">
                GDPR compliant data handling and user privacy protection policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">User Security Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-green-600">Do&apos;s</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Store your passphrase securely offline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Enable biometric authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Verify transaction amounts before confirming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Check Pi price before minting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Use secure networks for transactions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-red-600">Don&apos;ts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Share your passphrase with anyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Screenshot sensitive data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Use on unsecured public networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Send to unverified addresses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Click suspicious links or emails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
