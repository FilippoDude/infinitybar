
import { Canvas } from '@react-three/fiber'
import UniverseBackground from './universeBackground';
import Planet from './planet';
import { OrbitControls, Stars } from '@react-three/drei'

const Universe = () => {

    return(
          <Canvas camera={{ position: [0, 0, -15] }}>
            <ambientLight intensity={4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <UniverseBackground></UniverseBackground>
            <Planet></Planet>
            <Stars
                radius={100}       // How far stars are from center
                depth={50}         // Star field depth
                count={5000}      // Number of stars
                factor={6}         // Size factor
                saturation={0}
                fade
                />
            <OrbitControls />
          </Canvas>
    )
}

export default Universe;