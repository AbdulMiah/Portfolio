import { Avatar } from "../../reusable/Avatar";
import { Canvas } from "@react-three/fiber";
import { OfficeChair } from "../../reusable/OfficeChair";
import { Suspense } from "react";
import CanvasLoader from "../../reusable/CanvasLoader";
import { useState } from "react";

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
          <OfficeChair position={[0, 0.5, 0]} />
          <Avatar lookAtPointer={lookAtPointer} />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default AvatarSitting;
