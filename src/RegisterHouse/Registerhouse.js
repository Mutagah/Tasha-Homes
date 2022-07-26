import React from "react";
import "./RegisterHouse.css";
function Registerhouse()
{
    return (
        <div>
            <section className="registerHouse" >
                <div className="registerHouseA">
                    <div className="register-box">
                        <div className="left"></div>
                        <div className="right">
                        <form id="formYetu"> 
                         <h2>Register with Us</h2>
                         <input type="text" className="field" placeholder="Your Name" />
                         <input type="text" className="field" placeholder="Your Age" />
                         <input type="text" className="field" placeholder="Phone Number" />
                         <label>Type of House
                         <select>
                            <option value="Apartment">Apartment</option>
                            <option value="Bungalow">Bungalow</option>
                            <option value="Mansion">Mansion</option>
                         </select>
                         </label>
                         <br />
                         <label>House Location
                        <select>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Eldoret">Eldoret</option>
                        </select>
                        </label>
                        <br />
                        <label>Number of Bedrooms
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6 and more">6 and more</option>
                        </select>
                        </label>
                        <br />
                        <label>Number of Bedrooms
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6 and more">6 and more</option>
                        </select>
                        </label>
                        <label>Preffered Viewday
                        <select>
                            <option value="sunday">Sunday</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                        </select>
                        </label>
                         <button className="registerbtn">Send</button>
                     </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Registerhouse;