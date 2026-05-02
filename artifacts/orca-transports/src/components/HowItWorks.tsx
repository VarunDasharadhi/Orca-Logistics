import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "BOOK",
    desc: "Submit your requirement via our portal or dedicated account manager. Get instant pricing and capacity confirmation."
  },
  {
    num: "02",
    title: "TRACK",
    desc: "Asset is deployed. Monitor progress in real-time through our client dashboard with automated milestone alerts."
  },
  {
    num: "03",
    title: "DELIVERED",
    desc: "Secure handover with instant digital proof-of-delivery (POD) and automated invoicing."
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">HOW IT WORKS</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="w-24 h-24 bg-card border-2 border-primary rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6 shadow-md mx-auto md:mx-0">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-muted-foreground text-center md:text-left text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
