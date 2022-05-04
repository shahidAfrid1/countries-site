import "../styles/borders.css"
export default function Borders(props){
    console.log(props.code);
    return(
        <div className={`border ${props.mode ? "dark": ""}`} onClick={() => props.handleCardDetail(props.borderName)}>
            {props.borderName}
        </div>
    )
}