import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      {/* Floating glow orbs for extra 3D depth (don't block pointer events) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-300 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4" />
            <span className="text-sm">Cloud-native security engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Secure by design. Built for the cloud.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-xl text-base text-slate-300 md:text-lg"
          >
            I craft resilient, scalable systems with security woven into every layer — from container to cluster, from code to cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/50 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Cloud className="h-4 w-4" />
              Let’s Collaborate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
