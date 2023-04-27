import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div id="aboutme-container">
      <motion.div id="aboutme-box">
      
        <h2 className="aboutmeTitle">
          About <span>me</span>
        </h2>
        <p className="aboutmeParagraph">
          I am constant learner, who found passion inside the{" "}
          <span>web developing</span> world.
        </p>
        <p className="aboutmeParagraph">
          After becoming a <span>dentist</span> and working as a{" "}
          <span>photographer</span> for the past years, I embarked on a new path
          learning to program in a self-taught way through online courses, video
          platforms and reading a lot of documentation.
        </p>
        <p className="aboutmeParagraph">
          I am currently working as a freelancer{" "}
          <span>Front-End developer</span> creating more modern and responsive
          websites for different projects and businesses, but I am also in
          permanent formation aiming to become a{" "}
          <span>Full-Stack developer</span>.
        </p>
        <div id="languages-box">
        <h2 className="aboutmeTitle">Languages</h2>
        <p className="aboutmeParagraph">English: Advanced (EF Set English Test)</p>
        <p className="aboutmeParagraph">Spanish: Mother Language</p>
        <p className="aboutmeParagraph">German: B2 (currently living in Hamburg)</p>
      </div>
      </motion.div>
      
    </motion.div>
  );
}
