import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { RetroTelephone } from "../../components/canvas/RetroTelephone";

function PhoneRinging() {
  return (
    <Canvas shadows camera={{ position: [1, 1, 1], fov: 20 }}>
      <Suspense fallback={<CanvasLoader />}>
        <group position-y={-0.1}>
          <ContactShadows
            opacity={0.6}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={"#000000"}
          />
          <OrbitControls
            minDistance={0.5}
            maxDistance={1.5}
            enablePan={false}
          />
          <RetroTelephone />
          <ambientLight intensity={3} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default PhoneRinging;
