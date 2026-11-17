"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork() {
  const ref = useRef<THREE.Points>(null!);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 * Math.pow(Math.random(), 1 / 3);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPositions(pos);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
    if (ref.current.material) {
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.2 + 0.8 * Math.abs(Math.sin(state.clock.getElapsedTime() * 2));
    }
  });

  if (!positions) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function HeroBackground() {
  return (
      <div className="absolute inset-0 -z-10 bg-[#020b0e] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <NeuralNetwork />
        </Canvas>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_30%,rgba(6,182,212,0.18),transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020b0e]/40 to-[#020b0e] pointer-events-none" />
      </div>
      );
}
