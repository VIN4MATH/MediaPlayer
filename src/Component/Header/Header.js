import React  from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import PropTypes from 'prop-types';



function Header({ searchKeyword, term, isShowInput}) {

    // console.log(props);


    const [showNav, setShowNav] = useState(false);

    const getSearchTerm = (event) => {
        // console.log("SEARCH",inputEl.current.value);
        searchKeyword(event.target.value);
    };


    return (
        <div className="Header">
            <div className="Header-left">

                <GiHamburgerMenu className="H-menu" onClick={() => {
                    setShowNav(!showNav);
                }} />

            </div>
            <div className="title">
                <h1>Media Player</h1>
            </div>

            {isShowInput && (
                <div className="Header-middle">
                    <div className="search">
                        <input type="text" placeholder="Search Video" className="search-box"
                            value={term} onChange={getSearchTerm} />
                        <button className="search-btn"><FiSearch /></button>
                    </div>
                </div>
            )}
            <div>
                <Sidebar show={showNav} />
            </div>
        </div>
    );
}
export default Header;

Header.defaultProps = {
    isShowInput: false
};

Header.propTypes = {
    isShowInput: PropTypes.bool
};