import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useEffect} from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
    // Defensive guard: don't render if missing model or path
    if (!model?.modelPath) return null;

    const gltf = useGLTF(model.modelPath);

    useEffect(() => {
        // Minor fix: match correct casing from constants ("Interactive Developer")
        if(model.name === 'Interactive Developer') {
            gltf.scene.traverse((child) => {
                if(child.isMesh && child.name === 'object 5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white'
                    })
                    child.receiveShadow = true;
                }
            })
        }
    }, [gltf, model])

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />

            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={gltf.scene} />
                </group>
            </Float>
        </Canvas>
    )
}
export default TechIcon