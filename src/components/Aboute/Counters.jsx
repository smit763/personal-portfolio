import CountUp from "react-countup";
import { motion } from "framer-motion";

const Counters = ({containerVariants}) => {
  return (
    <motion.div
      variants={containerVariants}
      transition={{ delay: 0.6 }}
      className="w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right"
    >
      <div>
        <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
          Projects Done
        </h6>
        <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
          <CountUp start={0} end={132} duration={3} />
        </span>
      </div>
      <div>
        <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
          Years of Experience
        </h6>
        <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
          <CountUp start={0} end={3} duration={3} />
        </span>
      </div>
      <div>
        <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
          Worldwide Clients
        </h6>
        <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
          <CountUp start={0} end={17} duration={3} suffix="+" />
        </span>
      </div>
    </motion.div>
  );
};

export default Counters;
