

function Menu(prop){
    function off() {
        prop.set(false)
        
    }
    
    return(
        <div className={`h-full w-2/3  z-30 sm:hidden absolute transition-all top-0  ${prop.trigger? "right-0":"-right-96"} backdrop-blur-3xl`}>
            <img className="w-6 h-6 absolute top-8 right-8" onClick={()=>off()} src="./space-tourism/src/assets/shared/icon-close.svg" alt="" />
            <div className="text-white flex flex-col mt-36 absolute left-9">
                <button onClick={() => {prop.actset(0); off()}} className="mb-8"><span className="mr-3">00</span>HOME</button>
                <button onClick={() => {prop.actset(1); off()}} className="mb-8"><span className="mr-3">01</span>HOME</button>
                <button onClick={() => {prop.actset(2); off()}} className="mb-8"><span className="mr-3">02</span>HOME</button>
                <button onClick={() => {prop.actset(3); off()}} className="mb-8"><span className="mr-3">03</span>HOME</button>
            </div>

        </div>
    )

}

export default Menu