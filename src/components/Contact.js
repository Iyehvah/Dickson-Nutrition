import React from "react"
import newsnipDN from "../imgs/newsnipDN.PNG"

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-intro">
                <div className="c-title">
                    <h1>Contact Us</h1>
                </div>
                <h2 className="want-to-know-more">Want to know more?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non vulputate ligula, vel efficitur enim. Maecenas fermentum quis orci id tempor. Aenean ligula turpis, hendrerit nec elit sed, facilisis interdum libero.</p>
                <div className="contact-us">
                    <ol>
                        <li>Phone Number: 615-509-5754</li>
                        <li>Address: 106 U.S.70 #4, Dickson, TN 37055</li>
                        <li>Business Hours
                            <ul className="b-hours">
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
                    <h1>Where are we?</h1>
                    <a target="_blank" href="https://www.google.com/maps/place/Dickson+Nutrition,+L.L.C./@36.0715852,-87.3772788,17z/data=!3m1!4b1!4m5!3m4!1s0x8864baaf5f5c62ed:0x756598cf87b68f1c!8m2!3d36.0715852!4d-87.3750901">
                        <img src={newsnipDN} alt="picture of dickson nutritions location" />
                    </a>
                    
                </div>
                <div className="contact-flex">
                    <p>Suspendisse sit amet vulputate lacus, id sodales nunc. Aliquam vehicula et velit eget ultricies. Pellentesque imperdiet quam sed ex suscipit dictum. Curabitur pulvinar gravida leo at eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque feugiat et tellus at feugiat.</p>

                </div>
            </div>
        </div>
    )
}

export default Contact;