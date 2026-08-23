"use client";

import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Copy, Check, Eye } from "lucide-react";

// Live Coordinate Tracker Component inside Three.js Canvas
function CoordinateTracker({
  onValuesUpdate
}: {
  onValuesUpdate: (vals: {
    camX: number;
    camY: number;
    camZ: number;
    rotX: number;
    rotY: number;
    rotZ: number;
  }) => void;
}) {
  const lastUpdateRef = useRef(0);

  useFrame((state) => {
    const now = performance.now();
    // Update every 50ms for smooth 20fps tracker updates without overloading React
    if (now - lastUpdateRef.current > 50) {
      lastUpdateRef.current = now;
      const cam = state.camera;
      onValuesUpdate({
        camX: parseFloat(cam.position.x.toFixed(3)),
        camY: parseFloat(cam.position.y.toFixed(3)),
        camZ: parseFloat(cam.position.z.toFixed(3)),
        rotX: parseFloat(cam.rotation.x.toFixed(3)),
        rotY: parseFloat(cam.rotation.y.toFixed(3)),
        rotZ: parseFloat(cam.rotation.z.toFixed(3)),
      });
    }
  });

  return null;
}

function HouseModel({
  defaultAngle = 0.52,
  scale = 1.95,
  enableSway = true
}: {
  defaultAngle?: number;
  scale?: number;
  enableSway?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/glb file/Home.glb");

  // Premium Metallic Chrome Material Setup
  const preparedScene = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          mat.metalness = 0.76;
          mat.roughness = 0.26;
          mat.needsUpdate = true;
          mesh.material = mat;
        }
      }
    });
    return cloned;
  }, [scene]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (groupRef.current && enableSway) {
      // Gentle vertical floating breath
      groupRef.current.position.y = Math.sin(time * 1.2) * 0.02;
      // Gentle horizontal sway around the exact 3/4 isometric angle
      groupRef.current.rotation.y = defaultAngle + Math.sin(time * 0.75) * 0.045;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <Center top>
        <primitive
          object={preparedScene}
          scale={scale}
          rotation={[0, defaultAngle, 0]}
        />
      </Center>
    </group>
  );
}

useGLTF.preload("/glb file/Home.glb");

interface HouseCanvasProps {
  className?: string;
}

export default function HouseCanvas({ className = "" }: HouseCanvasProps) {
  // Visual reference matched angle and positioning
  const defaultAngleRad = 0.52;
  const posX = -0.05;
  const posY = -0.80;
  const modelScale = 1.95;

  // Real-time Coordinate State (Set to user chosen default)
  const [coords, setCoords] = useState({
    camX: 2.142,
    camY: 1.145,
    camZ: 5.106,
    rotX: -0.258,
    rotY: 0.394,
    rotZ: 0.101
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const dataString = `Camera Position: [${coords.camX}, ${coords.camY}, ${coords.camZ}]\nCamera Rotation: [${coords.rotX}, ${coords.rotY}, ${coords.rotZ}]`;
    navigator.clipboard.writeText(dataString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas matched to perspective */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing transform-gpu translate-y-16 sm:translate-y-20 lg:translate-y-24">
        <Canvas
          dpr={[1, 2]}
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            alpha: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.35
          }}
          camera={{
            position: [2.142, 1.145, 5.106],
            fov: 38
          }}
        >
          {/* Live Coordinate Tracker */}
          <CoordinateTracker onValuesUpdate={setCoords} />

          {/* Studio Balanced Lighting with Metallic Highlights */}
          <ambientLight intensity={1.8} />
          <hemisphereLight args={["#e0f2fe", "#f8fafc", 1.4]} />

          {/* Main Key Sunlight (Casts crisp ground shadows) */}
          <directionalLight
            position={[8, 14, 7]}
            intensity={3.4}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* Cool Cyan Accent Fill Light for Metallic Edges */}
          <directionalLight
            position={[-8, 6, -3]}
            intensity={1.6}
            color="#38bdf8"
          />

          {/* Emerald Brand Rim Light */}
          <directionalLight
            position={[0, 8, -7]}
            intensity={1.4}
            color="#34d399"
          />

          {/* Warm Interior Accent Point Lights */}
          <pointLight position={[-2.5, 3.5, 2.5]} intensity={2.0} color="#fef08a" />
          <pointLight position={[2.5, 1.2, -2.5]} intensity={1.4} color="#67e8f9" />

          {/* Professional Damped Momentum Drag System (UNCHANGED) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.06}
            rotateSpeed={0.8}
            autoRotate={false}
            target={[posX, posY + 0.60, 0]}
            minPolarAngle={Math.PI / 3.4}
            maxPolarAngle={Math.PI / 2.05}
          />

          <Suspense fallback={null}>
            <Float
              speed={1.5}
              rotationIntensity={0.03}
              floatIntensity={0.10}
              floatingRange={[-0.02, 0.02]}
            >
              <group position={[posX, posY, 0]}>
                <HouseModel
                  defaultAngle={defaultAngleRad}
                  scale={modelScale}
                  enableSway={true}
                />
              </group>
            </Float>

            {/* Soft Ambient Ground Contact Shadow */}
            <ContactShadows
              position={[posX, posY - 0.03, 0]}
              opacity={0.5}
              scale={9.8}
              blur={2.4}
              far={4.0}
              color="#0f172a"
            />
          </Suspense>
        </Canvas>
      </div>

      {/* FLOATING LIVE COORDINATE POPUP (REAL-TIME X, Y, Z WITH ONE-CLICK COPY) */}
      <div className="absolute bottom-6 right-6 z-40 bg-slate-900/90 hover:bg-slate-900 backdrop-blur-xl border border-slate-700/80 text-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] max-w-xs transition-all pointer-events-auto select-none">
        <div className="flex items-center justify-between gap-3 mb-2.5 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-black tracking-wide uppercase text-slate-200">
              Live 3D Coordinates
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
            Drag to update
          </span>
        </div>

        {/* Real-time Position (X, Y, Z) */}
        <div className="space-y-1.5 text-xs font-mono mb-3">
          <div className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 text-[11px] font-sans font-bold">Position:</span>
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <span>X: <strong className="text-white">{coords.camX}</strong></span>
              <span>Y: <strong className="text-white">{coords.camY}</strong></span>
              <span>Z: <strong className="text-white">{coords.camZ}</strong></span>
            </div>
          </div>

          {/* Real-time Rotation (X, Y, Z) */}
          <div className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 text-[11px] font-sans font-bold">Rotation:</span>
            <div className="flex items-center gap-2 font-bold text-cyan-300">
              <span>X: <strong className="text-white">{coords.rotX}</strong></span>
              <span>Y: <strong className="text-white">{coords.rotY}</strong></span>
              <span>Z: <strong className="text-white">{coords.rotZ}</strong></span>
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
            copied
              ? "bg-emerald-600 text-white shadow-emerald-500/20"
              : "bg-[#008744] hover:bg-[#007038] text-white active:scale-98"
          }`}
        >
          {copied ? (
            <>
              <Check size={14} className="stroke-[3]" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy XYZ Values</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
