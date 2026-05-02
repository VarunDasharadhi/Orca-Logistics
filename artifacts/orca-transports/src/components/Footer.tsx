export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 group mb-6">
              <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground -rotate-45" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-foreground">
                ORCA<span className="text-primary">TRANS</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Industrial-grade logistics and transport solutions built for precision, reliability, and scale.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Road Freight</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Last-Mile Delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Warehousing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Express Courier</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold tracking-wider mb-6">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#fleet" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Fleet</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Orca Transports Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
