import { useState, useContext, useEffect } from "react";
import { DataContext } from "./App";

function Crew(prop) {
    const Data = useContext(DataContext);
    const [crewmate, setcrewmate] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    function crewchoice(e, i) {
        if (i !== crewmate) {
            setIsAnimating(true);
            setTimeout(() => {
                setcrewmate(i);
                setIsAnimating(false);
            }, 300); // Duration of the transition
        }
    }

    return (prop.trigger === 2 ? 
    <div className={`w-full h-full xl:bg-Crew-bg-dest max-md:bg-Crew-bg-tablet max-sm:bg-Crew-bg-mobile bg-Crew-bg-dest bg-no-repeat bg-cover flex justify-center text-white transition-all absolute`}>
        <div className="w-full mt-24 mx-6 max-md:text-center xl:mt-52 xl:flex xl:mx-40">
            <div className="max-md:mt-8 xl:w-1/2">
                <h1 className="max-sm:text-base max-sm:text-center max-md:text-start xl:text-2xl">
                    <span className="mr-6 text-light-blue">02</span>MEET YOUR CREW
                </h1>
                <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="mt-16 text-lg text-light-blue xl:text-4xl xl:mb-4">{Data.crew[crewmate].role}</h1>
                    <h1 className="text-2xl xl:text-6xl xl:mb-7">{Data.crew[crewmate].name}</h1>
                    <p className="mt-6 mb-20 text-base text-light-blue max-sm:mx-0 max-md:mx-32 xl:mb-80">{Data.crew[crewmate].bio}</p>
                </div>
                <div>
                    {Data.crew.map((_, i) => (
                        <button
                            key={i}
                            className={`${crewmate === i ? "bg-white" : "bg-gray-700"} w-3 h-3 mr-4 rounded-full`}
                            onClick={(e) => crewchoice(e, i)}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8 xl:w-1/2">
                <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <picture>
                        <source srcSet={Data.crew[crewmate].images.png} />
                        <source srcSet={Data.crew[crewmate].images.webp} />
                        <img className="w-auto h-96 xl:h-5/6" src={Data.crew[crewmate].images.webp} alt={Data.crew[crewmate].name} />
                    </picture>
                </div>
            </div>
        </div>
    </div> : ""
    );
}

export default Crew;
