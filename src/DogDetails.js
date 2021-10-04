import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import "./DogDetails.css"


const DogDetails = ({dogs}) => {
  const {name} = useParams();
  const dog = dogs.find(ele => ele.name === name);

  if (dog) {
    return (
      <div className="DogDetails">
        <h1>{dog.name}</h1>
        <h3>{`Age: ${dog.age}`}</h3>
        <img src={dog.src} alt={dog.name} />
        <h3>Facts:</h3>
        <ul>
          {dog.facts.map(fact => <li>{fact}</li>)}
        </ul>
        <Link to="/dogs">Go back</Link>
      </div>
    )
  } else {
    return <Redirect to="/dogs"/>
  }
}

export default DogDetails;