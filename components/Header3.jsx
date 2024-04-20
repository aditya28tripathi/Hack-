import React from 'react';

const Header2 = () => {
  return (
    <section className="text-white body-font h-1000" style={{ background: 'linear-gradient(45deg, #040c19, #06142a, #071e3b)' }}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap" style={{ perspective: '100px' }}>
          <h1 className="sm:text-4xl text-3xl font-semibold title-font lg:w-1/3 lg:mb-0 mb-6" style={{ color: 'goldenrod', fontFamily: 'cursive', fontSize: '2.5rem', letterSpacing: '0.05em', transition: 'transform 0.5s, color 0.5s, font-size 0.3s' }}>Expressive Movements, Captive Hearts</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg" style={{ color: '#ffffff', fontFamily: 'cursive', fontSize: '1.25rem', letterSpacing: '0.025em', transition: 'transform 0.5s, color 0.5s, font-size 0.5s' }}>"Expressive Movements, Captive Hearts" evokes the transformative power of art, stirring emotions and forging connections that captivate and resonate deeply within us.</p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-48 md:h-full object-center block border-4 border-white hover-scale" src="Ex.jpg" />
            </div>
            {/* Add similar structure for other images */}
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-fit h-48 md:h-full object-center block border-4 border-white hover-scale" src="Ro.jpg" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-48 md:h-full object-fit object-center block border-4 border-white hover-scale-10" src="IndainArt.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-40 md:h-full object-fit object-center block border-4 border-white hover-scale" src="b.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-fit h-48 md:h-full object-center block border-4 border-white hover-scale" src="aa.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-fit h-48 md:h-full object-center block border-4 border-white hover-scale" src="c.jpg" />
            </div>
          </div>
        </div>
       
      </div>
      <h3 style={{ fontSize: '54px', fontWeight: 'bold' , paddingLeft:'520px' , alignItems:'center' ,justifyContent:'center' , backgroundColor:''}}>
        WHY ARTFLOW?
        </h3>
        <video autoPlay loop muted src="https://www.artdex.com/wp-content/uploads/2020/07/Welcome_to_ARTDEX-.mp4 "  h-1050 w-200px></video>
    </section>
  );
};

export default Header2;