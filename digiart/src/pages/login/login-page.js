import LoginForm from "../../components/login/login-form";
import art from "../../assets/login.png";
import '../login/style.css';


export const LoginPage = () => {

    return (
        <div className="login-container">
            {/* <div className="quote">
                <p>"Art is the closest we can come to understanding how a stranger really feels"</p>
                <p> - Quentin Crisp.</p>
            </div> */}
            <div><img className="login-img" src={art} alt="art-showcase" /> </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage;