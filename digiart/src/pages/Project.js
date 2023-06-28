import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../img/project1.jpg";
import { faEyeDropper, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './home.css';

const Project = () => {
    return (
        <div className="new"> 
            <img className="img-main" src={image} alt="from"/>
            <div className="img-des">
                <div className="description">
                    <h3>Name</h3>
                    <h3>Category</h3>
                </div>
                <div className="description">
                    <div><FontAwesomeIcon icon={faHeart}/></div>
                    <div><FontAwesomeIcon icon={faEye}/></div>
                </div>
            </div>
        </div>
    )
}
export default Project;