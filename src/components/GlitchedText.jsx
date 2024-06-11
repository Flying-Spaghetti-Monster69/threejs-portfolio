import { useRef, useEffect, useState } from "react";

const GlitchedText = ({ text }) => {
  const [currentText, setCurrentText] = useState(text);
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    clearInterval(intervalRef.current);
    iterationRef.current = 0;
    intervalRef.current = setInterval(() => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let newText = currentText.split("").map((letter, index) => {
        if (index < iterationRef.current) {
          return text[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      });
      setCurrentText(newText.join(""));

      iterationRef.current += 1 / 3;
      if (iterationRef.current >= text.length) {
        clearInterval(intervalRef.current);
      }
    }, 30);
  };

  useEffect(() => {
    handleMouseOver();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <h1 onMouseOver={handleMouseOver}>{currentText}</h1>;
};

export default GlitchedText;
