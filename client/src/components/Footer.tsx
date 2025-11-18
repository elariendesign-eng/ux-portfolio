import { Link } from "wouter";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-footer-logo">ARB</h3>
            <p className="text-sm text-muted-foreground">
              UX Designer, Strategist, and Story-Driven Creator crafting meaningful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/case-studies">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-case-studies">
                  Case Studies
                </a>
              </Link>
              <Link href="/about">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Me
                </a>
              </Link>
              <Link href="/talents">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-talents">
                  Additional Talents
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@arb.com"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ARB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
