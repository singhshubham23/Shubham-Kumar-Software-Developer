"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * - Honours the visitor's "reduce motion" OS setting for every Framer Motion
 *   animation (previously only the marquee respected it).
 * - Loads only the lightweight animation feature set, which removes the
 *   drag/layout code from the initial bundle. Components that need layout
 *   animations opt in to the full set (see SelectedWork).
 */
export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
