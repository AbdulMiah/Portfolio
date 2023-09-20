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

export const scaleAnimation = (scale: any[], duration: number) => {
  return {
    hidden: {},
    show: {
      scale: scale,
      transition: {
        duration: duration,
      }
    }
  }
}

export const slideDown = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};