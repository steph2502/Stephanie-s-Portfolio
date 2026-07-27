"use client";

import { motion } from "framer-motion";
import { Mail, Phone, FileDown, MapPin, Clock } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const infoLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  { label: "GitHub", value: "View profile", href: siteConfig.github, icon: GithubIcon },
  { label: "LinkedIn", value: "View profile", href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: "Resume", value: "Download PDF", href: siteConfig.resumeUrl, icon: FileDown },
];

export function Contact() {
  return (
    <section id="contact" className="section-y">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something amazing together
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">
            I&apos;m always interested in new backend and AI opportunities, collaborations
            and interesting problems to solve.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="rounded-[20px] border border-border bg-surface p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                {siteConfig.location}
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                {siteConfig.availability}
              </div>
            </div>

            {infoLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                download={link.label === "Resume" ? true : undefined}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <link.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{link.label}</span>
                  <span className="block text-sm font-medium text-foreground">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-[20px] border border-border bg-surface p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">Send me a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Have a project in mind? Fill out the form and I&apos;ll get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
