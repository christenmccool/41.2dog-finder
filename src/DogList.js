import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
  return (
    <div className="DogList">
      {dogs.map(dog => (
        <Link to={`dogs/${dog.name}`} key={dog.name}>  
          <img src={dog.src} alt={dog.name} />
        </Link> 
        )
      )}
    </div>
  )
}

export default DogList;

