import React from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[1, 1, 9]} />
      <mesh position={[0, 0, 1]}>
        <sphereBufferGeometry attach="geometry" args={[7, 16, 16]} />
        <meshStandardMaterial attach="material" color={"hotpink"} />
      </mesh>
    </Canvas>
  );
}
