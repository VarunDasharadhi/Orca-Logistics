import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/6 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-primary"></div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm font-sans">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 tracking-widest leading-none">
              INITIATE
              <br />
              TRANSPORT
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed font-sans">
              Ready to upgrade your logistics operations? Contact our dispatch team 24/7 for immediate quotes and capacity planning.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary rounded-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-sans">Email Dispatch</div>
                  <a href="mailto:info@orcatransports.com" className="text-foreground font-medium hover:text-primary transition-colors font-sans">
                    info@orcatransports.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary rounded-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-sans">Operations Control</div>
                  <a href="tel:08001234567" className="text-foreground font-medium hover:text-primary transition-colors font-sans">
                    0800 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary rounded-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-sans">Headquarters</div>
                  <span className="text-foreground font-medium font-sans">Logistics Park, Unit 4, Manchester M1 1AA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 shadow-lg rounded-sm"
          >
            <h3 className="text-2xl font-heading text-foreground mb-6 tracking-widest">REQUEST A QUOTE</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans">Company Name</label>
                  <Input placeholder="Enter company" className="bg-background border-border h-12 focus-visible:ring-primary rounded-sm" data-testid="input-company-name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans">Email</label>
                  <Input type="email" placeholder="Email address" className="bg-background border-border h-12 focus-visible:ring-primary rounded-sm" data-testid="input-email" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans">Collection City</label>
                  <Input placeholder="e.g. London" className="bg-background border-border h-12 focus-visible:ring-primary rounded-sm" data-testid="input-collection-city" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans">Destination City</label>
                  <Input placeholder="e.g. Glasgow" className="bg-background border-border h-12 focus-visible:ring-primary rounded-sm" data-testid="input-destination-city" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-sans">Freight Details</label>
                <Textarea placeholder="Describe the cargo, weight and any special requirements..." className="bg-background border-border min-h-[120px] focus-visible:ring-primary rounded-sm" data-testid="textarea-freight-details" />
              </div>

              <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-widest text-lg rounded-sm" data-testid="button-submit-quote">
                SUBMIT REQUIREMENT
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
