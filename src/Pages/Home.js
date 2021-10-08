import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../Component/Header/Header";
import VideoCard from "../Component/VideoCard/VideoCard";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  console.log("Search state data", searchResults);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDataList = data.filter((users) => {
        return Object.values(users)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newDataList);
      // console.log("vvv:", newDataList);
    } else {
      setSearchResults(data);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("Data:",data)
        setData(data);
      });
  }, []);

  const displayVideos = (data) => {
    return (
      data && data.map((user, index) => <VideoCard user={user} key={index} />)
    );
  };

  return (
    <div>
      <Header isShowInput term={searchTerm} searchKeyword={searchHandler} />

      <div className="card-section">
        {searchResults.length > 0
          ? displayVideos(searchResults)
          : displayVideos(data)}
      </div>
    </div>
  );
};
export default Home;
