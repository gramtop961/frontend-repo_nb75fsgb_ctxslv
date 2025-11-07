import React from 'react';
import { ShieldCheck, KeyRound, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const items = [
    { icon: ShieldCheck, title: 'Security by Default', text: 'Defense-in-depth patterns across identity, network, runtime, and code. Threat modeling baked into architecture.' },
    { icon: KeyRound, title: 'Strong Identity', text: 'Zero-trust auth with short-lived credentials, workload identity, and signed artifacts.' },
    { icon: Cpu, title: 'Cloud Scale', text: 'Proven patterns for resilient, observable and automated infrastructure with sane guardrails.' },
  ];

  return (
    <section id="about" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">About</h2>
          <p className="mt-2 max-w-2xl text-slate-300">I help teams ship quickly without compromising on security, using modern cloud-native tooling and principled design.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
