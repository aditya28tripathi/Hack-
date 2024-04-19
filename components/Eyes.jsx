import React,{useEffect , useRef , useState} from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    const [verticalOffset, setVerticalOffset] = useState(0);
  
    useEffect(() => {
      const updateEyePosition = (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
  
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
  
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
  
        // Adjust vertical offset based on mouseY
        setVerticalOffset(deltaY * 100); // You can adjust the multiplier to control the speed of vertical movement
      };
  
      window.addEventListener('mousemove', updateEyePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateEyePosition);
      };
    }, []);
  
    
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
  <div data-scroll data-scroll-speed ="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
    <div className='absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full' >
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                <div style={{transform: `translate(-50% ,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100' ></div>
                </div>
          
            </div>
        </div>
        <div className='flex items-center  justify-center  w-[15vw] h-[15vw] bg-zinc-100 rounded-full' >
        <div className=' relative flex items-center justify-center  w-2/3 h-2/3 bg-zinc-900 rounded-full'>
        <div style={{transform: `translate(-50% ,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100' ></div>
                </div>
        </div>
        </div>
    </div>
  </div>
</div>

  )
}

export default Eyes
