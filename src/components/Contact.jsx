import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Let’s build something secure</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Drop a message and I’ll get back to you. I’m open to consulting, speaking, and collaborations.
          </p>
        </div>

        <form action="mailto:you@example.com" method="post" encType="text/plain" className="grid gap-4 md:grid-cols-2">
          <input type="text" name="name" placeholder="Your name" className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none" />
          <input type="email" name="email" placeholder="Email address" className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none" />
          <textarea name="message" rows="5" placeholder="Tell me about your project" className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 md:w-max">
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>

        <div className="mt-8 flex items-center gap-3 text-slate-400">
          <Mail className="h-4 w-4" />
          <span>you@example.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
