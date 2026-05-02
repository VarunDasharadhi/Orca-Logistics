import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const VanSvg = ({ className = "" }) => (
  <svg viewBox="0 0 100 40" fill="currentColor" className={className} preserveAspectRatio="xMidYMid meet">
    <path d="M10,20 L10,35 L15,35 A5,5 0 0,0 25,35 L75,35 A5,5 0 0,0 85,35 L95,35 L95,25 L85,15 L70,10 L10,10 Z" />
    <circle cx="20" cy="35" r="4" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <circle cx="80" cy="35" r="4" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <path d="M70,12 L83,16 L93,25 L70,25 Z" className="fill-background" opacity="0.4"/>
    <rect x="15" y="15" width="40" height="10" className="fill-background" opacity="0.25"/>
    <path d="M93,26 L96,26 L96,30 L93,30 Z" fill="#ffffff"/>
  </svg>
);

const TruckSvg = ({ className = "" }) => (
  <svg viewBox="0 0 120 50" fill="currentColor" className={className} preserveAspectRatio="xMidYMid meet">
    <path d="M5,15 L65,15 L65,40 L25,40 A6,6 0 0,0 13,40 L5,40 Z" />
    <path d="M68,25 L85,25 L95,30 L95,40 L88,40 A6,6 0 0,0 76,40 L68,40 Z" />
    <circle cx="19" cy="40" r="5" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <circle cx="82" cy="40" r="5" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <rect x="70" y="27" width="10" height="8" className="fill-background" opacity="0.4"/>
    <path d="M94,32 L96,32 L96,36 L94,36 Z" fill="#ffffff"/>
  </svg>
);

const LorrySvg = ({ className = "" }) => (
  <svg viewBox="0 0 180 60" fill="currentColor" className={className} preserveAspectRatio="xMidYMid meet">
    <path d="M5,10 L110,10 L110,50 L95,50 A6,6 0 0,0 83,50 L45,50 A6,6 0 0,0 33,50 L5,50 Z" />
    <path d="M115,25 L140,25 L155,35 L155,50 L145,50 A6,6 0 0,0 133,50 L115,50 Z" />
    <circle cx="39" cy="50" r="5" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <circle cx="89" cy="50" r="5" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <circle cx="139" cy="50" r="5" className="fill-background" stroke="currentColor" strokeWidth="2"/>
    <rect x="118" y="28" width="15" height="10" className="fill-background" opacity="0.4"/>
    <path d="M153,38 L156,38 L156,42 L153,42 Z" fill="#ffffff"/>
    <rect x="15" y="20" width="80" height="15" className="fill-background" opacity="0.15"/>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background pt-20">
      {/* Subtle grid using logo border color */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-50" />

      {/* Teal accent glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-grow flex flex-col justify-center pb-32 md:pb-52">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm font-sans">Precision Logistics</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading text-foreground leading-none tracking-wider mb-8"
          >
            RELENTLESS
            <br />
            <span className="text-primary">FORWARD</span>
            <br />
            MOTION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-sans"
          >
            Industrial strength meets modern precision. We handle million-pound supply chains with the confidence of a captain who never loses a ship. On time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-lg px-8 h-14 rounded-sm"
              asChild
            >
              <a href="#contact" data-testid="link-book-transport">BOOK TRANSPORT</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest text-lg px-8 h-14 rounded-sm transition-colors"
              asChild
            >
              <a href="#services" data-testid="link-our-services">OUR SERVICES</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Vehicle Scene */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 border-t border-border/40 bg-background/70 backdrop-blur-sm z-0 overflow-hidden flex flex-col justify-end">

        {/* Layer 1: Far background — slow, tiny, faded */}
        <div className="absolute bottom-16 w-full h-10 opacity-20">
          <div className="w-full h-full relative animate-drive-slow">
            <TruckSvg className="absolute top-0 w-20 text-primary right-[-100px]" />
            <VanSvg className="absolute top-2 w-14 text-primary right-[-450px]" />
            <LorrySvg className="absolute top-0 w-28 text-primary right-[-900px]" />
          </div>
        </div>

        {/* Layer 2: Midground */}
        <div className="absolute bottom-10 w-full h-16 opacity-45">
          <div className="w-full h-full relative animate-drive-medium">
            <LorrySvg className="absolute top-0 w-44 text-foreground/70 right-[-200px]" />
            <div className="light-trail right-[-200px] top-[22px]"></div>
            <VanSvg className="absolute top-4 w-22 text-foreground/70 right-[-750px]" />
            <TruckSvg className="absolute top-2 w-32 text-foreground/70 right-[-1300px]" />
          </div>
        </div>

        {/* Layer 3: Foreground — fast, large, full opacity */}
        <div className="absolute bottom-2 w-full h-24 z-10">
          <div className="w-full h-full relative animate-drive-fast">
            <VanSvg className="absolute top-10 w-32 text-foreground right-[-150px] drop-shadow-[0_0_10px_rgba(43,132,145,0.3)]" />
            <div className="light-trail right-[-150px] top-[40px] w-56 opacity-60"></div>

            <LorrySvg className="absolute top-2 w-60 text-foreground right-[-950px] drop-shadow-[0_0_14px_rgba(43,132,145,0.35)]" />
            <div className="light-trail right-[-950px] top-[24px] w-80 opacity-70"></div>

            <TruckSvg className="absolute top-6 w-44 text-foreground right-[-1900px] drop-shadow-[0_0_10px_rgba(43,132,145,0.3)]" />
          </div>
        </div>

        {/* Road strip */}
        <div className="absolute bottom-0 w-full h-5 bg-foreground/10 border-t border-border/60">
          <div className="w-full h-[2px] mt-1.5 animate-road"></div>
        </div>
      </div>
    </section>
  );
}
