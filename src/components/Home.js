import React from "react"
import {Link} from "react-router-dom"
import img1  from "../imgs/image1.jpg"
import reflexology from "../imgs/reflexology1.jpg"
import suana from "../imgs/suana.jpg"

const Home = () => {
    return (
        <div>
            
            <div className="heroSection">
                <div className="heroOverlay">
                    <div className="heroSectionContentContainer">
                        <h1 className="title">A place where <span className="healing">healing</span> and <span className="relaxation">relaxation</span> begins</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ipsum, gravida sed augue eu, iaculis pharetra lectus. Morbi viverra lobortis leo, id porttitor turpis pellentesque sit amet.</p>
                        <div className="callToActionContainer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="Intro">
                <h2>Okay so what's the big deal?</h2>
                <p>In todays world we rely to heavily on modern medicine in order to knock off the physical and emotional pain our bodies experience. This reliance comes with a number of drawbacks that easily outweigh the positives, such as addiction and the overall wellness of the body. Here at Dickson Nutrition we utilize vitamins and other methods to not only take the pain away but also put that spark back into life.</p>
            </div>
            <section className="section1">
                {/* <h2>A glimpse at what we offer</h2> */}
                <div className="block1">
                    <div className="block1Info">
                        <h3>Massage Therapy</h3>
                        <p className="block-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis orci justo, ac ultrices purus consequat in. Vivamus hendrerit volutpat sem, at mollis eros venenatis tempus. Aliquam mattis tincidunt dictum. Proin tempor lorem sed feugiat interdum. Integer lorem elit, varius id augue ut, auctor porttitor eros. Nullam volutpat est lectus, eu congue ex posuere sit amet.</p>
                    </div>
                    <div className="block1-img-container">
                        <img className="massagePhoto" src={img1} />
                        <div className="idk"><Link to="/services" className="block-btn">Learn More</Link></div>
                       
                    </div>
                </div>
                <div className="block1">
                    <div className="block1Info">
                        <h3>Reflexology</h3>
                        <p className="block-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis orci justo, ac ultrices purus consequat in. Vivamus hendrerit volutpat sem, at mollis eros venenatis tempus. Aliquam mattis tincidunt dictum. Proin tempor lorem sed feugiat interdum. Integer lorem elit, varius id augue ut, auctor porttitor eros. Nullam volutpat est lectus, eu congue ex posuere sit amet.</p>
                    </div>
                    <div className="block1-img-container">
                        <img className="reflexPhoto" src={reflexology} />
                        <div><Link to="/services" className="block-btn">Learn More</Link></div>
                    </div>
                    <div className="goToServicesDiv">
                        <p>If you would like to see ALL that we offer please visit our <Link to="/services" className="goToServices">Services</Link>.</p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home;