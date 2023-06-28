import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import image from "../img/project1.jpg"


const Preview = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <div>
                <Button text="Buy"/>
                <button>
                    <FontAwesomeIcon icon={faHeart}/>
                    <p>Like</p></button>
            </div>
            <img src={image} alt="image"/>
        </div>
    )
}
export default Preview;