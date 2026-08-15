"use client";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Float, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RobotModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/glb file/futuristic_flying_animated_robot_-_low_poly.glb");
  const { actions } = useAnimations(animations, group);

  // Interaction states
  const [isReacting, setIsReacting] = useState(false);
  const [reactionProgress, setReactionProgress] = useState(0);

  // Play built-in idle animation smoothly
  useEffect(() => {
    if (actions) {
      const names = Object.keys(actions);
      if (names.length > 0) {
        const action = actions[names[0]];
        if (action) {
          action.reset().fadeIn(0.6).play();
          action.timeScale = 1;
        }
      }
    }
  }, [actions]);

  // Click handler: natural cheerful double bounce & playful head tilt
  const handleClick = (e: any) => {
    e.stopPropagation();
    setIsReacting(true);
    setReactionProgress(1); // 1 down to 0

    if (actions) {
      const names = Object.keys(actions);
      if (names.length > 0) {
        const action = actions[names[0]];
        if (action) {
          action.timeScale = 1.3;
        }
      }
    }
  };

  // Animation Loop: Natural, smooth physical movements
  useFrame((state, delta) => {
    if (!group.current) return;

    if (isReacting && reactionProgress > 0) {
      setReactionProgress((prev) => Math.max(0, prev - delta * 1.5));
      const p = 1 - reactionProgress; // 0 to 1

      // Joyful natural double bounce (realistic physics curve)
      const bounceHeight = Math.sin(p * Math.PI) * 0.16 + Math.sin(p * Math.PI * 2) * 0.06;
      // Gentle playful head-tilt
      const wiggleZ = Math.sin(p * Math.PI * 3) * 0.09;
      // Cute subtle nod
      const nodX = Math.sin(p * Math.PI * 2) * 0.06;

      group.current.position.y = -0.8 + bounceHeight;
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, wiggleZ, 8, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, nodX, 8, delta);

      if (reactionProgress <= 0.02) {
        setIsReacting(false);
        if (actions) {
          const names = Object.keys(actions);
          if (names.length > 0) {
            const action = actions[names[0]];
            if (action) action.timeScale = 1;
          }
        }
      }
    } else {
      // Return smoothly to resting state
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, -0.8, 3.5, delta);
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, 0, 4, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0, 4, delta);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={group} dispose={null} onClick={handleClick}>
        <primitive object={scene} scale={2.5} position={[0, -0.8, 0]} rotation={[0, Math.PI / 7, 0]} />
      </group>
    </Float>
  );
}

useGLTF.preload("/glb file/futuristic_flying_animated_robot_-_low_poly.glb");

export default function RobotCanvas() {
  return (
    <div className="w-full h-full select-none cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[10, 10, 5]} intensity={2.4} />
        <directionalLight position={[-10, 10, -5]} intensity={1.4} color="#00a884" />
        <Environment preset="city" />

        {/* Smooth Drag & Rotate OrbitControls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.06}
          rotateSpeed={0.8}
          minPolarAngle={Math.PI / 2.7}
          maxPolarAngle={Math.PI / 1.7}
        />

        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
