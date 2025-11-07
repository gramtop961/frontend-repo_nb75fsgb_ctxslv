import React, { useCallback } from 'react';
import { Server, Lock, Code, CloudLightning } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Zero-Trust Kubernetes Platform',
    Icon: Lock,
    description:
      'End-to-end hardening for multi-tenant clusters: network policies, workload identity, supply chain security, and continuous compliance.',
    tags: ['Kubernetes', 'OPA/Gatekeeper', 'Sigstore', 'Cilium'],
  },
  {
    title: 'Cloud Threat Detection Pipeline',
    Icon: CloudLightning,
    description:
      'Serverless analytics that ingests cloud logs, correlates signals, and raises actionable alerts with minimal noise.',
    tags: ['AWS', 'Lambda', 'SIEM', 'Kinesis'],
  },
  {
    title: 'Secure CI/CD Supply Chain',
    Icon: Code,
    description:
      'Provenance, SBOM, and policy gates baked into the pipeline for trusted releases and rapid recovery.',
    tags: ['GitHub Actions', 'SLSA', 'SBOM', 'Cosign'],
  },
  {
    title: 'Resilient Edge Service Mesh',
    Icon: Server,
    description:
      'mTLS by default with circuit breaking, rate limiting, and zero downtime deployments across regions.',
    tags: ['Envoy', 'Istio', 'mTLS', 'Canary'],
  },
];

const ProjectCard = ({ title, description, tags, Icon }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glow = useTransform(scale, [1, 1.03], ['0 10px 30px rgba(34,211,238,0.0)', '0 20px 50px rgba(34,211,238,0.15)']);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5 to 0.5
    const py = y / rect.height - 0.5;
    rotateX.set(py * -10);
    rotateY.set(px * 12);
    scale.set(1.03);
  }, [rotateX, rotateY, scale]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }, [rotateX, rotateY, scale]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY, scale, boxShadow: glow }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
        className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-xl shadow-black/20 backdrop-blur-sm hover:border-cyan-500/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
              {t}
            </span>
          ))}
        </div>

        {/* subtle gradient highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.08), transparent 40%)' }} />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-slate-950 py-24">
      {/* decorative orbs */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-0 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Featured Work</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Selected projects that blend performance, reliability, and strong security posture in modern cloud environments.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
