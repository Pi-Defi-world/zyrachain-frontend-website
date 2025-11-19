import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Have questions about Zyrachain, ZyraWallet, ZyraDEX, or $Zyra token? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">contact@zyrachain.com</p>
              <p className="text-sm text-muted-foreground mt-2">We&apos;ll get back to you within 24 hours</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+234-701-067-6567</p>
              <p className="text-sm text-muted-foreground mt-2">Monday - Friday, 9am - 5pm EST</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground">Remote First</p>
              <p className="text-sm text-muted-foreground mt-2">Serving customers worldwide</p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Send Message
              </button>
            </form>
          </div> */}

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">What is the best way to contact support?</h3>
                <p className="text-muted-foreground">
                  You can reach our support team via email at zyrachains@gmail.com.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does it take to get a response?</h3>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you have a community forum?</h3>
                <p className="text-muted-foreground">
                  Yes! Join our Discord community to connect with other users and get support from the community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
