// Model Author: Mad_Lobster_Workshop (https://sketchfab.com/Mad_Lobster_Workshop)

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.Mesh;
  };
  materials: {
    Antique_1930s_Rotary_Telephone_Emergency_Red: THREE.MeshStandardMaterial;
  };
};

export function RetroTelephone(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>(null);

  const { nodes, materials } = useGLTF(
    "models/retro_telephone.glb"
  ) as GLTFResult;

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Antique_1930s_Rotary_Telephone_Emergency_Red}
        position={[0.003, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/retro_telephone.glb");
