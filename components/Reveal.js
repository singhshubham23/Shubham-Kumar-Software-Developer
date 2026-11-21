"use client";

import { m } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

/** Fades and lifts children into view once they scroll on screen. */
export default function Reveal({ children, delay = 0, y = 40, className = "", as = "div" }) {
  const Component = m[as] || m.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Component>
  );
}
