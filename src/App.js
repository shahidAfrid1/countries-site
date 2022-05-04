import "./styles/global.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DetailedCard from "./components/DetailedCard";

function App() {
  const [mode, setMode] = useState(false);

  function toggleMode() {
    setMode((prevMode) => !prevMode);
  }

  const [detailCard, setDetailCard] = useState([]);
  const [detailCardApi, setDetailCardApi] = useState();
  console.log(detailCard);
  useEffect(
    function () {
      fetch(detailCardApi)
        .then((res) => res.json())
        .then((data) => setDetailCard(data));
    },
    [detailCardApi]
  );

  const handleCardDetail = (code) => {
    console.log("haan bhai bata sab thik");
    setDetailCardApi(`https://restcountries.com/v3.1/alpha/${code}`);
  };
  const handleCardDetailByCard = (code) => {
    setShowMain(false);
    console.log("haan bhai kuch thik nahi hai");
    setDetailCardApi(`https://restcountries.com/v3.1/alpha/${code}`);
  };

  const [showMain, setShowMain] = useState(true);

  function hideMain() {
    setShowMain((prevShow) => !prevShow);
  }

  const detailCardComponent = detailCard.map((item) => {
    return (
      <DetailedCard
        mode={mode}
        handleCardDetail={handleCardDetail}
        hideMain={hideMain}
        flagImg={item.flags.svg}
        name={item.name.common}
        nativeName={item.name.official}
        population={item.population}
        region={item.region}
        subregion={item.subregion}
        capital={item.capital}
        topLevelDomain={item.tld}
        borders={item.borders}
        currency={item.currencies}
        language={item.languages}
      />
    );
  });
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {showMain && (
        <Main
          mode={mode}
          handleCardDetailByCard={handleCardDetailByCard}
          hideMain={hideMain}
        />
      )}
      {!showMain && <>{detailCardComponent}</>}
    </>
  );
}

export default App;
