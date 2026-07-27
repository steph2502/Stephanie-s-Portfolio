"use client";

import { ArrowUp, Mail } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socials = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-app flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          Stephanie<span className="text-accent">.</span>
        </a>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
