import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getCountry = (status, countryName) => {
    let textToUrl = encodeURIComponent(countryName);
    let endPoint = `http://restcountries.eu/rest/v2/${status}/${textToUrl}`;

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`There was an error ${err}`));
  };

  function handleChange(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getCountry("name", userInput);
    setUserInput("");
  }

  if (loading) return <Loading />;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="user-input"
          value={userInput}
          onChange={handleChange}
          placeholder="Write a country name"
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Country results={results} getCountry={getCountry} />
    </Fragment>
  );
}

export default App;
