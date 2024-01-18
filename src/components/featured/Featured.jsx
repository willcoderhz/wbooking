import "./featured.css"

const Featured = ()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/977066.jpg?k=3659969918f1a86fc601a58056bd1a0f9c1b1e5205cc75e5dd83c5cc6c1ace49&o=" 
            alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>Las Vegas</h1>
               <h2>256 properties</h2>
            </div>
            </div>
            <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o=" 
            alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>New York</h1>
               <h2>189 properties</h2>
            </div>
            </div>
            <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976870.jpg?k=4bb231f86e973cac2971077b1664c1374fc0d718c95634b4cb01ae4550262f23&o=" 
            alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>Los Angles</h1>
               <h2>346 properties</h2>
            </div>
            </div>
         
        </div>
    )
}

export default Featured