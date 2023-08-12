import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar } from "../reusable/Avatar";
import { Canvas } from "@react-three/fiber";
import { OfficeChair } from "../reusable/OfficeChair";
import { Suspense } from "react";
import CanvasLoader from "../reusable/CanvasLoader";
import { IconMouse } from "@tabler/icons-react";

type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  const [lookAtPointer, setLookAtPointer] = useState(false);

  return (
    <section className={`${isDarkMode ? "dark" : ""} relative w-full h-screen`}>
      <div className="absolute inset-0 top-[120px] items-start">
        <div className="flex flex-col justify-center items-center h-[80vh] gap-9">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-bold text-center"
          >
            Hi, I'm
            <span className="text-royal-blue-100"> Abdul!</span>
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            I'm a Software Engineer.
          </motion.h4>
          <motion.div
            className="w-[60vw] h-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [null, 1.4, 1] }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
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
          </motion.div>
          <IconMouse className="animate-bounce h-12 w-12" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
