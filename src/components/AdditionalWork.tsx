import { motion } from "framer-motion";

interface props {
  title: string;
  description: string;
  techStack: string[];
  number: number;
}

const AdditionalWork = ({ props }: { props: props }) => {
  const { title, description, techStack, number } = props;
  const reversed = number % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? -100 : 100 }}
      transition={{ delay: number * 0.1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`flex w-full flex-row px-[8px] ${reversed ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[256px] text-white/80 md:max-w-[512px] ${reversed ? "text-left" : "text-right"} `}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-1 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default AdditionalWork;
