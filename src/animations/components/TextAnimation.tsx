// libraries:
import { motion } from "framer-motion";

// types:
import { TextAnimationProp } from "../../@types/animations";

// main:
const TextAnimation = ({ children }: TextAnimationProp) => {
  return (
    <motion.div className="text">
      {String(children)
        .split("")
        .map((letter, index) => (
          <motion.span
            key={letter + "-" + index}
            style={{
              display: "inline-block",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
    </motion.div>
  );
};

export default TextAnimation;
