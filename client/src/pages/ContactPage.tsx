import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-heading">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Looking for UX strategy or creative collaboration? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Other Ways to Reach Me</h2>
              <div className="space-y-4">
                <a
                  href="mailto:hello@arb.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
                  data-testid="link-email-contact"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">hello@arb.com</p>
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
                  data-testid="link-github-contact"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                    <Github className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Currently Based</h3>
                  <p className="text-muted-foreground">
                    Open to remote opportunities and international projects.
                    Available for collaborations worldwide.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-serif text-xl font-bold mb-4">What I'm Looking For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>UX strategy and product design opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Creative direction and content collaborations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Speaking engagements about UX and digital transformation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Editorial and fashion photography projects</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
