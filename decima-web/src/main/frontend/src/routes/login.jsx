import { useNavigate } from "react-router-dom";
import LoginWrapper from "../components/auth/loginwrapper";

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <LoginWrapper />
        </div>
    )
}