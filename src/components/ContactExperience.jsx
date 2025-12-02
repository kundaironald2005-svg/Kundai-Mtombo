import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { Computer } from "./Models/Computer-optimized.jsx";

const ContactExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    const keyLightIntensity = isTablet ? 1.2 : 2.5;
    const fillLightIntensity = isTablet ? 0.4 : 0.5;

    return (
        <Canvas
            shadows={!isTablet}
            dpr={[1, 1.5]}
            gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
            camera={{ position: [0, 3, 7], fov: 45 }}
        >
            <ambientLight intensity={fillLightIntensity} color="#fff4e6" />

            <directionalLight position={[5, 5, 3]} intensity={keyLightIntensity} color="#ffd9b3" />

            <directionalLight
                position={[5, 9, 1]}
                castShadow={!isTablet}
                intensity={keyLightIntensity}
                color="#ffd9b3"
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                    receiveShadow={!isTablet}
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#a46b2d" />
                </mesh>
            </group>

            <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isTablet}>
                <Suspense fallback={null}>
                    <Computer />
                </Suspense>
            </group>
        </Canvas>
    );
};

export default ContactExperience;
