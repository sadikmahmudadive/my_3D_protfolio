import { useGLTF } from '@react-three/drei';
import { use, useRef } from 'react'
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
    const sky = useGLTF('/sky.glb');
    const ref = useRef();

    useFrame((_, delta) => {
        if (isRotating) {
            ref.current.rotation.y += 0.015 * delta;
        }
    })
  return (
    <mesh ref={ref}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky;
