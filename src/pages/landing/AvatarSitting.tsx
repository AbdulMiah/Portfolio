import { Avatar } from "../../components/canvas/Avatar";
import { Canvas } from "@react-three/fiber";
import { OfficeChair } from "../../components/canvas/OfficeChair";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { useState } from "react";
import { ContactShadows } from "@react-three/drei";

function AvatarSitting() {
  const [lookAtPointer, setLookAtPointer] = useState(false);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 20 }}
      onPointerEnter={() => setLookAtPointer(true)}
      onPointerLeave={() => setLookAtPointer(false)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group position-y={-0.7}>
          <ContactShadows
            opacity={0.6}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={"#000000"}
          />
          <OfficeChair position={[0, 0.5, 0]} />
          <Avatar lookAtPointer={lookAtPointer} />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default AvatarSitting;
