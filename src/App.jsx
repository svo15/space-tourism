import React, { useState,useEffect,createContext } from "react";
import { createPortal } from 'react-dom';
import Home from "./home";
import Menu from "./menu";
import Destination from "./destination";
import Crew from "./crew";
import Technology from "./technology";

export const DataContext=createContext();

function App() {
  const url = "/data.json";
  const [Data, setData] = useState();
  const [activeButton, setActiveButton] = useState(0);
  const [menu, setmenu]=useState(false);
  
  const getdata = () => fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }).then(response => response.json()).then(r => { setData(r) });

  useEffect(() => {
    getdata();
  }, []); 

  function menuact(){
    console.log(menu)
    setmenu(true)
  }
  function act(e, index) {
    setActiveButton(index);
  }

  return (
    <>
      <header className="w-full md:h-32 h-24 absolute z-20">
        <div className=" m-6 mr-0 md:m-16 md:mr-0 flex justify-between items-center">
          <img className="w-12 h-12" src="shared/logo.svg" alt="logo" />
          <div className=" max-sm:hidden h-24 w-6/12 text-white flex justify-end items-center backdrop-blur-3xl">
            <button
              className={`mr-12 py-9 hover:border-b-4 hover:opacity-50 transition-all ${activeButton === 0 ? "border-b-4 " : ""}`}
              onClick={(e) => act(e, 0)}>
              <span>00</span> HOME
            </button>
            <button
              className={`mr-12 py-9 hover:border-b-4 hover:opacity-50 transition-all ${activeButton === 1 ? "border-b-4 " : ""}`}
              onClick={(e) => act(e, 1)}>
              <span>01</span> DESTINATION
            </button>
            <button
              className={`mr-12 py-9 hover:border-b-4 hover:opacity-50 transition-all ${activeButton === 2 ? "border-b-4 " : ""}`}
              onClick={(e) => act(e, 2)}>
              <span>02</span> CREW
            </button>
            <button
              className={`mr-12 py-9 hover:border-b-4 hover:opacity-50 transition-all ${activeButton === 3 ? "border-b-4 " : ""}`}
              onClick={(e) => act(e, 3)}>
              <span>03</span> TECHNOLOGY
            </button>
          </div>
          <img onClick={()=>menuact()} className="mr-6 sm:hidden w-6 h-6 cursor-pointer" src="./space-tourism/src/assets/shared/icon-hamburger.svg" alt="menu" />
        </div>
      </header>
      <Home trigger={activeButton} set={setActiveButton}/>
      {createPortal(<Menu trigger={menu} set={setmenu} actset={setActiveButton}/>,document.querySelector("#root"))}
      <DataContext.Provider value={Data}>
        <Destination trigger={activeButton} />
        <Crew trigger={activeButton}/>
        <Technology trigger={activeButton}/> 
      </DataContext.Provider>
    </>
  );
}

export default App;