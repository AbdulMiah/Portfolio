import { Html, useProgress } from "@react-three/drei";
import { IconWhirl } from "@tabler/icons-react";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html className="flex space-x-2">
      <IconWhirl className="animate-spin" />
      <span style={{ fontSize: 14, fontWeight: 800 }}>
        {progress.toFixed(1)}%
      </span>
    </Html>
  );
}

export default CanvasLoader;
