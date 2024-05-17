import { useEffect, useRef } from "react";
import GRASS from "./assets/img/grass.png";
import PIKACHU from "./assets/img/pikachu.png";
import SOUND from "./assets/sound/sound.mov";
import useKeyDownAnimation from "./hooks/useKeyDownAnimation";

function App() {
  const audioRef = useRef(null);
  const { positionX, positionY, rotate, side, isKeyPressed } =
    useKeyDownAnimation();

  useEffect(() => {
    if (isKeyPressed) {
      audioRef.current.play();
    }
  }, [isKeyPressed]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          overflow: "hidden",
        }}
      >
        <audio ref={audioRef} loop src={SOUND} />
        <img
          src={GRASS}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
          }}
        />
        <img
          src={PIKACHU}
          style={{
            position: "absolute",
            width: 60,
            height: 60,
            transition: "all 0.5s",
            transform: `translate(${positionX}px, ${positionY}px) rotate(${rotate}deg) scaleX(${
              side ? 1 : -1
            })`,
          }}
        />
      </div>
    </div>
  );
}

export default App;
