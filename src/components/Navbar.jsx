import React from 'react';
import { ShieldCheck, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/70 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2 text-white">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <span className="font-semibold">CloudSec</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700/60 bg-slate-800/60 p-2 text-slate-300 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700/60 bg-slate-800/60 p-2 text-slate-300 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
