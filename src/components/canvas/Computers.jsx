/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const ComputersModel = ({ isMobile }) => {
    const computer = useGLTF('./pcgaming/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.5 : 0.75}
                position={isMobile ? [0, -1.2, -1.7] : [0, -3.25, -1.5]}
                rotation={[0, 0.4, -0.1]}
            />
        </mesh>
    );
};

// *Main Component
const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // add a listner for change to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        // set the initial value of the 'isMobile' state varibale
        setIsMobile(mediaQuery.matches);
        // define a callback function to handle change to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        // add the callback funtion as a listener change to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        // remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            // className="hover:cursor-grab active:cursor-grabbing bg-red-400/10"
            className="hover:cursor-grab active:cursor-grabbing"
            style={{ width: '100%', height: '100%' }}
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ComputersModel isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
