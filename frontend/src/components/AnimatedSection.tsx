import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="animated-section"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;