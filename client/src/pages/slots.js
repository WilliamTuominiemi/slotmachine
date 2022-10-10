import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

let rollSlots = false
let stopping = false

let speed = 0.0

function Slot(props) {
    const texture = useLoader(TextureLoader, 'http://localhost:8080/')

    const ref = useRef()

    useFrame(() => {
        if (rollSlots) {
            ref.current.rotation.x += speed + Math.random() * 0.1
            if (ref.current.rotation.x >= 2 * Math.PI) ref.current.rotation.x = 0
        } else {
            if (stopping) {
                if (ref.current.rotation.x < Math.round(ref.current.rotation.x)) {
                    ref.current.rotation.x += speed
                } else if (ref.current.rotation.x > Math.round(ref.current.rotation.x)) {
                    ref.current.rotation.x -= speed
                }
            } else {
                ref.current.rotation.x = Math.round(ref.current.rotation.x)
            }
        }
    })

    return (
        <mesh
            {...props}
            ref={ref}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <cylinderGeometry args={[3, 3, 3, 6]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}

function canvasHandleEvent(event) {
    if (event.type === 'mousedown' && !rollSlots && !stopping) {
        rollSlots = true
        stopping = false
        speed = 0.005
        setTimeout(function () {
            rollSlots = false
            stopping = true
            speed = 0.001
            setTimeout(function () {
                stopping = false
                speed = 0.0
            }, 1000)
        }, 2000)
    }
}

export const Slots = () => {
    useEffect(() => {
        console.log('yeah')
    }, [])

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '10vh',
                    color: 'white',
                }}
            >
                <h1>Slots</h1>

                <p>: click on the slots to roll</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                }}
            >
                <Canvas camera={{ fov: 90, position: [0, 7, 0] }} onMouseDown={canvasHandleEvent}>
                    <ambientLight intensity={0.5} />
                    <Slot position={[-5, 0, 0]} />
                    <Slot position={[0, 0, 0]} />
                    <Slot position={[5, 0, 0]} />
                </Canvas>
            </div>
        </div>
    )
}
