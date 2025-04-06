import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// Neural Network Node component
interface NodeProps {
  position: [number, number, number];
  color: string;
  hovered?: boolean;
  label?: string;
  showLabels?: boolean;
}

const Node: React.FC<NodeProps> = ({ position, color, hovered = false, label, showLabels = false }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={hovered ? 2 : 0.5} 
        />
      </mesh>
      {showLabels && label && (
        <Html position={[0.1, 0.1, 0]} distanceFactor={10}>
          <div className="bg-white/70 dark:bg-dark/70 p-1 rounded text-xs">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// Connection between nodes
interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  width?: number;
  opacity?: number;
  pulse?: boolean;
}

const Connection: React.FC<ConnectionProps> = ({ 
  start, 
  end, 
  color, 
  width = 1, 
  opacity = 0.5,
  pulse = false
}) => {
  const lineRef = useRef<any>();
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end]);
  
  useFrame(({ clock }) => {
    if (pulse && lineRef.current?.material) {
      lineRef.current.material.opacity = 
        opacity * (0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.5);
    }
  });
  
  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={width}
      transparent
      opacity={opacity}
    />
  );
};

// Create layer of nodes
const createLayer = (nodesCount: number, x: number, color: string, showLabels: boolean): JSX.Element[] => {
  return Array.from({ length: nodesCount }).map((_, i) => {
    const y = (i - (nodesCount - 1) / 2) * 0.2;
    return (
      <Node 
        key={`node-${x}-${i}`} 
        position={[x, y, 0]} 
        color={color} 
        label={`N${i+1}`}
        showLabels={showLabels}
      />
    );
  });
};

// Create connections between layers
const createConnections = (
  layer1Count: number, 
  layer2Count: number, 
  layer1X: number, 
  layer2X: number, 
  color: string
): JSX.Element[] => {
  const connections: JSX.Element[] = [];
  
  for (let i = 0; i < layer1Count; i++) {
    const y1 = (i - (layer1Count - 1) / 2) * 0.2;
    
    for (let j = 0; j < layer2Count; j++) {
      const y2 = (j - (layer2Count - 1) / 2) * 0.2;
      
      // Only create some connections for cleaner visuals
      if ((i + j) % 2 === 0 || i % 3 === 0) {
        connections.push(
          <Connection 
            key={`conn-${layer1X}-${i}-${layer2X}-${j}`}
            start={[layer1X, y1, 0]}
            end={[layer2X, y2, 0]}
            color={color}
            width={0.5}
            opacity={0.2}
            pulse={(i + j) % 5 === 0}
          />
        );
      }
    }
  }
  
  return connections;
};

// Main Neural Network Model
interface NeuralNetworkModelProps {
  inputNodes?: number;
  hiddenLayers?: number[][];
  outputNodes?: number;
  showLabels?: boolean;
}

const NeuralNetworkModel: React.FC<NeuralNetworkModelProps> = ({
  inputNodes = 5,
  hiddenLayers = [[8], [6]],
  outputNodes = 4,
  showLabels = false
}) => {
  // Animation for the whole network
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  // Calculate layer positions
  const totalLayers = hiddenLayers.length + 2; // input + hidden + output
  const layerSpacing = 2 / (totalLayers - 1);
  
  // Generate layers
  const layers: JSX.Element[] = [];
  let layerX = -1; // Start at x = -1 for input layer
  
  // Input layer
  layers.push(...createLayer(inputNodes, layerX, "#6D28D9", showLabels));
  
  // Hidden layers
  for (let i = 0; i < hiddenLayers.length; i++) {
    layerX += layerSpacing;
    const layerSize = hiddenLayers[i][0];
    layers.push(...createLayer(layerSize, layerX, "#2563EB", showLabels));
  }
  
  // Output layer
  layerX += layerSpacing;
  layers.push(...createLayer(outputNodes, layerX, "#6D28D9", showLabels));
  
  // Generate connections between layers
  const connections: JSX.Element[] = [];
  layerX = -1;
  
  // Connect input to first hidden
  connections.push(...createConnections(
    inputNodes, 
    hiddenLayers[0][0], 
    layerX, 
    layerX + layerSpacing,
    "#6D28D9"
  ));
  
  // Connect hidden layers
  for (let i = 0; i < hiddenLayers.length - 1; i++) {
    const layer1X = layerX + layerSpacing * (i + 1);
    const layer2X = layer1X + layerSpacing;
    
    connections.push(...createConnections(
      hiddenLayers[i][0],
      hiddenLayers[i + 1][0],
      layer1X,
      layer2X,
      "#2563EB"
    ));
  }
  
  // Connect last hidden to output
  const lastHiddenX = layerX + layerSpacing * hiddenLayers.length;
  const outputX = lastHiddenX + layerSpacing;
  
  connections.push(...createConnections(
    hiddenLayers[hiddenLayers.length - 1][0],
    outputNodes,
    lastHiddenX,
    outputX,
    "#6D28D9"
  ));
  
  return (
    <group ref={groupRef}>
      {connections}
      {layers}
    </group>
  );
};

interface NeuralNetworkAnimationProps {
  height?: number;
}

const NeuralNetworkAnimation: React.FC<NeuralNetworkAnimationProps> = ({ height = 400 }) => {
  return (
    <div style={{ height: `${height}px` }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <NeuralNetworkModel inputNodes={5} hiddenLayers={[[8], [6]]} outputNodes={3} />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkAnimation;