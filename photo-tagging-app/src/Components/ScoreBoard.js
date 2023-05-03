import NavBar from "./Navbar";
import "../Styles/ScoreBoard.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMapScoreboard } from "../Firebase";
import { maps } from "../Assets/Data/Data";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
function Scoreboard() {
    
    const params=useParams();
    const [users,setUsers]=useState([]);
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{

      const getData= (async()=>{
        const data=await getMapScoreboard(params.mapName.substring(1));
        console.log(data);
        setUsers(data.sort((f,s)=>f.time<s.time));
        console.log(data.sort((f,s)=>f.time-s.time));
        console.log(data);
      })();

      
    },[params.mapName]);

    return(
      <div className="scoreboard-page" >
        <NavBar/>
        <div className="scoreboard-container">
          
          <div className="user-result" >
              <div className="rank" >Place</div>
              <div>Name</div>
              <div>time (in seconds)</div>
          </div>
          {
            users.map((user,index)=>{
              return(
                <div key={index} className="user-result" >
                  <div className="rank" >{index+1}</div>
                  <div>{user.name}</div>
                  <div>{user.time}</div>
                </div>
              );
            })
          } 
        </div>
      </div>
    );
  }
  
  export default Scoreboard;
  