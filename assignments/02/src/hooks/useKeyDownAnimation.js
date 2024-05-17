import { useEffect, useState } from "react";

const useKeyDownAnimation = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isKeyPressed, setIsKetPressed] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        setIsKetPressed(true);
        setPositionY((prevPosition) => prevPosition - 30);
        setTimeout(
          () => setPositionY((prevPosition) => prevPosition + 30),
          200
        );
        return;
      }
      switch (e.key) {
        case "ArrowUp":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition > -120 ? prevPosition - 30 : prevPosition
          );
          break;
        case "ArrowLeft":
          setIsKetPressed(true);
          setPositionX((prevPosition) =>
            prevPosition > -120 ? prevPosition - 30 : prevPosition
          );
          break;
        case "ArrowDown":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition < 120 ? prevPosition + 30 : prevPosition
          );
          break;
        case "ArrowRight":
          setIsKetPressed(true);
          setPositionX((prevPosition) =>
            prevPosition < 120 ? prevPosition + 30 : prevPosition
          );
          break;

        case "w":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition > -120 ? prevPosition - 30 : prevPosition
          );
          break;
        case "a":
          setIsKetPressed(true);
          setPositionX((prevPosition) =>
            prevPosition > -120 ? prevPosition - 30 : prevPosition
          );
          break;
        case "s":
          setIsKetPressed(true);
          setPositionY((prevPosition) =>
            prevPosition < 120 ? prevPosition + 30 : prevPosition
          );
          break;
        case "d":
          setIsKetPressed(true);
          setPositionX((prevPosition) =>
            prevPosition < 120 ? prevPosition + 30 : prevPosition
          );
          break;
      }
    });
  }, []);

  return { positionX, positionY, isKeyPressed };
};

export default useKeyDownAnimation;
