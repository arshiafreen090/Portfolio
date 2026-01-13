import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    fullWidth?: boolean;
}

export const FadeUp = ({ children, delay = 0, className = "", fullWidth = false }: FadeUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
};
