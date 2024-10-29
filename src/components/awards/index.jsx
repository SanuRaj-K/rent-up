import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Award = ({ title, sub, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let increment = Math.ceil(title / 100);
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev + increment >= title) {
            clearInterval(interval);
            return title;
          }
          return prev + increment;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, title]);

  return (
    <motion.div ref={ref} className="w-full flex flex-col items-center">
      <div className="bg-[#2A3F5A] p-10 rounded-tr-[50%] rounded-bl-[50%]">
        {Icon && <Icon style={{ fontSize: 40 }} />}
      </div>
      <div className="text-center">
        <h1 className="text-[24px] md:text-[36px] lg:text-[50px] font-bold">
          {count}M
        </h1>
        <h3 className="text-[#808080]">{sub}</h3>
      </div>
    </motion.div>
  );
};
