"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

// --- Particle Field Component ---
function ParticleField({ count = 2000, mouse }: { count?: number; mouse: { x: MotionValue<number>; y: MotionValue<number> } }) {
    const points = useRef<THREE.Points>(null!);

    // Generate random positions for particles
    const [positions, setPositions] = useState<Float32Array | null>(null);

    useEffect(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20; // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
        }
        setPositions(pos);
    }, [count]);



    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate the entire field slowly
        if (points.current) {
            points.current.rotation.x = time * 0.05;
            points.current.rotation.y = time * 0.03;

            // Subtle parallax based on mouse
            const mouseX = mouse.x.get();
            const mouseY = mouse.y.get();
            points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouseX * 0.5, 0.1);
            points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouseY * 0.5, 0.1);
        }
    });

    if (!positions) return null;

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3A8DFF"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

// --- Network Mesh Component ---
function NetworkMesh({ mouse }: { mouse: { x: MotionValue<number>; y: MotionValue<number> } }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    // Create a geometry that looks like a network (icosahedron is good for this)
    const geometry = useMemo(() => new THREE.IcosahedronGeometry(4, 2), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            // Pulse scale
            const scale = 1 + Math.sin(time * 0.5) * 0.05;
            meshRef.current.scale.set(scale, scale, scale);

            // Rotate
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.rotation.z = time * 0.05;

            // Mouse parallax
            const mouseX = mouse.x.get();
            const mouseY = mouse.y.get();
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY * 0.2, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX * 0.2 + time * 0.1, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} geometry={geometry}>
                <meshBasicMaterial
                    color="#8A2BE2"
                    wireframe
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            {/* Inner glow mesh */}
            <mesh geometry={geometry} scale={[0.98, 0.98, 0.98]}>
                <meshBasicMaterial
                    color="#3A8DFF"
                    wireframe
                    transparent
                    opacity={0.05}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </Float>
    );
}

// --- Fog & Lighting ---
function SceneEffects() {
    return (
        <>
            <fog attach="fog" args={['#000000', 5, 20]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#3A8DFF" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#8A2BE2" />
        </>
    );
}

// --- Main Component ---
export default function MeshBackground() {
    const [isMobile, setIsMobile] = useState(false);

    // Mouse motion values for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) * 2 - 1;
        const y = -(clientY / innerHeight) * 2 + 1;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Mobile Fallback: Lightweight gradient animation
    if (isMobile) {
        return (
            <div className="absolute inset-0 overflow-hidden bg-byn-black">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-byn-black via-[#0a0a0a] to-[#111111]" />
                <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-byn-teal/10 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-byn-pink/10 rounded-full blur-[80px] animate-pulse delay-1000" />
            </div>
        );
    }

    return (
        <div
            className="absolute inset-0 z-0 bg-byn-black"
            onMouseMove={handleMouseMove}
        >
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                dpr={[1, 2]} // Optimize for high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <SceneEffects />
                <NetworkMesh mouse={{ x: springX, y: springY }} />
                <ParticleField count={1500} mouse={{ x: springX, y: springY }} />
            </Canvas>
        </div>
    );
}
