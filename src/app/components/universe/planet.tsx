import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh, SphereGeometry } from 'three'

const Planet = () => {
  const groupRef = useRef<Group>(null)
  const planetRef = useRef<Mesh>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 
    }
  })

  return (
    <group ref={groupRef} rotation={[-0.35, 0, 0]}> {/* BY DEFAULT EVERYTHING IS CENTERED AT 0 0 0*/}
      <mesh ref={planetRef} position={[6, 0, -8]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFD322" />
      </mesh>
    </group>
  )
}

export default Planet;