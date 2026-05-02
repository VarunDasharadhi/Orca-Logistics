import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Orca has completely transformed our national distribution. Their precision and communication are unmatched. When they say a truck will be there at 04:00, it's there at 03:55.",
    author: "Sarah Jenkins",
    role: "Logistics Director, Apex Manufacturing"
  },
  {
    quote: "We handle high-value, time-critical electronics. The transparency Orca provides through their tracking gives us and our clients total peace of mind.",
    author: "Marcus Thorne",
    role: "Operations Manager, TechFlow"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm font-sans">Client Feedback</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground tracking-widest">WHAT CLIENTS SAY</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-10 border border-border relative shadow-sm hover:shadow-md transition-shadow rounded-sm"
            >
              <Quote className="text-primary/20 absolute top-6 right-8" size={60} />
              <p className="text-lg text-foreground mb-8 relative z-10 leading-relaxed font-sans italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-heading text-foreground text-xl tracking-widest">{t.author}</div>
                <div className="text-primary text-sm font-sans mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
