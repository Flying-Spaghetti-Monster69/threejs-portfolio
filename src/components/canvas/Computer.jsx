import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./old_computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} />
      <primitive object={computer.scene} scale={1} rotation={[0.1, 0, -0.1]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableZoom={false}
        />
        <Computer />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
