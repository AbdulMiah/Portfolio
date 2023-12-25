import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Monitor } from "../../components/canvas/Monitor";

function MonitorCanvas() {
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
          <OrbitControls />
          <Monitor />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default MonitorCanvas;
