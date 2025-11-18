import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Calendar, Globe2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-page-heading">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for a UX designer who combines strategic thinking with creative problem-solving?
            I'd love to hear about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-8">
              <h2 className="font-serif text-2xl font-semibold mb-2">Send a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and I'll get back to you within 24 hours
              </p>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Other Ways to Reach Me</h2>
              <div className="space-y-4">
                <a
                  href="mailto:angela@divinealigndesign.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
                  data-testid="link-email-contact"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">angela@divinealigndesign.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
                  data-testid="link-linkedin-contact"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
                  data-testid="link-calendar-contact"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-chart-3/10">
                    <Calendar className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold">Schedule a Call</p>
                    <p className="text-sm text-muted-foreground">Book a consultation</p>
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="font-serif text-xl font-semibold mb-4">What I'm Looking For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Full-time UX design and strategy opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Freelance UX consulting projects (Divine Align Design)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Speaking engagements about UX, research, and digital transformation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Creative collaborations and partnerships</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Globe2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location & Availability</h3>
                  <p className="text-muted-foreground text-sm">
                    Open to remote opportunities and international projects. Available for on-site
                    collaboration and travel as needed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Divine Align Design</h2>
          <p className="text-lg text-muted-foreground italic mb-8">
            Where logic meets imagination
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Available for UX consulting: Audits · Interface Redesigns · Product Strategy · Brand Consulting
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
