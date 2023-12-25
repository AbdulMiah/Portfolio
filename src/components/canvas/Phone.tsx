import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_59: THREE.Mesh;
  };
  materials: {
    Matt_Black_Plastic: THREE.MeshStandardMaterial;
    Silver: THREE.MeshStandardMaterial;
    Matt: THREE.MeshStandardMaterial;
    Rubber: THREE.MeshStandardMaterial;
    Phone_color: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Black_Screen: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    Plastic_Glass: THREE.MeshStandardMaterial;
    Lems: THREE.MeshStandardMaterial;
  };
};

type PhoneProp = {
  demo: HTMLVideoElement;
} & JSX.IntrinsicElements["group"];

export function Phone(props: PhoneProp) {
  const { nodes, materials } = useGLTF("models/phone.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.444, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={12.08}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.037, 0.001, 0]} scale={[1, 3, 1]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Silver}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.Matt}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Matt_Black_Plastic}
            />
            <mesh rotation={[0, 0, 0]} position={[0, 0.026, 0.0044]}>
              <planeGeometry args={[0.07, 0.05]} />
              <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[props.demo]} />
              </meshStandardMaterial>
            </mesh>
          </group>
          <group
            position={[0.046, 0.135, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.419}
          >
            <mesh
              geometry={nodes.Object_61.geometry}
              material={materials.Rubber}
            />
            <mesh
              geometry={nodes.Object_62.geometry}
              material={materials.Matt_Black_Plastic}
            />
            <mesh
              geometry={nodes.Object_63.geometry}
              material={materials.Phone_color}
            />
            <mesh
              geometry={nodes.Object_64.geometry}
              material={materials.Glass}
            />
          </group>
          <group
            position={[0.059, 0.126, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.743}
          >
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.Black_Screen}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.Phone_color}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.Matt_Black_Plastic}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Glass}
            />
          </group>
          <group
            position={[0.046, 0.124, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.696, 1.354, 2.696]}
          >
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.Phone_color}
            />
            <mesh
              geometry={nodes.Object_25.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.Plastic_Glass}
            />
          </group>
          <group
            position={[0.059, 0.143, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.419}
          >
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Rubber}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Matt_Black_Plastic}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Phone_color}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Glass}
            />
          </group>
          <group position={[0.037, 0.079, 0]}>
            <mesh
              geometry={nodes.Object_42.geometry}
              material={materials.Phone_color}
            />
            <mesh
              geometry={nodes.Object_43.geometry}
              material={materials.Black_Screen}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Matt_Black_Plastic}
            position={[0.037, 0.001, 0]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Phone_color}
            position={[0.046, 0.144, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.354}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.material}
            position={[0.046, 0.144, -0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.354}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Phone_color}
            position={[0.053, 0.135, -0.005]}
            scale={[1.047, 1.141, 1.141]}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Matt_Black_Plastic}
            position={[0.032, 0.158, 0]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Matt_Black_Plastic}
            position={[0.036, 0.154, 0.004]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.283}
          />
          <mesh
            geometry={nodes.Object_34.geometry}
            material={materials.Matt_Black_Plastic}
            position={[0.018, 0.001, 0]}
            scale={[0.946, 1, 0.946]}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.Phone_color}
            position={[0.037, 0.079, 0]}
            scale={[0.994, 1.003, 1]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.Phone_color}
            position={[0.074, 0.105, 0]}
            scale={[1, 1.033, 1]}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.Rubber}
            position={[0.037, 0.079, 0]}
            scale={[0.994, 1.003, 1]}
          />
          <mesh
            geometry={nodes.Object_45.geometry}
            material={materials.Phone_color}
            position={[0.023, 0.158, 0]}
            scale={[1, 1, 0.712]}
          />
          <mesh
            geometry={nodes.Object_49.geometry}
            material={materials.Lems}
            position={[0.059, 0.143, -0.005]}
            scale={0.001}
          />
          <mesh
            geometry={nodes.Object_51.geometry}
            material={materials.Lems}
            position={[0.046, 0.135, -0.005]}
            scale={0.001}
          />
          <mesh
            geometry={nodes.Object_53.geometry}
            material={materials.Lems}
            position={[0.046, 0.135, -0.005]}
            scale={0.001}
          />
          <mesh
            geometry={nodes.Object_55.geometry}
            material={materials.Lems}
            position={[0.059, 0.126, -0.005]}
            scale={[0.002, 0.002, 0.001]}
          />
          <mesh
            geometry={nodes.Object_57.geometry}
            material={materials.Lems}
            position={[0.059, 0.126, -0.005]}
            scale={0.001}
          />
          <mesh
            geometry={nodes.Object_47.geometry}
            material={materials.Lems}
            position={[0.059, 0.143, -0.005]}
            scale={0.001}
          />
          <mesh
            geometry={nodes.Object_59.geometry}
            material={materials.Phone_color}
            position={[0, 0.112, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/phone.glb");
