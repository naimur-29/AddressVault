export const FadeInOut = {
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

export const FadeInIn = {
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
    y: 10,
    transition: { staggerChildren: -0.1, ease: "linear" },
  },
};

export const PopInOut = {
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    height: 0,
  },
  exit: {
    opacity: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fff",
    transition: { staggerChildren: -0.1 },
  },
};
