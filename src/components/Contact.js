import React from "react"
import newsnipDN from "../imgs/newsnipDN.PNG"

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-intro">
                <h2>Contact Us</h2>
                <h3 className="want-to-know-more">Want to know more?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non vulputate ligula, vel efficitur enim. Maecenas fermentum quis orci id tempor. Aenean ligula turpis, hendrerit nec elit sed, facilisis interdum libero.</p>
                <div className="contact-us">
                    <ol>
                        <li>Phone Number: 615-509-5754</li>
                        <li>Address: 106 U.S.70 #4, Dickson, TN 37055</li>
                        <li>Business Hours
                            <ul>
                                <li>Monday: 9 AM - 5 PM</li>
                                <li>Tuesday: 9 AM - 5 PM</li>
                                <li>Wednesday: 9 AM - 5 PM</li>
                                <li>Thursday: 9 AM - 5 PM</li>
                                <li>Friday: 10 AM - 4 PM</li>
                                <li>Saturday: 10 AM - 2 PM</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="googlemaps">
                <div className="contact-flex">
                    <h2>Where are we?</h2>
                    <img src={newsnipDN} alt="picture of dickson nutritions location" />
                </div>
                <div className="contact-flex">
                    <p>Suspendisse sit amet vulputate lacus, id sodales nunc. Aliquam vehicula et velit eget ultricies. Pellentesque imperdiet quam sed ex suscipit dictum. Curabitur pulvinar gravida leo at eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque feugiat et tellus at feugiat.</p>

                </div>
            </div>
        </div>
    )
}

export default Contact;