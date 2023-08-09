import { Html, useProgress } from "@react-three/drei";
import { IconRotateClockwise } from "@tabler/icons-react";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html className="flex space-x-2">
      <IconRotateClockwise className="animate-spin" />
      <span style={{ fontSize: 14, fontWeight: 800 }}>
        {progress.toFixed(1)}%
      </span>
    </Html>
  );
}

export default CanvasLoader;
