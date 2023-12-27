import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Phone } from "../../components/canvas/Phone";

type PhoneCanvasProp = {
  isDarkMode: boolean;
  demo: string;
  sparkleColor: string;
};

function PhoneCanvas({ isDarkMode, demo, sparkleColor }: PhoneCanvasProp) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = demo;
    vid.loop = true;
    vid.autoplay = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <Suspense fallback={<CanvasLoader />}>
        <group position-y={-1}>
          {isDarkMode ? (
            <Stars />
          ) : (
            <Sparkles scale={5} color={sparkleColor} size={2} />
          )}
          <OrbitControls minDistance={3} maxDistance={7} enablePan={false} />
          <Phone demo={video} />
          <ambientLight intensity={2} />
          <directionalLight intensity={3} position={[0, 0, -3]} />
          <directionalLight intensity={2} position={[0, 5, 0]} />
          <directionalLight intensity={2} position={[0, -5, 0]} />
          <directionalLight intensity={2} position={[5, 0, 0]} />
          <directionalLight intensity={2} position={[-5, 0, 0]} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default PhoneCanvas;
