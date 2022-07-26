import React from "react";
import "./RegisterHouse.css";
function Registerhouse()
{
    return (
        <div className="registerhouse">
            <h2>Please fill in this form when you want to register a House</h2>
                <form className="registerHouseA">
                <label>Name :</label>
                <input placeholder="enter name" name="name"/>
                <label>Age :</label>
                <input placeholder="age" name="age"/>
                <label>Type of House:</label>
                <select></select>
                <label>Number of Rooms</label>
                <select>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Mansion">Mansion</option>
                </select>
                <label>House Location</label>
                <select>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Eldoret">Eldoret</option>
                </select>
                <label>Number of Bedrooms</label>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6 and more">6 and more</option>
                </select>
                <label>Preferred view day</label>
                <select></select>
                <input type="submit"/>
                </form>
        </div>
    )
    
        
}
export default Registerhouse;