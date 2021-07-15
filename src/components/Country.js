import React, { Fragment } from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((result, i) => {
    let { name, area, capital, flag, population, borders } = result;
    return (
      <div key={i} className="country-container">
        <div class="container-header">
          <h2 className="country-name">{name}</h2>
          <h4>Capital: {capital}</h4>
        </div>
        <img src={flag} alt={name} />
        <div className="container-footer">
          <p className="border">
            Borders:{" "}
            {borders.map((border, i) => (
              <i key={i} onClick={() => getCountry("name", border)}>
                &nbsp; {border}
              </i>
            ))}{" "}
          </p>
          <span>Area: {area}</span> <span>Population: {population}</span>
        </div>
      </div>
    );
  });
  return <Fragment>{lands}</Fragment>;
};

export default Country;
