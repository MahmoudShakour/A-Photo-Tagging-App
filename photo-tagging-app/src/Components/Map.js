import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocation } from "../Firebase";
import "../Styles/Map.css";
import NavBar from "./Navbar";
import WinningForm from "./WinningForm";
function Map({maps,characters}) {

  const params=useParams();
  const [map,setMap]=useState({});
  const [id,setId]=useState(0);
  const [style,setStyle]=useState({});
  const [show,setShow]=useState(false);
  const [icons,setIcons]=useState([]);
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const [iconStyle,setIconStyle]=useState([{opacity:1},{opacity:1},{opacity:1}]);
  const [win,setWin]=useState(false);
  const [location,setLocation]=useState({minX:0,maxX:0,minY:0,maxY:0});
  const ref=useRef();
  const button1=useRef();
  const button2=useRef();
  const button3=useRef();
  const [chosenId,setChosenId]=useState(-1);
  const [temp,setTemp]=useState(0);
  const [startTime,setStartTime]=useState(null);
  const [endTime,setEndTime]=useState(null);

  useEffect(()=>{
    setId(Number(params.id.substring(1)));
    setMap(maps[id]);
    setIcons(characters[ maps[id].name ]);
    if(!startTime) setStartTime(Date.now());
  },[characters, id, maps, params.id, startTime]);


  const handleChoosingCoordinates=(e)=>{
    setShow(true);

    console.log(e.pageX);
    console.log(e.pageY);

    console.log(document.body.scrollHeight);
    console.log(window.innerWidth);

    console.log(e.pageX/window.innerWidth);
    console.log(e.pageY/document.body.scrollHeight);

    setX(e.pageX);
    setY(e.pageY);

    setStyle({
      position: 'absolute',
      left:e.pageX,
      top:e.pageY,
    });
  }

  useEffect(()=>{
    const map=ref.current;
    map.addEventListener("click",(e)=>{handleChoosingCoordinates(e)});
    
    return()=>{
      map.removeEventListener("click",(e)=>{handleChoosingCoordinates(e)})
    }
  },[]);

  
  useEffect(()=>{
    // console.log(location);
    // console.log(chosenId);
    // console.log(x);
    // console.log(y);
    // console.log("---------");

    

    if(x/window.innerWidth>=location.minX&&x/window.innerWidth<=location.maxX&&y/document.body.scrollHeight>=location.minY&&y/document.body.scrollHeight<=location.maxY&&chosenId!==-1){
      // console.log("yes");
      let newIconStyle=iconStyle;
      newIconStyle[chosenId]={opacity:0.5};
      setIconStyle(newIconStyle);
      setTemp(temp+1);
    }
  }, [location, chosenId, x, y, iconStyle]);
  
  useEffect(()=>{
    // console.log("fmdmf"); 
    if(iconStyle[0].opacity!==1&&iconStyle[1].opacity!==1&&iconStyle[2].opacity!==1){
      setWin(true);
      setEndTime(Date.now());
    }
  });

 

  useEffect(()=>{

    const handleChoosingCharacter = async(e,selectedCharacter,id)=>{
      e.stopPropagation();
      setShow(false);
  
      let newLocation=await getLocation(selectedCharacter);
      setLocation(newLocation);
      setChosenId(id);
    }

    const buttonOne=button1.current;
    const buttonTwo=button2.current;
    const buttonThree=button3.current;
    if(!button1.current||!button2.current||!button3.current) return ;

    buttonOne.addEventListener("click",async(e)=>{await handleChoosingCharacter(e,icons[0].name,0)});
    buttonTwo.addEventListener("click",async (e)=>{await handleChoosingCharacter(e,icons[1].name,1)});
    buttonThree.addEventListener("click",async (e)=>{await handleChoosingCharacter(e,icons[2].name,2)});

    return ()=>{
      buttonOne.removeEventListener("click",async(e)=>{await handleChoosingCharacter(e,icons[0].name,0)});
      buttonTwo.removeEventListener("click",async (e)=>{await handleChoosingCharacter(e,icons[1].name,1)});
      buttonThree.removeEventListener("click",async (e)=>{await handleChoosingCharacter(e,icons[2].name,2)});  
    }
  },[icons, x, y,location]);

  return(
    win?
    <WinningForm mapName={map.name} startTime={startTime} endTime={endTime} />
    :
    <div className="map-page">
      <NavBar icons={icons} iconStyle={iconStyle} />
      <img  className="map-page-image" src={map.url} alt="" ref={ref} />
      {
        show&&
        <div style={style} className="buttons-container">
          <button ref={button1}> {icons[0].name}</button>
          <button ref={button2}> {icons[1].name}</button>
          <button ref={button3}> {icons[2].name}</button>
        </div>
      }
    </div>
  );

}

export default Map;
  