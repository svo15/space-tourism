

function Home(prop) {
    return(
    <div className={`w-full h-full xl:bg-Home-bg-desk max-md:bg-Home-bg-tablet bg-Home-bg-mobile bg-no-repeat bg-cover flex justify-center transition-opacity absolute duration-300 ${prop.trigger===0?"opacity-100 z-10":"opacity-0"}`}>
        <div className="xl:w-3/4 xl:h-4/6  xl:mt-60 max-md:mt-60 max-sm:mt-40 xl:flex text-white items-end">
           <div className="xl:w-1/2 w-4/5 max-md:text-center m-auto ">
            <h2 className="xl:text-4xl text-base mb-6 text-light-blue">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="xl:text-9xl text-8xl mb-14">SPACE</h1>
            <p className="xl:text-lg  max-sm:w-full text-base text-light-blue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
           </div>
           <div className="text-center mt-40">
            <button className="xl:w-72 xl:h-72 w-36 h-36 bg-white text-black text-3xl rounded-full xl:ml-64 relative" onClick={()=>prop.set(1)}>EXPLORE
                <div className="hidden xl:block xl:bg-white xl:w-96  xl:h-96 absolute -top-12 -left-12 rounded-full hover:opacity-50 opacity-0 transition-opacity duration-500"></div></button>
           </div> 
        </div>
    </div>
    )
    
}

export default Home