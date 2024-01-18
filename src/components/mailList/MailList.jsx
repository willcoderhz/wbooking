import "./maillist.css"

const MailList = ()=>{
    return(
        <div className="mail">
            <h1 className="mailTtile">Save your money from willbooking</h1>
            <span className="mailDesc">Sign up with us, Subscribing the best hotels</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList