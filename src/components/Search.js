import searchLight from "../icons/searchlight.png";
import searchDark from "../icons/searchdark.png";
import downArrowLight from "../icons/downarrowlight.png";
import downArrowDark from "../icons/downarrowdark.png";
import "../styles/search.css";
export default function Search(props) {
  return (
    <div className="form">
      <div className="search-bar">
        <img src={props.mode ? searchDark : searchLight} alt="" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a country..."
          className={props.mode ? "dark" : ""}
          onChange={props.search}
        />
      </div>
      <div className="filterDropdown">
        <img src={props.mode ? downArrowDark : downArrowLight} alt="" />
        <select name="filter" id="" placeholder="filter" className={props.mode ? "dark" : ""} onChange={props.filter}>
          <option hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
