import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/Button";
import image from "../img/project1.jpg";
import "./home.css";

const Preview = (props) => {
  return (
    <div className="container">
      <div className="pre">
        <h3>{props.name}</h3>
        <div className="pre-icon">
          <div>
            <Button text="Buy" />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <p>Like</p>
          </div>
        </div>
      </div>

      <img className="pre-img" src={props.image} alt="image" />
    </div>
  );
};
export default Preview;
