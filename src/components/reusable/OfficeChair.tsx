import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    Chair: THREE.MeshStandardMaterial;
  };
};

export function OfficeChair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "src/assets/models/office_chair.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.531}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Chair}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/models/office_chair.glb");
