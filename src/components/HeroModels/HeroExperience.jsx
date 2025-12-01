import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import { Model as Macbook } from "./Macbook.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <Canvas camera={{ position: [0,0,15], fov: 45
        }}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights />
            {/* Increased particle count for a denser effect */}
            <Particles count={2000} />
            <group
                // Increase scale so the MacBook appears larger in the hero scene
                scale={isTablet ? 7 : 12}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Macbook />
            </group>
        </Canvas>
    )
}
export default HeroExperience
