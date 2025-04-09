import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const animationRef = useRef<number | null>(null);
  
  // Intersection Observer to only animate when visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isVisible) return;

    // Scene setup with better quality
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      precision: shouldReduceMotion ? 'mediump' : 'highp', // Reduce quality if reduced motion
      powerPreference: 'high-performance'
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Neural Network Nodes - Optimized count
    const nodeCount = shouldReduceMotion ? 40 : 60; // Reduce nodes for reduced motion
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.06, shouldReduceMotion ? 16 : 32, shouldReduceMotion ? 16 : 32);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a9eff,
      emissive: 0x4a9eff,
      emissiveIntensity: 0.2,
      shininess: 90,
      specular: 0x4a9eff
    });

    // Create nodes in a more structured pattern
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      // Create a more organized distribution
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      node.position.set(
        20 * Math.cos(theta) * Math.sin(phi),
        20 * Math.sin(theta) * Math.sin(phi),
        20 * Math.cos(phi)
      );
      nodes.push(node);
      scene.add(node);
    }

    // Use fewer connections for better performance
    const connections: THREE.Line[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a9eff,
      transparent: true,
      opacity: 0.15,
    });

    // Optimize connection creation - limit the number of connections
    const connectionLimit = shouldReduceMotion ? 100 : 200;
    let connectionCount = 0;
    
    // Only create connections between closer nodes
    for (let i = 0; i < nodeCount && connectionCount < connectionLimit; i++) {
      for (let j = i + 1; j < nodeCount && connectionCount < connectionLimit; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 10) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          connections.push(line);
          scene.add(line);
          connectionCount++;
        }
      }
    }

    // Background stars - optimized count
    const starCount = shouldReduceMotion ? 300 : 500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    
    // Pre-compute random positions instead of in animation loop
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 100;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = radius * Math.cos(phi);

      // Create subtle color variations
      const brightness = Math.random() * 0.2 + 0.8;
      starColors[i3] = brightness;
      starColors[i3 + 1] = brightness;
      starColors[i3 + 2] = brightness;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4a9eff, 0.8);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 40;

    // Smooth animation with throttling for performance
    let time = 0;
    let lastUpdateTime = 0;
    const updateInterval = shouldReduceMotion ? 1000/30 : 1000/60; // Lower FPS for reduced motion
    
    const animate = (currentTime: number) => {
      if (!isVisible) return;
      
      animationRef.current = requestAnimationFrame(animate);
      
      // Throttle updates for better performance
      const deltaTime = currentTime - lastUpdateTime;
      if (deltaTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      time += 0.001;

      // Only update node positions every other frame for better performance
      if (Math.floor(currentTime / 1000) % 2 === 0) {
        // Smooth node movement
        nodes.forEach((node, index) => {
          const offset = index * 0.1;
          node.position.y += Math.sin(time + offset) * 0.01;
          node.rotation.x += 0.001;
          node.rotation.y += 0.001;
        });
  
        // Update connections - the expensive part, do it less frequently
        if (Math.floor(currentTime / 2000) % 2 === 0) {
          connections.forEach((line, index) => {
            const sourceNodeIndex = Math.floor(index / (nodeCount / 10));
            const targetNodeIndex = index % (nodeCount - 1);
            
            if (nodes[sourceNodeIndex] && nodes[targetNodeIndex]) {
              line.geometry.setFromPoints([
                nodes[sourceNodeIndex].position, 
                nodes[targetNodeIndex].position
              ]);
            }
          });
        }
      }

      // Rotate star field very slowly - cheap operation
      starField.rotation.y += 0.0001;
      
      renderer.render(scene, camera);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Handle resize with debouncing to prevent excessive calculations
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = window.setTimeout(() => {
        if (!containerRef.current) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
      }, 250); // Debounce for 250ms
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // Cleanup
    return () => {
      // Cancel animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Remove resize listener
      window.removeEventListener('resize', handleResize);
      
      // Only proceed with cleanup if container exists
      if (!containerRef.current) return;
      
      // Remove canvas
      containerRef.current.removeChild(renderer.domElement);
      
      // Dispose geometries and materials
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      
      nodes.forEach((node) => {
        scene.remove(node);
      });
      
      connections.forEach((line) => {
        scene.remove(line);
        line.geometry.dispose();
      });
      
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [isVisible, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[#000814]"
      style={{ contain: 'paint layout' }} // Improve performance with CSS containment
    />
  );
}