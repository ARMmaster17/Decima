import LoginForm from "./loginform";
import {useNavigate} from "react-router-dom";
import {Paper} from "@material-ui/core";

export default function LoginWrapper() {
    let navigate = useNavigate();

    return (
        <Paper elevation={3}>
            <LoginForm navigate={navigate}/>
        </Paper>
    )
}