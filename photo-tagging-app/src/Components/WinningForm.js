import { useEffect, useRef, useState } from "react";
import "../Styles/WinningForm.css";
import { useNavigate } from "react-router-dom";
import { addScore } from "../Firebase";
// import { async } from "@firebase/util";
function WinningForm({mapName,startTime,endTime}){
    
    const navigate=useNavigate();
    const ref=useRef();
    const nameRef=useRef();

    
    useEffect(()=>{
        

        const form=ref.current;
        const name=nameRef.current;
        
        form.addEventListener("submit",async(e)=>{
            e.preventDefault();
            console.log(name.value);
            await addScore(name.value,Math.abs(endTime-startTime)/1000,mapName);
            navigate('/scoreboard/:'+mapName, {replace: true});
        });
        
        return ()=>{
            form.removeEventListener("submit",async(e)=>{
                e.preventDefault();
                console.log(name.value);
                await addScore(name.value,Math.abs(endTime-startTime)/1000,mapName);
                navigate('/scoreboard/:'+mapName, {replace: true});
            });
        } 
    },[]);
    

    return(
        <div className="winning-form-container" >
            <form action="/scoreboard" className="winning-form" ref={ref} >
                <div className="winning-message" >
                    {"you have completed "+mapName+" map in "+ Math.abs(endTime-startTime)/1000 +" seconds!"} 
                </div>
                <input ref={nameRef} type="text" placeholder="Enter Your Name" className="user-name-input" />
                <button className="form-submit-button" >submit</button>
            </form>
        </div>
    );
}

export default WinningForm;