import { motion } from "framer-motion"


//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["110%", "0%"],	
  }
}

const reverseIndex = (index) => {
  const totalSteps = 5;
  return totalSteps - index - 1;
}

const Stairs = () => {
  return <>
    {[...Array(5)].map((_, index) => {
      return (
      <motion.div 
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4, 
          ease: "easeInOut",
          delay: reverseIndex(index) * 0.1,
        }}
        className="w-full h-full bg-accent relative"
      />
      );
    })}
  </>
}

export default Stairs