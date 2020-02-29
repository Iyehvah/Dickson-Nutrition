import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-overlay">
            <div className="Footer-socials">
                <h4>@DicksonNutrition</h4>
                <a className="footertags" href="https://www.facebook.com/DicksonNutrition">
                    <FontAwesomeIcon icon={faFacebook} size="1x"/>
                </a>
                <a className="footertags" href="https://www.instagram.com/dicksonnutrition/">
                    <FontAwesomeIcon icon={faInstagram} size="1x"/>
                </a>
            </div>
            <p className="copyright">Dickson Nutrition, &copy; 2020</p>
            </div>
        </div>
    )
}

export default Footer;