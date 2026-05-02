import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">INITIATE <br/>TRANSPORT</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              Ready to upgrade your logistics operations? Contact our dispatch team 24/7 for immediate quotes and capacity planning.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email Dispatch</div>
                  <a href="mailto:info@orcatransports.com" className="text-foreground font-medium hover:text-primary transition-colors">info@orcatransports.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Operations Control</div>
                  <a href="tel:08000000000" className="text-foreground font-medium hover:text-primary transition-colors">0800 123 4567</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Headquarters</div>
                  <span className="text-foreground font-medium">Logistics Park, Unit 4, Manchester M1 1AA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">REQUEST A QUOTE</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Company Name</label>
                  <Input placeholder="Enter company" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</label>
                  <Input type="email" placeholder="Email address" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Collection City</label>
                  <Input placeholder="e.g. London" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Destination City</label>
                  <Input placeholder="e.g. Glasgow" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Freight Details (Weight/Type)</label>
                <Textarea placeholder="Describe the cargo..." className="bg-background border-border rounded-none min-h-[120px] focus-visible:ring-primary" />
              </div>

              <Button type="submit" className="w-full h-14 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg tracking-wider">
                SUBMIT REQUIREMENT
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
