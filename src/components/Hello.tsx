import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { icons } from "../utils/utils";

export default function Hello() {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const professions = ["Dentist", "Photographer", "<Front-End Developer />"];
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const period = 60;
  const [tickerWorking, setTickerWorking] = useState<boolean>(false);
  const [iconOpacity, setIconOpacity] = useState<boolean>(true);

  const tick = () => {
    let i = loopNum % professions.length;
    let fullText = professions[i];
    let updatedText =
      isDeleting && !!tickerWorking
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

    !!tickerWorking && setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
      if (updatedText === "") {
        setIsDeleting(false);
        setLoopNum((loopNum) => loopNum + 1);
        setDelta(60);
      }
    } else {
      if (updatedText === fullText) {
        if (updatedText === professions[professions.length - 1]) {
          setTickerWorking(false);
        } else {
          setIsDeleting(true);
          setDelta(period);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setTickerWorking(true);
    }, 500);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      if (tickerWorking) {
        tick();
      }
    }, delta);
    if (!tickerWorking) {
      clearInterval(ticker);
    }

    return () => {
      clearInterval(ticker);
    };
  }, [text, tickerWorking]);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);

  return (
    <motion.div id="hello-container" className="container" ref={targetRef}>
      <motion.div
        id="hello-box"
        
        onHoverStart={() => setIconOpacity(true)}
        onHoverEnd={() => setIconOpacity(false)}
      >
        {icons.slice(0, 8).map((icon) => (
          <motion.div
            className="iconImg"
            layout
            style={{
              opacity: iconOpacity ? 1 : 0,
              backgroundImage: `url("${icon?.img}")`,
            }}
          ></motion.div>
        ))}
        <motion.div id="text-hello-box">
          <h3>Hi! I am</h3>
          <motion.h1 id="salute-title">Augusto Ponce</motion.h1>
          <motion.h2 style={{ opacity }} id="profession-title">
            {text}
          </motion.h2>
        </motion.div>
        <motion.div
          id="image-box"
          style={{ opacity }}
          onHoverStart={() => setIconOpacity(true)}
          onHoverEnd={() => setIconOpacity(false)}
        >
          <img
            src="/public/assets/images/developer.svg"
            alt="Augusto Ponce"
          ></img>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
