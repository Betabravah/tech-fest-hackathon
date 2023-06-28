import Project from "../components/Project"
import './home.css'
import { Link } from "react-router-dom";
import Preview from "./preview";

const Projects = () => {
    return (
        <div className="projects">
            <Link to={Preview}><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
            <Link to="/"><div><Project /></div></Link>
        </div>
    )
}
export default Projects;