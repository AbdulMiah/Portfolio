import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Monitor } from "../../components/canvas/Monitor";

type MonitorCanvasProp = {
  isDarkMode: boolean;
  demo: string;
  sparkleColor: string;
};

function MonitorCanvas({ isDarkMode, demo, sparkleColor }: MonitorCanvasProp) {
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
    <Canvas shadows camera={{ position: [90, 0, 0], fov: 30 }}>
      <Suspense fallback={<CanvasLoader />}>
        <group position-y={-15}>
          {isDarkMode ? (
            <Stars />
          ) : (
            <Sparkles scale={80} color={sparkleColor} size={40} speed={5} />
          )}
          <OrbitControls minDistance={40} maxDistance={100} enablePan={false} />
          <Monitor demo={video} />
          <ambientLight intensity={1} />
          <directionalLight intensity={1} position={[0, 0, -30]} />
          <directionalLight intensity={1} position={[0, 50, 0]} />
          <directionalLight intensity={1} position={[0, -50, 0]} />
          <directionalLight intensity={1} position={[50, 0, 0]} />
          <directionalLight intensity={1} position={[-50, 0, 0]} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default MonitorCanvas;
