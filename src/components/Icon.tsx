import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion"

interface iIcon {
  name: string;
  img: string;
}

const Icon = (icon: iIcon) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, {once: true,
    margin: "0px 0px -10% 0px"
  })

  return (
    <motion.div ref={targetRef}
      key={icon?.name} className={`iconContainer ${isInView ? "inView" : ""}`} transition={{duration: 300}}>
      <motion.div
        // ref={targetRef}
        // layout
        className="iIcon"
        layout
        style={{
          backgroundImage: `url("${icon?.img}")`,
        }}

      ></motion.div>
      <h2 className="techName">{icon.name}</h2>
    </motion.div>
  );
};

export default Icon;
