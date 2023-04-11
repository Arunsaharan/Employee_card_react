import React, { useEffect, useState } from "react";
import "./App.css";
import UserCards from "./UserCards/UserCards";

function App() {
  const [userData, setUserData] = useState([]);
  const [genderDetail, setGenderDetail] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleClick() {
    setGenderDetail(!genderDetail);
  }

  console.log(genderDetail);

  const maleOnly = userData.filter((item) => {
    let gen = genderDetail ? "male" : "female";
    return item.gender === gen;
  });
  return (
    <div className="App">
      <h1>User Cards</h1>
      <button className="switch-btn" onClick={handleClick}>
        Switch Gender
      </button>
      <header className="App-header">
        {maleOnly.map((item) => {
          return (
            <UserCards
              key={item.login.uuid}
              name={`${item.name.first} ${item.name.last} `}
              phone={item.phone}
              src={item.picture.medium}
              gender={item.gender}
              following={item.following}
              twitter={item.login.username}
              email={item.email}
              location={`${item.location.city}, ${item.location.country}`}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
