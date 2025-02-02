import { useEffect, useState } from "react";

type TypewritterTextProps = {
  words: string[];
};

const TypewritterText = ({ words }: TypewritterTextProps) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let text = "";
    let speed = 200;

    const type = async () => {
      const current = index % words.length;
      const fullText = words[current];
      const randomVariation = 1 + Math.random();

      if (isDeleting) {
        text = fullText.substring(0, text.length - 1);
      } else {
        text = fullText.substring(0, text.length + 1);
      }

      setWord(text);

      if (!isDeleting && text === fullText) {
        isDeleting = true;
        speed = 1000;
      } else if (isDeleting && text === "") {
        isDeleting = false;
        speed = 300;
        index++;
      } else if (isDeleting) {
        speed = 130;
      }

      setTimeout(() => {
        type();
      }, speed / randomVariation);
    };

    type();
  }, []);

  return (
    <>
      <span className="font-semibold">
        {word}
        <span className="-ml-1 w-0 animate-ping font-bold">|</span>
      </span>
    </>
  );
};

export default TypewritterText;
