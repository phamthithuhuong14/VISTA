import { motion } from "framer-motion";

interface Props {
  value: number; // Giá trị của điểm (có thể là %)
  min: number;
  max: number;
}

const AnimatedIcon = ({ value, min, max }: Props) => {
  // Tính toán góc quay dựa trên giá trị
  const rotation = value <= min ? 180 : value >= max ? 0 : 90;

  return (
    <motion.div
      className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg"
      animate={{ rotate: rotation }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      🔥
    </motion.div>
  );
};

export default AnimatedIcon;
