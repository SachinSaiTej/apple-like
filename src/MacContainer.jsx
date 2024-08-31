import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("mac.glb");
  let tex = useTexture("red.jpg")
  let meshes = {};
  model.scene.traverse((child) => {
    // if(child instanceof THREE.Mesh || child instanceof THREE.Group){
    meshes[child.name] = child;
    // }
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;
  let data = useScroll();

  useFrame((state, delta)=>{
    // console.log(data.offset);
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 120);
  })

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />;
    </group>
  );
};

export default MacContainer;
