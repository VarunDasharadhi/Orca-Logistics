import logoImg from "@/assets/logo-nobg.png";

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img
                src={logoImg}
                alt="Orca Transports Ltd"
                className="h-20 w-auto object-contain brightness-0 invert opacity-90 dark:brightness-100 dark:invert-0 dark:opacity-100"
              />
            </div>
            <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
              Industrial-grade logistics and transport solutions built for precision, reliability, and scale. Nationwide coverage, 24/7 operations.
            </p>
            <div className="mt-4">
              <a href="mailto:info@orcatransports.com" className="text-primary text-sm hover:text-primary/80 transition-colors">
                info@orcatransports.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-heading tracking-widest text-sm mb-6">SERVICES</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Road Freight</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Last-Mile Delivery</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Warehousing</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Express Courier</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-heading tracking-widest text-sm mb-6">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#fleet" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Our Fleet</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Orca Transports Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
