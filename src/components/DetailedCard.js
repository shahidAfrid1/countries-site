import backArrowLight from "../icons/backarrowlight.png";
import backArrowDark from "../icons/backarrowdark.png";
import "../styles/detailedCard.css";
import Borders from "../components/Borders";
export default function DetailedCard(props) {
  const borders = props.borders.map((item) => {
    return <Borders borderName={item} mode={props.mode} handleCardDetail={props.handleCardDetail} />;
  });

  const currency = Object.values(props.currency)
  const language = Object.values(props.language)

  return (
    <section className={props.mode ? "dark" : ""}>
      <div className={`back-btn ${props.mode ? "dark" : ""}`} onClick={props.hideMain}>
        <img src={props.mode ? backArrowDark : backArrowLight} alt="" />
        <p>Back</p>
      </div>
      <div className={`card-detail ${props.mode ? "dark" : ""}`}>
        <img src={props.flagImg} alt="flag" />
        <h2>{props.name}</h2>
        <div className="location-info">
          <p>
            Native Name: <span>{props.nativeName}</span>
          </p>
          <p>
            population: <span>{props.population}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Sub Region: <span>{props.subregion}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
        <div className="commom-info">
          <p>
            Top Level Domain: <span>{props.topLevelDomain}</span>
          </p>
          <p>
            Currency: <span>{currency[0].name}</span>
          </p>
          <p>Languages: <span>{language + ""} </span> </p>
        </div>
        <div className="border-countries">
          <p>
            Border Countries: <span>{borders}</span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
