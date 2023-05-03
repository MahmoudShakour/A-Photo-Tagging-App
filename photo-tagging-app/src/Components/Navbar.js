import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function NavBar({icons,iconStyle}){
    return(
        <div className="nav-bar-container" >
            <div className="nav-bar" >
                <Link className="link" to="/" >
                    <div>Home</div>
                </Link>
                {
                    icons?
                    <div className="icons" >
                {
                    icons.map((icon,index)=>{
                        return(
                            <div key={index} className="icon" style={iconStyle[index]}   >
                                <img className="icon-image" src={icon.url} alt="" />
                                <div>{icon.name}</div>
                            </div>
                        )
                    })
                }
                </div>
                :
                <div className="title" >MS Game</div>
            }
                <Link className="link"  to="/mainscoreboard">
                    <div>scoreboard</div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;