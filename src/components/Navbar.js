import "../styles/global.css"
import "../styles/navbar.css"
import moonLight from "../icons/moonlight.png"
import moonDark from "../icons/moondark.png"

export default function Navbar(props){
    return(
        <nav className={props.mode ? "dark" : "" }>
            <h1>Where in the world?</h1>
            <div className="mode" onClick={props.toggleMode}>
                <img src={props.mode ? moonDark : moonLight} alt="" />
                <p>Dark Mode</p>
            </div>
        </nav>
    )
}