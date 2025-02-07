import { motion } from "framer-motion";

interface BeatingHeartProps {
  size?: number;
  rotation?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  delay?: number;
}

const BeatingHeart = ({
  size = 60,
  rotation = -25,
  delay = 0,
  top,
  left,
  right,
  bottom,
}: BeatingHeartProps) => {
  return (
    <motion.div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#ff483b",
        position: "absolute",
        rotate: `${rotation}deg`,
        top: `${top}px`,
        right: `${right}px`,
        left: `${left}px`,
        bottom: `${bottom}px`,
        zIndex: 1,
      }}
      animate={{
        scale: [1, 1.2, 1], // Beating animation
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {/* Left curve of the heart */}
      <motion.div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#ff483b",
          borderRadius: "50%",
          position: "absolute",
          top: `-${size / 2}px`,
          left: "0",
        }}
      />
      {/* Right curve of the heart */}
      <motion.div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#ff483b",
          borderRadius: "50%",
          position: "absolute",
          top: "0",
          left: `${size / 2}px`,
        }}
      />
    </motion.div>
  );
};

export default BeatingHeart;
