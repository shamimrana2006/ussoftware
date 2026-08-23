"use client";

import React, { Suspense, useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Copy, Check, Sliders, RefreshCw, X } from "lucide-react";

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
  metalness = 0.88,
  roughness = 0.16,
  enableSway = true
}: {
  defaultAngle?: number;
  scale?: number;
  metalness?: number;
  roughness?: number;
  enableSway?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/glb file/Home.glb");

  // Dynamic Live Metallic Shader Setup
  const preparedScene = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          mat.metalness = metalness;
          mat.roughness = roughness;
          mat.needsUpdate = true;
          mesh.material = mat;
        }
      }
    });
    return cloned;
  }, [scene, metalness, roughness]);

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
    camX: 1.653,
    camY: 0.98,
    camZ: 5.329,
    rotX: -0.218,
    rotY: 0.302,
    rotZ: 0.066
  });

  // Interactive Live Metal Controls State (Set to user chosen default)
  const [metalness, setMetalness] = useState<number>(0.88);
  const [roughness, setRoughness] = useState<number>(0.16);
  const [lightIntensity, setLightIntensity] = useState<number>(5.5);

  // Popup Minimized/Open state (default minimized as small compact button)
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const dataString = `Camera Position: [${coords.camX}, ${coords.camY}, ${coords.camZ}]\nCamera Rotation: [${coords.rotX}, ${coords.rotY}, ${coords.rotZ}]\nMetalness: ${metalness}\nRoughness: ${roughness}\nLight Intensity: ${lightIntensity}`;
    navigator.clipboard.writeText(dataString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setMetalness(0.88);
    setRoughness(0.16);
    setLightIntensity(5.5);
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
            position: [1.653, 0.98, 5.329],
            fov: 38
          }}
        >
          {/* Live Coordinate Tracker */}
          <CoordinateTracker onValuesUpdate={setCoords} />

          {/* Dynamic Studio Lighting with Live Intensity */}
          <ambientLight intensity={1.6} />
          <hemisphereLight args={["#e0f2fe", "#f8fafc", 1.3]} />

          {/* Main Sunlight */}
          <directionalLight
            position={[8, 14, 7]}
            intensity={lightIntensity}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* Cool Sky Fill Light */}
          <directionalLight
            position={[-8, 6, -3]}
            intensity={lightIntensity * 0.45}
            color="#38bdf8"
          />

          {/* Top Rim Light */}
          <directionalLight
            position={[0, 9, -7]}
            intensity={lightIntensity * 0.4}
            color="#f8fafc"
          />

          {/* Warm Interior Accent Lights */}
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
                  metalness={metalness}
                  roughness={roughness}
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

      {/* FLOATING 3D & METAL CONTROLLER POPUP (MINIMIZED AS A SMALL BUTTON BY DEFAULT) */}
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute bottom-6 right-6 z-40 bg-slate-900/90 hover:bg-slate-900 border border-slate-700/80 text-white px-3.5 py-2.5 rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-all cursor-pointer select-none group pointer-events-auto"
          title="Open 3D & Metal Controls"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Sliders size={14} className="text-emerald-400 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-bold text-slate-200">3D Controls</span>
        </button>
      ) : (
        <div className="absolute bottom-6 right-6 z-40 bg-slate-900/95 hover:bg-slate-900 backdrop-blur-xl border border-slate-700/80 text-white rounded-2xl p-4 shadow-[0_16px_50px_rgba(0,0,0,0.5)] w-80 transition-all pointer-events-auto select-none animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between gap-3 mb-2.5 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sliders size={14} className="text-emerald-400" />
              <span className="text-xs font-black tracking-wide uppercase text-slate-200">
                3D & Metal Controls
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleReset}
                className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
                title="Reset Metal Values"
              >
                <RefreshCw size={10} />
                <span>Reset</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                title="Minimize / Close"
              >
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Real-time Position (X, Y, Z) */}
          <div className="space-y-1.5 text-xs font-mono mb-3">
            <div className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800/80">
              <span className="text-slate-400 text-[11px] font-sans font-bold">Position:</span>
              <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                <span>X:<strong className="text-white">{coords.camX}</strong></span>
                <span>Y:<strong className="text-white">{coords.camY}</strong></span>
                <span>Z:<strong className="text-white">{coords.camZ}</strong></span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800/80">
              <span className="text-slate-400 text-[11px] font-sans font-bold">Rotation:</span>
              <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                <span>X:<strong className="text-white">{coords.rotX}</strong></span>
                <span>Y:<strong className="text-white">{coords.rotY}</strong></span>
                <span>Z:<strong className="text-white">{coords.rotZ}</strong></span>
              </div>
            </div>
          </div>

          {/* LIVE METAL CONTROLLER SLIDERS */}
          <div className="space-y-2.5 mb-3.5 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60 text-xs">
            {/* Metalness Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                <span className="text-slate-300">Metalness (মেটাল ঘনত্ব):</span>
                <span className="text-emerald-400 font-mono font-black">{metalness.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.02"
                value={metalness}
                onChange={(e) => setMetalness(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#008744]"
              />
            </div>

            {/* Roughness Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                <span className="text-slate-300">Roughness (ম্যাটি/গ্লস):</span>
                <span className="text-cyan-400 font-mono font-black">{roughness.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.02"
                value={roughness}
                onChange={(e) => setRoughness(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#38bdf8]"
              />
            </div>

            {/* Light Intensity Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                <span className="text-slate-300">Light (আলোর তীব্রতা):</span>
                <span className="text-amber-400 font-mono font-black">{lightIntensity.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.5"
                step="0.1"
                value={lightIntensity}
                onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
              />
            </div>
          </div>

          {/* Copy All Values Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
              copied
                ? "bg-emerald-600 text-white shadow-emerald-500/20"
                : "bg-[#008744] hover:bg-[#007038] text-white active:scale-98"
            }`}
          >
            {copied ? (
              <>
                <Check size={14} className="stroke-[3]" />
                <span>Copied All Values!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy XYZ & Metal Values</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
