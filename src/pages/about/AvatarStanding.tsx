import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { AnimationConfig, Avatar } from "../../components/canvas/Avatar";

function AvatarStanding() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 35 }}>
      <Suspense fallback={<CanvasLoader />}>
        <group position-y={-0.9}>
          <ContactShadows
            opacity={0.6}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={"#000000"}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 2}
          />
          <Avatar animationConfig={AnimationConfig.LookAround} />
          <ambientLight intensity={2} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default AvatarStanding;
