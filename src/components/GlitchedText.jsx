import { useRef, useState } from "react";
import PropTypes from "prop-types";

const GlitchedText = ({ text, classStyles, span, spanStyles }) => {
  const [currentText, setCurrentText] = useState(text);
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    clearInterval(intervalRef.current);
    iterationRef.current = 0;
    intervalRef.current = setInterval(() => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let newText = currentText.split("").map((_, index) => {
        if (index < iterationRef.current) {
          return text[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      });
      setCurrentText(newText.join(""));

      iterationRef.current += 1 / 4;
      if (iterationRef.current > text.length) {
        clearInterval(intervalRef.current);
      }
    }, 30);
  };

  if (span) {
    const h1Text = currentText.slice(0, span);
    const spanText = currentText.slice(span);
    return (
      <h1 onMouseOver={handleMouseOver} className={classStyles}>
        {h1Text}
        <span onMouseOver={handleMouseOver} className={spanStyles}>
          {spanText}
        </span>
      </h1>
    );
  }

  return (
    <h1 onMouseOver={handleMouseOver} className={classStyles}>
      {currentText}
    </h1>
  );
};
GlitchedText.propTypes = {
  text: PropTypes.string.isRequired,
  classStyles: PropTypes.string,
  span: PropTypes.number,
  spanStyles: PropTypes.string,
};

export default GlitchedText;
