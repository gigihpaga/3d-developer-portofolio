/* eslint-disable react/no-unknown-property */
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as MathRandom from 'maath/random/dist/maath-random.esm';

const StarsModel = (props) => {
    const startModelRef = useRef();
    const sphere = MathRandom.inSphere(new Float32Array(5000), { radius: 1.2 });
    useFrame((state, delta) => {
        startModelRef.current.rotation.x -= delta / 10;
        startModelRef.current.rotation.y -= delta / 50;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={startModelRef} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    deptWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div id="StarsCanvas" className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarsModel />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
