import React from 'react';
import { Docker, Shield, Cloud, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const stack = [
  { name: 'Containers & Orchestration', icon: <Docker className="h-5 w-5" />, items: ['Docker', 'Kubernetes', 'Helm', 'Kustomize'] },
  { name: 'Cloud Platforms', icon: <Cloud className="h-5 w-5" />, items: ['AWS', 'GCP', 'Azure'] },
  { name: 'Security', icon: <Shield className="h-5 w-5" />, items: ['IAM', 'mTLS', 'OIDC', 'OPA', 'Sigstore'] },
  { name: 'Automation', icon: <Terminal className="h-5 w-5" />, items: ['Terraform', 'Ansible', 'GitHub Actions'] },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      {/* animated grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:linear-gradient(transparent,transparent_29px,rgba(148,163,184,.15)_30px),linear-gradient(90deg,transparent,transparent_29px,rgba(148,163,184,.15)_30px)] [background-size:30px_30px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Cloud-native Toolkit</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Tools and platforms I use to design secure, scalable, and observable infrastructure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-slate-300 backdrop-blur-sm"
            >
              {/* glow edge */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-500/20" />
              <div className="mb-3 flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                  {s.icon}
                </div>
                <h3 className="font-medium">{s.name}</h3>
              </div>
              <ul className="space-y-1 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="text-slate-300">{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
