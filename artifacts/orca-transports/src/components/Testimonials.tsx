import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Orca has completely transformed our national distribution. Their precision and communication are unmatched in this industry. When they say a truck will be there at 04:00, it's there at 03:55.",
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
    <section className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background p-10 border border-border relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-8" size={64} />
              <p className="text-xl text-foreground mb-8 relative z-10 font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-white text-lg tracking-wide">{t.author}</div>
                <div className="text-primary text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
