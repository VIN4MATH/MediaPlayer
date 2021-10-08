import React,{useRef} from 'react'
import Sidebar from '../sidebar Component/Sidebar';
import "./Header.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';


function Header(props) {

    // console.log(props);


    const [showNav, setShowNav] = useState(false);
    const inputEl = useRef ("");

    const getSearchTerm = () => {
        // console.log("SEARCH",inputEl.current.value);
     props.searchKeyword(inputEl.current.value);
    };
    

    return (
        <div className="Header">
            <div className="Header-left">

                <GiHamburgerMenu className="H-menu" onClick={() => {
                    setShowNav(!showNav)
                }} />

            </div>
            <div className="title"> 
                <h1>Media Player</h1>
            </div>

            <div className="Header-middle">
                <div className="search">

               
                    <input ref={inputEl} type="text" placeholder="Search Video" className="search-box" 
                    value ={ props.term} onChange = {getSearchTerm} />

                    <button className="search-btn"><FiSearch /></button>

                </div>
             

            </div>
            

            <div>
                <Sidebar show={showNav} />
            </div>







        </div>
    )
}
export default Header;