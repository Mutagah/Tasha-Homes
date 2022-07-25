import React from "react";
import "./RegisterHouse.css";
function Registerhouse()
{
    return (
        <div className="registerhouse">
                <form className="registerHouseA">
                <label>Name :</label>
                <input placeholder="enter name" name="name"/>
                <label>Age :</label>
                <input placeholder="age" name="age"/>
                <label>Type of House:</label>
                <select></select>
                <label>Number of Rooms</label>
                <select></select>
                <label>House Location</label>
                <select></select>
                <label>Number of Bedrooms</label>
                <select></select>
                <label>Preferred view day</label>
                <select></select>
                <input type="submit"/>
                </form>
        </div>
    )
    
        
}
export default Registerhouse;