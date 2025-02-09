import { motion, useScroll, useTransform } from "motion/react";

interface AnimatedTextProps {
  text: string;
  page: boolean;
  rotate?: boolean;
}
const AnimatedText = ({ text, page, rotate = true }: AnimatedTextProps) => {
  const { scrollYProgress } = useScroll();
  const textArray = [];
  for (let i = 0; i < 40; i++) {
    textArray.push(text);
  }
  const y = useTransform(() => scrollYProgress.get() * 100 + "%");

  return (
    <motion.div
      style={{
        transformOrigin: "left",
        transform: ` translate(16px, -100vh) rotate(${rotate ? "90deg" : "0"})`,
        marginTop: y,
      }}
      className="text-stroke-1 fixed top-0 -z-10 text-[36px] font-bold tracking-wider text-nowrap italic opacity-15 lg:absolute"
    >
      <p>
        {textArray.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </p>
    </motion.div>
  );
};

export default AnimatedText;
