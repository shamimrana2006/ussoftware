"use client";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function RobotModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/glb file/futuristic_flying_animated_robot_-_low_poly.glb");
  const { actions } = useAnimations(animations, group);
  const [actionIndex, setActionIndex] = useState(0);

  // Animation state: "IDLE", "JUMPING", "SPINNING"
  const [animPhase, setAnimPhase] = useState("IDLE");
  const [jumpProgress, setJumpProgress] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const [baseAngle, setBaseAngle] = useState(0); // Stores the random resting angle
  const [isAngry, setIsAngry] = useState(false);
  const angryColor = useRef(new THREE.Color("#ff0000"));

  // Store original materials on mount
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        if (!child.material.userData.originalColor) {
          child.material = child.material.clone();
          child.material.userData.originalColor = child.material.color.clone();
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions) {
      const names = Object.keys(actions);
      if (names.length > 0) {
        actions[names[actionIndex]]?.reset().fadeIn(0.5).play();
      }
    }
  }, [actions, actionIndex]);

  // Click handler to trigger dance
  const handleClick = (e: any) => {
    e.stopPropagation();

    // Cycle animations if there are multiple
    if (actions) {
      const names = Object.keys(actions);
      if (names.length > 1) {
        const nextIndex = (actionIndex + 1) % names.length;
        actions[names[actionIndex]]?.fadeOut(0.5);
        setActionIndex(nextIndex);
      }
    }

    // Pick a random forward angle (-45 to +45 degrees)
    const newBase = (Math.random() - 0.5) * (Math.PI / 2);
    setBaseAngle(newBase);

    // Calculate exactly one full spin plus the new base angle
    if (group.current) {
      const currentSpins = Math.floor(group.current.rotation.y / (Math.PI * 2));
      setTargetRotation((currentSpins + 1) * Math.PI * 2 + newBase);
    }

    // Trigger sequential animation, allowing interruption of spin
    setAnimPhase("JUMPING");
    setJumpProgress(1); // 1 means full sequence remaining

    // Make it angry
    setIsAngry(true);
    setTimeout(() => {
      setIsAngry(false);
    }, 2000);
  };

  // Hover handler to trigger a single spin
  const handlePointerEnter = () => {
    document.body.style.cursor = 'pointer';
    if (animPhase === "IDLE" && group.current) {
      const newBase = (Math.random() - 0.5) * (Math.PI / 2);
      setBaseAngle(newBase);
      const currentSpins = Math.floor(group.current.rotation.y / (Math.PI * 2));
      setTargetRotation((currentSpins + 1) * Math.PI * 2 + newBase);
      setAnimPhase("SPINNING");
    }
  };

  // Manual Animation Sequence Loop
  useFrame((state, delta) => {
    if (!group.current) return;

    // Smooth Color Lerp for Angry Mode
    scene.traverse((child: any) => {
      if (child.isMesh && child.material && child.material.userData.originalColor) {
        const orig = child.material.userData.originalColor;
        if (orig.r < 0.25 && orig.g < 0.25 && orig.b < 0.25) {
          const targetColor = isAngry ? angryColor.current : orig;
          // Lerp the color smoothly
          child.material.color.lerp(targetColor, delta * 5);
        }
      }
    });

    if (animPhase === "JUMPING") {
      if (jumpProgress > 0) {
        // Decrease progress (jump takes ~0.8 seconds)
        setJumpProgress((prev) => Math.max(0, prev - delta * 1.25));

        const p = 1 - jumpProgress; // 0 to 1
        let height = 0;

        // 0 to 0.75: Main Jump (Lower height: 0.7)
        if (p < 0.75) {
          const jumpP = p / 0.75;
          height = Math.sin(jumpP * Math.PI) * 0.7;
        }
        // 0.75 to 1: Small Bounce (Height: 0.2)
        else {
          const bounceP = (p - 0.75) / 0.25;
          height = Math.sin(bounceP * Math.PI) * 0.2;
        }

        group.current.position.y = -0.8 + height;
      } else {
        // Jump finished, transition to SPINNING
        group.current.position.y = -0.8;
        setAnimPhase("SPINNING");
      }
    } else if (animPhase === "SPINNING") {
      // Smoothly rotate towards the target rotation
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotation, 5, delta);

      // Check if spin is complete
      if (Math.abs(group.current.rotation.y - targetRotation) < 0.01) {
        group.current.rotation.y = targetRotation; // snap to exact
        setAnimPhase("IDLE");
      }
    } else {
      // IDLE: Ensure it settles exactly at base height and base angle
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, -0.8, 4, delta);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotation, 4, delta);
    }

    // Angry tantrum logic (whole body wobble instead of breaking bones)
    if (isAngry && group.current) {
      const time = state.clock.elapsedTime * 30; // Fast oscillation
      // Add chaotic wiggling/shaking to the entire body to prevent mesh detachment
      group.current.rotation.z = Math.sin(time) * 0.15;
      group.current.rotation.x = Math.cos(time * 1.2) * 0.15;

      // Speed up built-in animations
      if (actions) {
        Object.values(actions).forEach(action => {
          if (action) action.timeScale = 4;
        });
      }
    } else if (group.current) {
      // Smoothly return body to upright
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, 0, 5, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0, 5, delta);

      // Reset animation speed
      if (actions) {
        Object.values(actions).forEach(action => {
          if (action) action.timeScale = 1;
        });
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={group} dispose={null} onClick={handleClick} onPointerEnter={handlePointerEnter} onPointerLeave={() => document.body.style.cursor = 'default'}>
        {/* Increased scale for a larger robot presence */}
        <primitive object={scene} scale={2.5} position={[0, -0.8, 0]} rotation={[0, Math.PI / 6, 0]} />
      </group>
    </Float>
  );
}

useGLTF.preload("/glb file/futuristic_flying_animated_robot_-_low_poly.glb");

export default function RobotCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, 10, -5]} intensity={1.5} color="#00a884" />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
