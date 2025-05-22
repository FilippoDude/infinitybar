import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, SphereGeometry } from 'three'

const UniverseBackground = () => {
    const cubeRef = useRef<Mesh>(null!)

    useFrame((state, delta) => {
        if (cubeRef.current) {

        }
    })

    return(
        <mesh 
            ref={cubeRef}
                rotation={[0.4, -0.4, 0]}
                position={[2, 0, 0]}    
                scale={[5, 2, 1]}
            >
            <sphereGeometry args={[2, 64, 64]} /> 
            <meshStandardMaterial color="#310047" opacity={0.6} transparent/>
        </mesh>
    )
}

export default UniverseBackground;