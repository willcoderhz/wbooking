import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";



const Hotel = ()=>{
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);
    };

    const photos =[
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206547.jpg?k=709cefa69ecfeb3eac59dec23bc8b4e72380858fc476651ea215e40659fcd079&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206721.jpg?k=34cf6f813b690c1bf9cea0420d2e718891acb398eb883d960b4f9ae568e5bff6&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206705.jpg?k=4b574877ddeaa846ae16d94548cfdebffc031fcda83f6e3197b240797d7180cc&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206564.jpg?k=ac5422e06243b06fbc4ba857b2aede201c65eb128175e689dd1fd24f122217bb&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206555.jpg?k=a295601201c51a26caafee6dcdfca8ca2e0bd515c8c9ecdb7cbd574f6986f51c&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206713.jpg?k=d935e1dc484f4ec0eff39c1f4213fb1e0fbc8308dcd5112aa70ffb12878e2a61&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206555.jpg?k=a295601201c51a26caafee6dcdfca8ca2e0bd515c8c9ecdb7cbd574f6986f51c&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206542.jpg?k=d5deb378ce3ae4e270f81c3d0a41b2f649b9a8913ba00b33cdf22023bfe4e727&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/landmark/max1024/255505.webp?k=86fea98c350debbeeda3b4c87c80627140877e8f1516a42a7c3a38088ffe002a&o="},
    ]

    return(
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowLeft" onClick={()=>setSlideNumber(Math.max(0,slideNumber-1))}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrowRight"onClick={()=>setSlideNumber(Math.min(photos.length-1,slideNumber+1))}/>
                    </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500 from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                       {photos.map((photo,i)=>(
                        <div className="hotelImgWrapper">
                            <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                        </div>
                       ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Madrid</h1>
                            <p className="hotelDesc">
                            One of our premier choices in Madrid, the Catalonia Las Cortes stands proudly as a jewel in the city, its structure a breathtaking 18th-century marvel that whispers tales of history and elegance. Guests are welcomed into a sanctuary of refinement and serenity, with each air-conditioned room artfully designed to marry classic charm with contemporary chic, ensuring a stay replete with comfort and luxury. The added convenience of complimentary WiFi allows for seamless connectivity, ensuring that the needs of the modern traveler are met with grace. Nestled in the pulsating heart of Madrid, the hotel's location is second to none.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-nights stay!</h1>
                            <span>
                                Located in the heart of Madrid, this hotel has an excellent location score of 9.7!
                            </span>
                            <h2><b>$945</b>(9 nights)</h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    )
}

export default Hotel