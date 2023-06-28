import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../img/project1.jpg";
import { faEyeDropper, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  return (
    <div className="new">
      <img className="img-main" src={props.image} alt="from" />
      <div className="img-des">
        <div className="description">
          <h3>{props.name}</h3>
          <h3>{props.category}</h3>
        </div>
        <div className="description">
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} onClick={props.onViewClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
