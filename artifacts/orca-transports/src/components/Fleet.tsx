import { motion } from "framer-motion";

const fleet = [
  {
    type: "Articulated Lorry",
    capacity: "Up to 44 Tonnes",
    bestFor: "National bulk haulage, heavy pallets",
    specs: ["Curtain-sided", "Tail lift available", "GPS Tracked"]
  },
  {
    type: "Rigid Truck (18T)",
    capacity: "Up to 18 Tonnes",
    bestFor: "Regional distribution, multi-drop",
    specs: ["Box or curtain", "Tail lift standard", "Urban compliant"]
  },
  {
    type: "LWB Van",
    capacity: "Up to 1.5 Tonnes",
    bestFor: "Express courier, tight urban access",
    specs: ["High roof", "Secure locking", "Rapid response"]
  }
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-muted border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Assets</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">THE FLEET</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Modern, rigorously maintained, and equipped for any payload. Our diverse fleet ensures we deploy the right asset for your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-secondary relative flex items-center justify-center p-8 border-b border-border group-hover:bg-secondary/80 transition-colors">
                {index === 0 && (
                  <div className="w-full h-16 bg-muted-foreground/15 rounded-sm relative shadow-inner">
                    <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-primary/15 border-l border-border" />
                    <div className="absolute left-[-20px] bottom-0 w-6 h-6 rounded-full bg-card border-2 border-border" />
                    <div className="absolute right-4 bottom-0 w-6 h-6 rounded-full bg-card border-2 border-border" />
                    <div className="absolute right-12 bottom-0 w-6 h-6 rounded-full bg-card border-2 border-border" />
                  </div>
                )}
                {index === 1 && (
                  <div className="w-3/4 h-20 bg-muted-foreground/15 rounded-sm relative shadow-inner">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/15 border-l border-border" />
                    <div className="absolute left-4 bottom-[-10px] w-8 h-8 rounded-full bg-card border-2 border-border" />
                    <div className="absolute right-4 bottom-[-10px] w-8 h-8 rounded-full bg-card border-2 border-border" />
                  </div>
                )}
                {index === 2 && (
                  <div className="w-1/2 h-14 bg-muted-foreground/15 rounded-sm relative shadow-inner rounded-tr-[20px]">
                    <div className="absolute left-2 bottom-[-6px] w-6 h-6 rounded-full bg-card border-2 border-border" />
                    <div className="absolute right-2 bottom-[-6px] w-6 h-6 rounded-full bg-card border-2 border-border" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{vehicle.type}</h3>
                <div className="text-primary font-medium mb-4">{vehicle.capacity}</div>
                <p className="text-muted-foreground mb-6 text-sm">{vehicle.bestFor}</p>
                <ul className="space-y-2">
                  {vehicle.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
