import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random positions for particles
const generateParticles = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const z = Math.random() * 2 - 1;
    const x = Math.sqrt(1 - z * z) * Math.cos(angle) * radius;
    const y = Math.sqrt(1 - z * z) * Math.sin(angle) * radius;
    
    positions[i3] = x * (0.5 + Math.random() * 0.5); // x
    positions[i3 + 1] = y * (0.5 + Math.random() * 0.5); // y
    positions[i3 + 2] = z * (0.5 + Math.random() * 0.5) * radius; // z
  }
  
  return positions;
};

interface ParticleCloudProps {
  count: number;
  radius: number;
  color: string;
}

const ParticleCloud: React.FC<ParticleCloudProps> = ({ count, radius, color }) => {
  const points = useRef<THREE.Points>(null!);
  
  const particlePositions = useMemo(() => {
    return generateParticles(count, radius);
  }, [count, radius]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    
    if (points.current) {
      points.current.rotation.x = Math.sin(time * 0.3) * 0.05;
      points.current.rotation.y = Math.sin(time * 0.2) * 0.05;
    }
  });
  
  return (
    <Points ref={points} positions={particlePositions} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent
        color={color}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

interface NetworkVisualizationProps {
  count?: number;
  radius?: number;
  mainColor?: string;
  secondaryColor?: string;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
  count = 1000,
  radius = 1.5,
  mainColor = "#6D28D9",
  secondaryColor = "#2563EB"
}) => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.1} />
      <ParticleCloud count={count} radius={radius} color={mainColor} />
      <ParticleCloud count={count / 2} radius={radius * 0.7} color={secondaryColor} />
    </Canvas>
  );
};

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
      <NetworkVisualization />
    </div>
  );
};

export default BackgroundAnimation;