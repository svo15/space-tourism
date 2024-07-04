import { useContext, useState } from "react"
import { DataContext } from "./App"


function Technology(prop){

    const data= useContext(DataContext);
    const [act, setact]=useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    function active(e,i){
        if (i !== act) {
            setIsAnimating(true);
            setTimeout(() => {
                setact(i);
                setIsAnimating(false);
            }, 300); // Duration of the transition
        }
    }

    return(prop.trigger===3?
    <div className={`w-full h-full xl:bg-Technology-bg-dest max-md:bg-Technology-bg-tablet max-sm:bg-Technology-bg-mobile bg-Technology-bg-dest bg-no-repeat bg-cover flex justify-center text-white transition-opacity absolute `}>
        <h1 className="absolute top-40 text-base md:left-10 md:top-44 xl:text-2xl xl:left-40"><span className="mr-6 opacity-25">03</span>SPACE LAUNCH 101</h1>
        <div className={`mt-10 w-full text-center flex flex-col-reverse xl:flex-row xl:mt-80 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-full xl:w-1/2 xl:flex">
                <div className="xl:flex xl:flex-col xl:w-20">{data.technology.map((_,i)=>(<button key={i} className={`rounded-full border w-10 h-10 mr-4 xl:w-20 xl:h-20 xl:mb-8 xl:ml-40  transition-none ${act===i?"text-black bg-white":""}`} onClick={(e)=>active(e,i)}>{i+1}</button>))}</div>
                <div className="text-start xl:ml-60">
                    <h1 className="opacity-50 mt-10 xl:text-3xl">THE TERMINOLOGY</h1>
                    <h1 className="uppercase text-2xl mt-5 xl:text-5xl">{data.technology[act].name}</h1>
                    <p className="mx-6 mt-4 mb-12 xl:mx-0 text-light-blue xl:text-lg">{data.technology[act].description}</p>
                </div>
            </div>
            <div className={`w-full xl:w-1/2 relative transition-opacity duration-300${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <picture>
                    <source media="(max-width:700px )" srcSet={data.technology[act].images.landscape} />
                    <source media="(min-width:1000px )" srcSet={data.technology[act].images.portrait} />
                    <img className="w-full h-64 object-cover my-8 md:h-96 xl:h-auto xl:w-9/12 xl:m-auto xl:my-0  transition duration-500 xl:absolute xl:right-0 xl:-top-28" src={data.technology[act].images.portrait} alt="" />
                </picture>
            </div>
        </div>
    </div>:"")
}
export default Technology