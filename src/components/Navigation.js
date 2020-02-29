import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <h1 className="navh1">Dickson <span className="navNutrition">Nutrition</span>
                </h1>
            </div>
            <div className="flextags">
            <Link className="tags" to="/home">Home</Link>
            <Link className="tags" to="/products">Products</Link>
            <Link className="tags" to="/services">Services</Link>
            <Link className="tags" to="/about">About</Link>
            <Link className="tags" to="/contact">Contact</Link>
            
            </div>
        </div>
    )
}

export default Navigation;