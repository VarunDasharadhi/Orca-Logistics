import { motion } from "framer-motion";
import { Package, Truck, Warehouse, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Road Freight",
    description: "Heavy haulage and standard freight operations across the national network. Fully tracked and insured.",
    icon: Truck,
  },
  {
    title: "Last-Mile Delivery",
    description: "Precision urban logistics ensuring your products reach their final destination efficiently.",
    icon: Package,
  },
  {
    title: "Warehousing",
    description: "Secure, climate-controlled storage facilities with state-of-the-art inventory management systems.",
    icon: Warehouse,
  },
  {
    title: "Express Courier",
    description: "Time-critical delivery services for urgent documents and high-value parcels.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card border-b border-border/50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Capabilities</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">OUR SERVICES</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Comprehensive logistics solutions engineered for reliability. We handle the complexity so you can focus on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background/50 border-border hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_30px_rgba(0,68,255,0.1)] rounded-none relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-wide">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
