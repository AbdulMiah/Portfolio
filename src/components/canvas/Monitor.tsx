import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    group_0_Material001_0: THREE.Mesh;
    group_0001_Material001_0: THREE.Mesh;
    group_0002_layar_0: THREE.Mesh;
    SketchUp_material_0: THREE.Mesh;
    SketchUp001_Material002_0: THREE.Mesh;
    SketchUp002_Material003_0: THREE.Mesh;
    SketchUp003_Material002_0: THREE.Mesh;
    SketchUp004_Material003_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    layar: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

type MonitorProp = {
  demo: HTMLVideoElement;
} & JSX.IntrinsicElements["group"];

export function Monitor(props: MonitorProp) {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF("models/monitor.glb") as GLTFResult;

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.063, 0.06, 0.06]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[2.803, -38.914, -25.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.464}
          >
            <mesh
              geometry={nodes.SketchUp_material_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.group_0_Material001_0.geometry}
              material={materials["Material.001"]}
              position={[2.722, 0.301, 10.79]}
            />
            <mesh
              geometry={nodes.group_0001_Material001_0.geometry}
              material={materials["Material.001"]}
              position={[2.442, 6.74, 10.749]}
            />
            <mesh
              geometry={nodes.group_0002_layar_0.geometry}
              material={materials.layar}
              position={[3.567, -0.002, 11.668]}
            />
            <mesh
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              position={[3.59, 0, 11.7]}
            >
              <planeGeometry args={[29.5, 15.1]} />
              <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[props.demo]} />
              </meshStandardMaterial>
            </mesh>
          </group>
          <mesh
            geometry={nodes.SketchUp001_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.878, -35.716, -9.286]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.464}
          />
          <mesh
            geometry={nodes.SketchUp002_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[0.878, -35.716, -9.286]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.464}
          />
          <mesh
            geometry={nodes.SketchUp003_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[3.454, 183.431, -24.237]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.464}
          />
          <mesh
            geometry={nodes.SketchUp004_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[0.878, -35.716, -9.286]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.464}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/monitor.glb");
