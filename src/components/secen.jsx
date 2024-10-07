"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
};

const Scene = () => {
  return (
    <div
    className="canvas-container hide-scrollbar" 
    style={{
      overflowY: "scroll",
        height: "calc(100vh - 1px)", 
        width: "90vw",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 2, 10], near: 0.1, far: 1000 }}
        style={{ background: "transparent", overflow: "hidden" }}
        className="relative canvas-container "
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.5} pages={3}>
            <Model />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
