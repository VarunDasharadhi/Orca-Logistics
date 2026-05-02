import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef} className="text-5xl md:text-6xl font-extrabold text-white font-heading tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    { label: "Deliveries Completed", value: 12000, suffix: "+" },
    { label: "On-Time Rate", value: 98, suffix: "%" },
    { label: "Active Vehicles", value: 145, suffix: "" },
    { label: "Support", value: 24, suffix: "/7" },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Orca</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">THE POWER TO DELIVER</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just move freight; we optimize supply chains. By combining raw industrial capability with cutting-edge tracking technology, we provide transparency and reliability that our competitors can't match. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When a shipment absolutely has to be there, businesses trust Orca.
            </p>
            
            <ul className="space-y-4">
              {['Real-time GPS tracking on all vehicles', 'Dedicated account management team', 'Fully compliant with all national transport regulations', 'Automated proof of delivery'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border p-8 flex flex-col justify-center border-l-4 border-l-primary"
              >
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
