import { useEffect, useState } from "react";

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
        setPositionY((prevPosition) => prevPosition - 15);
        setRotate(720);
        setTimeout(() => {
          setPositionY((prevPosition) => prevPosition + 15);
          setRotate(0);
        }, 400);
        return;
      }
      switch (e.key) {
        case "ArrowUp":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition > -270 ? prevPosition - 15 : prevPosition
          );
          break;
        case "ArrowLeft":
          setIsKetPressed(true);
          setSide(false);
          setPositionX((prevPosition) =>
            prevPosition > -270 ? prevPosition - 15 : prevPosition
          );
          break;
        case "ArrowDown":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition < 270 ? prevPosition + 15 : prevPosition
          );
          break;
        case "ArrowRight":
          setIsKetPressed(true);
          setSide(true);
          setPositionX((prevPosition) =>
            prevPosition < 270 ? prevPosition + 15 : prevPosition
          );
          break;
      }
    });
  }, []);

  return { positionX, positionY, rotate, side, isKeyPressed };
};

export default useKeyDownAnimation;
