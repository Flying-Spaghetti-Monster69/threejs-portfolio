import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./computer_stack/scene.gltf");

  useEffect(() => {
    useGLTF.preload(computer); // Preload the specific model
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={50} color="green" />
      <primitive object={computer.scene} position={[-0.25, -1.7, 0]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
          maxAzimuthAngle={isMobile ? Math.PI / 4 : Math.PI / 8}
          minAzimuthAngle={isMobile ? -Math.PI / 4 : -Math.PI / 8}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
