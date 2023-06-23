// libraries:
import { useRef, useEffect } from "react";
import {
  useMotionValue,
  useTransform,
  useInView,
  animate,
  motion,
} from "framer-motion";

// types:
import { AnimatedCounterProp } from "../../@types/animations";

// main:
const AnimatedCounter = ({ from, to }: AnimatedCounterProp) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1 });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedCounter;
