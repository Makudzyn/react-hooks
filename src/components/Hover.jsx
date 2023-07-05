import {useRef} from 'react';
import useHover from "../hooks/useHover.js";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div ref={ref} style={{width: "300px", height: "300px", background: "#fab800", border: isHovering ? "1px solid black" : "none"}}>
    </div>
  );
};

export default Hover;