import { useEffect, useState } from "react";
import { MAX_POSITION, MOVE_POSITION } from "../config/constants";

const useKeyDownAnimation = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [side, setSide] = useState(false);
  const [isKeyPressed, setIsKetPressed] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        setIsKetPressed(true);
        setPositionY((prevPosition) => prevPosition - MOVE_POSITION);
        setRotate(720);
        setTimeout(() => {
          setPositionY((prevPosition) => prevPosition + MOVE_POSITION);
          setRotate(0);
        }, 400);
        return;
      }
      switch (e.key) {
        case "ArrowUp":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition > -MAX_POSITION
              ? prevPosition - MOVE_POSITION
              : prevPosition
          );
          break;
        case "ArrowLeft":
          setIsKetPressed(true);
          setSide(false);
          setPositionX((prevPosition) =>
            prevPosition > -MAX_POSITION
              ? prevPosition - MOVE_POSITION
              : prevPosition
          );
          break;
        case "ArrowDown":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition < MAX_POSITION
              ? prevPosition + MOVE_POSITION
              : prevPosition
          );
          break;
        case "ArrowRight":
          setIsKetPressed(true);
          setSide(true);
          setPositionX((prevPosition) =>
            prevPosition < MAX_POSITION
              ? prevPosition + MOVE_POSITION
              : prevPosition
          );
          break;
      }
    });
  }, []);

  return { positionX, positionY, rotate, side, isKeyPressed };
};

export default useKeyDownAnimation;
