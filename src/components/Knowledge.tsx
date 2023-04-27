import { icons } from "../utils/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";
export default function Knowledge() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.aside id="knowledge-container" ref={targetRef} style={{  }}>
      <motion.section id="knowledge-box">
        <h2>- Skills</h2>
        <motion.div id="tech-icons">
          {icons.map((icon) => (
            <Icon key={icon.name} name={icon.name} img={icon.img}  />
          ))}
        </motion.div>
      </motion.section>
    </motion.aside>
  );
}
