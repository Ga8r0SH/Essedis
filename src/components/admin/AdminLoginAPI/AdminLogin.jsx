import React from "react";
import classes from './AdminLogin.module.css';

const AdminLogin = props => {

    let onNameChange = (e) => {
        props.setAdminName(e.target.value);
    }

    let onPasswordChange = (e) => {
        props.setAdminPassword(e.target.value);
    }

    return (
        <div className={classes.adminLogin}>
            <form onSubmit={props.onLogin}>
                <div className={classes.login}>
                    <div className={classes.loginText}>
                        <div>Username:</div>
                        <div>Password:</div>
                    </div>
                    <div className={classes.loginInputs}>
                        <input type="text" value={props.adminName} onChange={onNameChange} required />
                        <input type="password" value={props.adminPassword} onChange={onPasswordChange} required />
                    </div>
                </div>
                <button type="submit">Enter</button>
                {props.loginError && <div className={classes.errorMessage}>{props.loginError}</div>}
            </form>
        </div>
    )
}

export default AdminLogin;