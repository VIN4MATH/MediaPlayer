import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from '../Component/Header Component/Header';




const Home = (props) => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState("");
    console.log("Search state data",searchResults);


    const searchHandler = (searchTerm) => {
        // console.log("serachwords:",searchTerm);
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newDataList = data.filter((users) => {
                return Object.values(users).join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResults(newDataList);
            // console.log("vvv:", newDataList);
        }
        else {
            setSearchResults(data);
        }
    }


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(data => {
                // console.log("Data:",data)
                setData(data)
            });
    }, []);






    // return (
    //     <div>
    //         <Header
    //             term={searchTerm}
    //             searchKeyword={searchHandler}
    //         />
    //         <br />
    //         <div className="card-section">

    //             {

    //                 data .map((users) => {
    //                     return (

    //                         <div className="card-items">

    //                             <div className="video-section">
    //                                 {users.id} Name:-{users.name}
    //                             </div>

    //                             <div className="card-btns">
    //                                 <button className="Like-Button"> {users.id} <BiLike /></button>
    //                                 <p> Name{users.address.street}</p>

    //                                 <button className="Dislike-Button">{users.id} <BiDislike /> </button>
    //                             </div>
    //                         </div>
    //                     )
    //                 }
    //                 )

    //             }

    //         </div>


    //     </div>


    // )

    return (
        <div>
            <Header term={searchTerm} searchKeyword={searchHandler} />

            <div className="card-section">

                {
                    searchResults.length > 0 ? (
                        searchResults.map((users) => {
                            console.log("Filtered users:",users)
                            return (
                                <div className="card-items">

                                    <div className="video-section">
                                        {users.id} Name:-{users.name}
                                    </div>

                                    <div className="card-btns">
                                        <button className="Like-Button"> {users.id} <BiLike /></button>
                                        <p> Name{users.address.street}</p>

                                        <button className="Dislike-Button">{users.id} <BiDislike /> </button>
                                    </div>
                                </div>

                            )
                        })
                    ) : (
                        
                        data.map((users) => {
                            console.log("Total users:",users);
                            return (
                                
                                <div className="card-items">
                                    

                                    <div className="video-section">
                                        {users.id} Name:-{users.name}
                                    </div>

                                    <div className="card-btns">
                                        <button className="Like-Button"> {users.id} <BiLike /></button>
                                        <p> Name{users.address.street}</p>

                                        <button className="Dislike-Button">{users.id} <BiDislike /> </button>
                                    </div>
                                </div>

                            )
                        })
                    )
                }
            </div>

        </div>




    )


}
export default Home;

