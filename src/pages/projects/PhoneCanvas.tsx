import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Phone } from "../../components/canvas/Phone";

type PhoneCanvasProp = {
  demo: string;
};

function PhoneCanvas({ demo }: PhoneCanvasProp) {
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
          <ContactShadows
            opacity={0.9}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={"#000000"}
          />
          <OrbitControls minDistance={3} maxDistance={7} enablePan={false} />
          <Phone demo={video} />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default PhoneCanvas;
