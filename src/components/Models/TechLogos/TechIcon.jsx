import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useEffect} from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
    // Defensive guard: don't render if missing model or path
    if (!model?.modelPath) return null;

    // Inner component so useGLTF runs within Canvas' R3F context
    const ModelContent = () => {
        const gltf = useGLTF(model.modelPath);

        useEffect(() => {
            if (model.name === 'Interactive Developer') {
                gltf.scene.traverse((child) => {
                    if (child.isMesh && child.name === 'object 5') {
                        child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                        child.receiveShadow = true;
                    }
                })
            }
        }, [gltf, model])

        return (
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={gltf.scene} />
                </group>
            </Float>
        );
    }

    return (
        <Canvas dpr={[1, 1.5]} gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />

            <OrbitControls enableZoom={false} />

            <Suspense fallback={null}>
                <ModelContent />
            </Suspense>
        </Canvas>
    )
}
export default TechIcon