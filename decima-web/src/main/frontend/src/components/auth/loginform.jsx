import {Component} from "react";
import "./loginform.scss";
import {Button, TextField} from "@material-ui/core";

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const {username, password} = this.state;
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `j_username=${username}&j_password=${password}`
        }).then(response => {
            if (response.ok) {
                return response;
            } else {
                throw new Error("Login failed");
            }
        }).then(response => {
            this.props.navigate("/greeting");
        }).catch(error => {
            this.setState({
                error: "Wrong username/password"
            });
        });
    }
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <TextField id="username" variant={"outlined"} label="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <TextField id="password" variant={"outlined"} name="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <Button type="submit" variant={"contained"} color={"primary"}>Login</Button>
                    </div>
                    {this.state.error && <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {this.state.error}
                        </div>
                    </div>}
                </form>
            </div>
        );
    }
}