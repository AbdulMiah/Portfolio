export const staggerAnimation = (staggerChildren: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const popOutAnimation = (duration: number, delay: number) => {
  return {
    hidden: {opacity: 0, scale: 0.5 },
    show: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }
    }
  }
}