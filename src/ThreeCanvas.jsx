import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Edges, PerspectiveCamera, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function DataBrain() {
  const coreRef = useRef()
  const ringRef = useRef()
  const particlesRef = useRef()

  // Criar 40 pequenas partículas de dados
  const particles = useMemo(() => {
    return new Array(40).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      size: 0.1 + Math.random() * 0.2
    }))
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2
      coreRef.current.rotation.y = time * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5
      ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <group scale={0.85}>
      {/* Central Intelligence Sphere - Low Poly & Distorted */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <MeshDistortMaterial
          color="#1a5b73"
          speed={2}
          distort={0.4}
          roughness={0.1}
          metalness={1}
          emissive="#00e5ff"
          emissiveIntensity={0.2}
        />
        <Edges color="#ffffff" />
      </mesh>

      {/* Halo Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ff007f" transparent opacity={0.6} />
      </mesh>

      {/* Floating Data Cubes */}
      {particles.map((p, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[p.position[0] * 0.8, p.position[1] * 0.8, p.position[2] * 0.8]}>
            <boxGeometry args={[p.size, p.size, p.size]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#00e5ff" : "#ffffff"} flatShading={true} />
            <Edges color="#1a5b73" />
          </mesh>
        </Float>
      ))}

      {/* Connecting Neural Lines */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="#00e5ff" wireframe={true} transparent opacity={0.05} />
      </mesh>

      <Text
        position={[0, -5.5, 0]}
        fontSize={0.6}
        color="#1a5b73"
        fontWeight="900"
        anchorX="center"
      >

      </Text>
    </group>
  )
}

export default function ThreeCanvas() {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={35} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, 10]} intensity={1} color="#ff007f" />
        <DataBrain />
      </Canvas>
    </div>
  )
}
