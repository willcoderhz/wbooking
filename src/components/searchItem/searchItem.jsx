import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import "./searchItem.css"
import { useNavigate } from "react-router-dom"


const SearchItem = ()=>{

    const navigate = useNavigate();

    const goToHotel = ()=>{
        navigate("/hotels/1");
    }

    return(
     
        <div className="searchItem">
            <img className="siImg" alt=""
             src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/495206547.jpg?k=709cefa69ecfeb3eac59dec23bc8b4e72380858fc476651ea215e40659fcd079&o=&hp=1"/>
             <div className="siDesc">
             <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                Entire studio • 1 bathroom • 21m2 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
                </span>
             </div>
             <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="isPrice">$165</span>
                    <span className="siTaxOp">Includes Taxes amd Fees</span>
                    <button onClick={()=>goToHotel()} className="siCheckButton">See Availability</button>
                </div>
             </div>
        </div>
       
    )
}

export default SearchItem