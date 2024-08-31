import { Canvas } from "@react-three/fiber";
// import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_now_display']">
      <div className="navbar line flex gap-5 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {["iPhone", "iPad", "services", "ios", "mac", "accessories","iPhone", "iPad", "services", "ios", "mac", "accessories"].map(
          (e) => (
            <a href="" className="text-white font-[400] text-md capitalize">{e}</a>
          )
        )}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          Macbook Air M3
        </h3>
        <h5>Can go with Pro!</h5>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
