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
             src="https://cf.bstatic.com/xdata/images/hotel/square200/125342544.webp?k=60c0aa736d7222c9ed59cad09bc23e82e90b3554818dd898cc5e4ecb088bc368&o="/>
             <div className="siDesc">
             <h1 className="siTitle">Aurora Elegance</h1>
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
                    <button>8.7</button>
                </div>
                <div className="siDetailText">
                    <span className="isPrice">$145</span>
                    <span className="siTaxOp">Includes Taxes amd Fees</span>
                    <button onClick={()=>goToHotel()} className="siCheckButton">See Availability</button>
                </div>
             </div>
        </div>
       
    )
}

export default SearchItem