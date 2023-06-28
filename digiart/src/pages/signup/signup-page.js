import SignUpForm from "../../components/signup/signup-form";
import art from "../../assets/sign-up.png";
import '../signup/style.css';


export const SignUpPage = () => {

    return (
        <div className="signup-container">
            <div className="quote">
                <p>"Art is the closest we can come to understanding how a stranger really feels"</p>
                <p> - Quentin Crisp.</p>
            </div>
                <div><img className="signup-img" src={art} alt="art-showcase" /> </div>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage;