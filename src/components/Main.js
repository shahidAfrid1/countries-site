import "../styles/main.css";
import "../styles/cards.css";
import "../styles/messages.css";
import Cards from "./Cards";
import Search from "./Search";
import React, { useState } from "react";
export default function Main(props) {
  const [countryData, setCountryData] = useState([]);
  const [api, setApi] = useState("https://restcountries.com/v3.1/all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  function search(event) {
    setApi(`https://restcountries.com/v3.1/name/${event.target.value}`);
    if (event.target.value === "") {
      setApi("https://restcountries.com/v3.1/all");
    }
  }

  function filter(event) {
    setApi(`https://restcountries.com/v3.1/region/${event.target.value}`);
  }

  React.useEffect(
    function () {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw Error("Not Found");
          }
          setError(false);
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setCountryData(data);
          console.log(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    },
    [api]
  );

  const cards = countryData.map((item) => {
    return (
      <Cards
        mode={props.mode}
        img={item.flags.svg}
        name={item.name.common}
        population={item.population}
        region={item.region}
        capital={item.capital}
        handleCardDetailByCard={props.handleCardDetailByCard}
        code={item.fifa}
      />
    );
  });
  return (
    <main className={props.mode ? "dark" : ""}>
      <Search mode={props.mode} search={search} filter={filter} />
      <div className="cards-container">
        {isLoading && (
          <p className={`msg ${props.mode ? "dark" : ""}`}>
            loading....
          </p>
        )}
        {error && <p className={`msg ${props.mode ? "dark" : ""}`}>{error}</p>}
        {!error && <>{cards}</>}
      </div>
    </main>
  );
}
