import { Link } from "react-router-dom";

export default function DarkFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/60 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-white">
            <span className="inline-block h-6 w-6 rounded-md bg-cyan-500" aria-hidden />
            <span className="text-lg font-semibold">ArtikAi</span>
          </div>
          <p className="max-w-3xl text-sm text-white/75">
            Website + Booking + Reviews system for Florida service businesses. Faster follow-up, more booked jobs, more
            reviews on Google Maps.
          </p>
          <p className="text-xs text-white/50">Serving Orlando, Melbourne FL, Rockledge, Cocoa, Cocoa Beach, Titusville, Clearwater, Oviedo.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Website System</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link to="/website-system" className="hover:text-white">Overview</Link></li>
              <li><Link to="/process" className="hover:text-white">Process</Link></li>
              <li><Link to="/results" className="hover:text-white">Results</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Service Fit</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/book" className="hover:text-white">Book a Strategy Call</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Platform</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link to="/product" className="hover:text-white">Product</Link></li>
              <li><Link to="/templates" className="hover:text-white">Templates</Link></li>
              <li><Link to="/use-cases/support" className="hover:text-white">Use Cases</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><a href="mailto:artikai@artikai.org" className="hover:text-white">artikai@artikai.org</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} ArtikAi. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/ArtikAi" className="hover:text-white/90">Twitter</a>
            <a href="https://www.linkedin.com" className="hover:text-white/90">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
