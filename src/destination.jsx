import React, { useState, useContext } from 'react';
import { DataContext } from './App';

function Destination(prop) {
    const Data=useContext(DataContext)
    const [active, setActive] = useState(0);
    const [fade, setFade] = useState(false); // State to control the fade effect

    const act = (e, i) => {
        setFade(true); // Trigger the fade-out effect
        setTimeout(() => {
            setActive(i); // Change the active index after the fade-out
            setFade(false); // Trigger the fade-in effect
        }, 300); // Adjust the timeout to match the duration of the fade-out transition
    };

    return (
        <div className={`w-full h-full xl:bg-Destination-bg-dest max-md:bg-Destination-bg-tablet bg-Destination-bg-mobile bg-no-repeat bg-cover flex justify-center transition-opacity absolute  duration-300 ${prop.trigger===1?"opacity-100 ":"opacity-0"}`}>
            <div className="xl:w-3/4 xl:h-4/6 xl:mt-60 max-sm:mt-24 flex max-md:mt-32 max-md:items-center max-md:flex-col">
                <div className="w-full xl:h-full relative max-md:flex max-md:flex-col max-md:items-center max-sm:items-center">
                    <h1 className="text-white xl:text-2xl text-lg sm:absolute max-md:left-5"><span className="text-light-blue">01</span> PICK YOUR DESTINATION</h1>
                    <picture className="max-sm:w-36 max-sm:h-36 max-sm:my-6">
                        <source srcSet={Data?.destinations[active].images.png} />
                        <source srcSet={Data?.destinations[active].images.webp} />
                        <img className={`xl:w-auto xl:h-3/5 xl:absolute xl:bottom-32 w-40 max-md:m-16 max-sm:m-0 max-md:w-72 max-sm:w-36 transition-opacity duration-500 ${fade ? 'fade-out' : 'fade-in'}`} src={Data?.destinations[active].images.webp} alt={Data?.destinations[0].name} />
                    </picture>
                </div>
                <div className="w-full text-white max-md:text-center">
                    <button className={`mr-9 max-sm:ml-8 py-2 hover:border-b-2 hover:opacity-50 transition-all ${active === 0 ? "border-b-2" : ""}`} onClick={(e) => act(e, 0)}>MOON</button>
                    <button className={`mr-9 py-2  hover:border-b-2 hover:opacity-50 transition-all${active === 1 ? "border-b-2" : ""}`} onClick={(e) => act(e, 1)}>MARS</button>
                    <button className={`mr-9 py-2  hover:border-b-2 hover:opacity-50 transition-all${active === 2 ? "border-b-2" : ""}`} onClick={(e) => act(e, 2)}>EUROPA</button>
                    <button className={`mr-9 py-2  hover:border-b-2 hover:opacity-50 transition-all${active === 3 ? "border-b-2" : ""}`} onClick={(e) => act(e, 3)}>TITAN</button>
                    <h1 className={`xl:text-8xl xl:mt-20 xl:mb-8 max-sm:my-8 max-md:text-9xl max-sm:text-6xl ${fade ? 'fade-out' : 'fade-in'}`}>{Data?.destinations[active].name}</h1>
                    <p className={`xl:text-base xl:mb-10 max-md:mx-28 max-sm:mx-8 xl:my-8 max-sm:text-base my-5 ${fade ? 'fade-out' : 'fade-in'}`}>{Data?.destinations[active].description}</p>
                    <hr className="xl:mb-8 max-md:mx-28 max-sm:mx-8 max-md:mb-6 max-sm:mb-10"></hr>
                    <div className="flex max-sm:flex-col max-sm:items-center">
                        <div className="w-1/2">
                            <h1 className={`xl:text-sm max-md:text-2xl max-sm:text-sm ${fade ? 'fade-out' : 'fade-in'}`}>AVG.DISTANCE</h1>
                            <h1 className={`uppercase xl:text-3xl max-md:text-xl max-sm:text-3xl ${fade ? 'fade-out' : 'fade-in'}`}>{Data?.destinations[active].distance}</h1>
                        </div>
                        <div className="w-1/2 max-sm:mt-2">
                            <h1 className={`xl:text-sm max-md:text-2xl max-sm:text-sm ${fade ? 'fade-out' : 'fade-in'}`}>Est. travel time</h1>
                            <h1 className={`uppercase xl:text-3xl max-md:text-xl max-sm:text-3xl ${fade ? 'fade-out' : 'fade-in'}`}>{Data?.destinations[active].travel}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
