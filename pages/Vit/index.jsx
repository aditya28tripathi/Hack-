import { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";

import Loader from '@/components/Loader';
import  Island  from '@/models/Island';
import Bird from '@/models/Bird';
import Plane from '@/models/Plane';
import Sky from '@/models/Sky';
import HomeInfo from '@/components/HomeInfo';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [islandScale, setIslandScale] = useState([]);
  const [islandPosition, setIslandPosition] = useState([]);
  const [planeScale, setPlaneScale] = useState([]);
  const [planePosition, setPlanePosition] = useState([]);

  useEffect(() => {
    // Move window-dependent code into useEffect to ensure it runs client-side
    const adjustIslandForScreenSize = () => {
      let screenScale, screenPosition;
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
        screenPosition = [0, -6.5, -43.4];
      } else {
        screenScale = [1, 1, 1];
        screenPosition = [0, -6.5, -43.4];
      }
      return [screenScale, screenPosition];
    };

    const adjustPlaneForScreenSize = () => {
      let screenScale, screenPosition;
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
      return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    // Set the state with window-dependent values
    // This will only execute on the client-side
    setIslandScale(islandScale);
    setIslandPosition(islandPosition);
    setPlaneScale(planeScale);
    setPlanePosition(planePosition);
  }, []); // Run once on component mount

  // Render code
  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>


<Canvas
      className={`w-full h-screen bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000 }}
    >

 

  <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor = '#b1e1ff' groundColor="#000000"
        intensity = {1}/>

        <Bird/>

        <Sky isRotating={isRotating}/>

        <Island
position = {islandPosition}
scale = {islandScale}
isRotating={isRotating}
setIsRotating={setIsRotating}
setCurrentStage={setCurrentStage}



        
        
        />

        <Plane
        isRotating = {isRotating}
        scale  = {planeScale}
        position = {planePosition}
        rotation = {[0,20,0]}
        />
      

  



</Canvas>
  

  </section>
)
}

export default Home
