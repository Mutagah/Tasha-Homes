import React from "react";
import "./ViewHouse.css"
function Viewhouse(){
    return (<div>
        <div className="selectCriteria">
            <form>
                <label> Filter by type of house
                <select>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Mansion">Mansion</option>
                </select>
                </label>
                <label>
                    Filter by Location
                    <select>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Nakuru">Nakuru</option>
                        <option value="Eldoret">Eldoret</option>
                    </select>
                </label>
                <label> Filter by number of Bedrooms  
                    <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6 and more">6 and more</option>
                    </select>
                </label>
            </form>
            </div>
        <div>
            <div className="houseCard">
            <h5>Here is what should be displayed</h5>
                <h3>Type of house:</h3>
                <h3>Location</h3>
                <h3>numberOfBedrooms</h3>
                <h3>Contact Number</h3>
            </div>
        </div>
        </div>
        
    )
}
export default Viewhouse;