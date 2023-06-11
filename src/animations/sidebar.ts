export const FadeInOutList = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { staggerChildren: -0.1, ease: "linear" },
  },
};
