import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Monitor } from "../../components/canvas/Monitor";

type MonitorCanvasProp = {
  demo: string;
};

function MonitorCanvas({ demo }: MonitorCanvasProp) {
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
          <ContactShadows
            opacity={0.6}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={"#000000"}
          />
          <OrbitControls minDistance={40} maxDistance={100} enablePan={false} />
          <Monitor demo={video} />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default MonitorCanvas;
