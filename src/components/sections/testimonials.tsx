import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-y overflow-hidden">
      <div className="container-app">
        <SectionHeading
          eyebrow="What People Say"
          title="Feedback from people I've worked with"
          align="center"
          className="mx-auto"
        />
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

        <div className="animate-marquee flex w-max gap-6 px-6">
          {loop.map((testimonial, i) => (
            <figure
              key={`${testimonial.name}-${i}`}
              className="flex w-[320px] flex-shrink-0 flex-col rounded-[20px] border border-border bg-surface p-6 sm:w-[380px]"
            >
              <Quote className="h-5 w-5 text-accent/50" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.position} &middot; {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
