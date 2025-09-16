import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="/#product" className="hover:text-white">Overview</a></li>
              <li><a href="/#templates" className="hover:text-white">Templates</a></li>
              <li><a href="/#docs" className="hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Use Cases</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Support automation</li>
              <li>Data pipelines</li>
              <li>Ops & internal tools</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>About</li>
              <li>Careers</li>
              <li>Privacy & Terms</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white">
            <span className="inline-block h-5 w-5 rounded-md bg-cyan-500" aria-hidden />
            <span className="font-semibold">ArtikAi</span>
          </div>
          <div className="flex items-center gap-4" aria-label="Social links">
            <a href="#" aria-label="GitHub" className="text-white/80 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} ArtikAi. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

