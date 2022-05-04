import "../styles/cards.css";

export default function Cards(props) {


  return (
    <div className={`card ${props.mode ? "dark" : ""}`} onClick={()=> props.handleCardDetailByCard(props.code)}>
      <img src={props.img} alt="" />
      <div className="card-stats">
        <h2>{props.name}</h2>
        <p>
          Population:
          <span className={props.mode ? "dark" : ""}>{props.population}</span>
        </p>
        <p>
          Region:
          <span className={props.mode ? "dark" : ""}>{props.region}</span>
        </p>
        <p>
          Capital:
          <span className={props.mode ? "dark" : ""}>{props.capital}</span>
        </p>
      </div>
    </div>
  );
}
