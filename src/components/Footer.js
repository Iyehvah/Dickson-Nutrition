import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="Footer">
            <div className="stayConnected"><h3>Stay Connected</h3>
                <p>Stay up to date on the latest discounts and health advice</p>
                <form>
                    <input placeholder="Enter Email"></input>
                    <button>Submit</button>
                </form>
            </div>
            <div className="footerfindus"><h3>Social Platforms</h3>
                <p>Find us on these platforms</p>
                <h5>Facebook
                    <a href="https://www.facebook.com/DicksonNutrition" target="_blank" className="socials"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                </h5>
                <h5>Instagram
                <a href="https://www.instagram.com/dicksonnutrition/?hl=en" target="_blank" className="socials"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </h5>
            </div>
        </div>
    )
}

export default Footer;