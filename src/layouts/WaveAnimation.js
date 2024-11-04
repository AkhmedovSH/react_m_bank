import React from 'react';
import { motion } from 'framer-motion';

const WaveAnimation = ({ children }) => {
    return (
        <>
            <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            // style={{
            //     margin: '10px',
            //     padding: '20px',
            //     backgroundColor: '#007AFF',
            //     color: '#fff',
            //     borderRadius: '5px',
            //     textAlign: 'center',
            // }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default WaveAnimation;
