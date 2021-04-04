import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const doLogin = async () => {
        try {
            if (username == "admin" && password == "123") {
                history.push('/dashboard')

            }
            else {
                alert('Incorrect username or password.')
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="d-flex flex-column flex-root">
            <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
                <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
                    <div className="login-form login-signin">
                        <div className="text-center mb-10 mb-lg-20">
                            <h3 className="font-size-h1">Sign In</h3>
                            <p className="text-muted font-weight-bold">Enter your username and password</p>
                        </div>
                        <form className="form" id="loginform">
                            <div className="form-group">
                                <input type="text" placeholder="Username" data-testid="app-input" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" data-testid="app-input" value={password} onChange={(e) => { setPassword(e.target.value) }}  />
                            </div>
                            <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                                <button type="submit" id="signin" onClick={(e) => { doLogin() }} className="btn btn-primary font-weight-bold px-9 py-4 my-3">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
