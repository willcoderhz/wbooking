import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import {DateRange} from 'react-date-range';
import SearchItem from "../../components/searchItem/searchItem";
import SearchItem1 from "../../components/searchItem1/searchItem";
import SearchItem2 from "../../components/searchItem2/searchItem";
import SearchItem3 from "../../components/searchItem3/searchItem";
import SearchItem4 from "../../components/searchItem4/searchItem";
import SearchItem5 from "../../components/searchItem5/searchItem";
import SearchItem6 from "../../components/searchItem6/searchItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const List = ()=>{

    const location = useLocation();
    console.log(location);
    const [desitination, setDestination] = useState(location.state.desitination);
    const [options, setOptions] = useState(location.state.options);
    const [date, setDate] = useState(location.state.date);

    const [openDate, setOpenDate] = useState(false);

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                    <label>Destination</label>
                    <input type="text" placeholder={desitination}/>
                    </div>
                    <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to
                    ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate&&<DateRange onChange= {(item)=>setDate([item.selection])} 
                    minDate ={new Date()}
                    ranges={date}
                    />}
                    </div>

                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                        <div className="lsOptionItem">
                            <span>Min price <small>per night</small></span>
                            <input type="number"  min={1} className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span>Max price <small>per night</small></span>
                            <input type="number"  min={1} className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span>Adult</span>
                            <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                        </div>
                        <div className="lsOptionItem">
                            <span>Children</span>
                            <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
                        </div>
                        <div className="lsOptionItem">
                            <span>Room</span>
                            <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                        </div>
                    </div>
                    </div>
                    <button>Search</button>
                    </div>
                    <div className="listResult">
                    <SearchItem/>
                    <SearchItem1/>
                    <SearchItem2/>
                    <SearchItem3/>
                    <SearchItem4/>
                    <SearchItem5/>
                    <SearchItem6/>
                    
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default List