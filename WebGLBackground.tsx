
'use client'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
export default function WebGLBackground(){
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.6}/>
      <Sphere args={[1,64,64]} scale={2.6}>
        <MeshDistortMaterial color="#6366f1" distort={0.5} speed={2}/>
      </Sphere>
    </Canvas>
  )
}
