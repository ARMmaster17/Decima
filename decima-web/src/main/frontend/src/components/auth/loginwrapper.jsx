import LoginForm from "./loginform";
import {useNavigate} from "react-router-dom";

export default function LoginWrapper() {
    let navigate = useNavigate();

    return (
        <LoginForm navigate={navigate}/>
    )
}