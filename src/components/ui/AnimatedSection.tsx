import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number }>;

export default function AnimatedSection({ children, delay = 0 }: Props) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}

