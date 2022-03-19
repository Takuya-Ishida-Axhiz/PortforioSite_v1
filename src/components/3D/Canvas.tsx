import React, { Suspense } from "react";
import { DoubleSide } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import modelPath from "../3D/takuzo.glb";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useGLTF(modelPath) as unknown as GLTF;
  useFrame(() => (gltf.scene.rotation.y += 0.005));
  return <primitive object={gltf.scene} scale={[1, 1, 1]} />;
}

export const ModelCanvas = () => {
  return (
    <Canvas camera={{ fov: 40, position: [0, 4, 5] }} shadows>
      <Suspense fallback={null}>
        {/* <PerspectiveCamera makeDefault /> */}
        <OrbitControls />
        {/* <color attach="background" args={["black"]} /> */}
        {/* <color attach="background" args={["lightsteelblue"]} /> */}
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* light */}
        {/* <directionalLight
          position={[1, 100, 2]}
          color="ffcc99"
          intensity={1.4} // 光の強さ
          // shadow-mapSize-width={2048} // 描画精度
          // shadow-mapSize-height={2048}
          castShadow
          // receiveShadow
        /> */}

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2} // 光の強さ
          shadow-mapSize-width={2048} // 描画精度
          shadow-mapSize-height={2048}
          castShadow
        />
        {/* floor */}
        {/* <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
        </mesh> */}
        {/* <Environment preset="studio" /> */}
        <Model />
      </Suspense>
    </Canvas>
  );
};
