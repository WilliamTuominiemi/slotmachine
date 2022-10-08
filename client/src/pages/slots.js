import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree  } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Box(props) {
    const texture = useLoader(TextureLoader, 'http://localhost:8080/')

    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        rotation={[Math.PI/2,0,Math.PI/2]}
    >
        <cylinderGeometry args={[2,2,2,6]}/>
        <meshStandardMaterial map={texture} />
      </mesh>
    )
}

export const Slots = () => {
    useEffect(() => {
        console.log('yeah')
    }, [])

    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "50vh"}}
        >
            <Canvas camera={{ fov: 90, position: [0, 7, 0] } }>
            <ambientLight intensity={0.5}/>
            <Box position={[-5, 0, 0]}/>
            <Box position={[0, 0, 0]}/>
            <Box position={[5, 0, 0]}/>
        </Canvas>
        </div>
    )
}
