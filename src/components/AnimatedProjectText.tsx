import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface AnimatedTextProps {
  text: string;
  page: boolean;
  rotate?: boolean;
  direction?: "left" | "right";
}
const AnimatedText = ({
  text,
  page,
  rotate = true,
  direction = "left",
}: AnimatedTextProps) => {
  const { scrollYProgress } = useScroll();
  const textArray = [];
  for (let i = 0; i < 40; i++) {
    textArray.push(text);
  }
  const y = useTransform(
    () => scrollYProgress.get() * -300 * (direction === "left" ? 1 : -1) + "%",
  );

  return (
    <motion.div
      style={{
        marginLeft: y,
        translateX: direction === "left" ? "0px" : "-50%",
      }}
      className="sticky top-[80px] z-10 overflow-clip text-[48px] font-medium tracking-wide text-nowrap text-white/80 italic mix-blend-difference lg:top-[20px]"
    >
      <p>
        {textArray.map((word, index) => (
          <span
            key={index}
            className={`${index % 2 == 0 ? "text-stroke-3 text-transparent opacity-80" : ""} `}
          >
            {word}
          </span>
        ))}
      </p>
    </motion.div>
  );
};

export default AnimatedText;
