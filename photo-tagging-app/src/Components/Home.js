import { Link } from "react-router-dom";
import { maps } from "../Assets/Data/Data";
import "../Styles/Home.css";
import NavBar from "./Navbar";

function Home() {

  return(
    <div>
        <NavBar/>
        <div className="home-maps-container">
        {
            maps.map((map,index)=>{
                return(
                    <Link key={index} className="link" to={"/map/:"+index} >
                        <div className="home-map" >
                            <div>{map.name}</div>
                            <img src={map.url} alt="map" width="400px" />
                        </div>
                    </Link>
                );
            })
        }    
        </div>
    </div>
  );
}

export default Home;
