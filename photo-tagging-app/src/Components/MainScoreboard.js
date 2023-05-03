import NavBar from "./Navbar"
import { Link } from "react-router-dom";

function MainScoreboard({maps}){
    return(
        <div className="scoreboard-page" >
        <NavBar/>
        <div className="maps-scoreboard">
          {
            maps.map((map,index)=>{
              return(
                <Link  className="link" key={index} to={"/scoreboard/:"+map.name} >
                  <div className="scoreboard-map" >
                    <div>{map.name}</div>
                    <img src={map.url} alt="" width="300px"/>
                  </div>
                </Link>
                )
            })
          }
        </div>
      </div>
    )
}

export default MainScoreboard;