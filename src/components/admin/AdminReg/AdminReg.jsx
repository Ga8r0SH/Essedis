import React from "react";
import { AdminListContainer } from "./AdminList/AdminListContainer";

const AdminReg = (props) => {

    let onNameChange = (e) => {
        props.setUsername(e.target.value);
    }

    let onPasswordChange = (e) => {
        props.setPassword(e.target.value);
    }

    let onConfirming = e => {
        props.setConfirmPassword(e.target.value);
    }

    return (
        <div className="adminReg">
            <div className="text">Регистрация нового администратора</div>
            <form onSubmit={props.handleSubmitNewAdmin}>
                <div className="registrationForm">
                    <div className="adminRegFormName">
                        <div>Username:</div>
                        <div>Password:</div>
                        <div>Confirm password:</div>
                    </div>
                    <div className="adminRegFormInputs">
                        <input type="text" value={props.username} onChange={onNameChange} required />
                        <input type="password" value={props.password} onChange={onPasswordChange} required />
                        <input type="password" value={props.confirmPassword} onChange={onConfirming} required />
                    </div>
                </div>
                <button type="submit">Register</button>
                {props.errorMessage && <div className="errorMessage">{props.errorMessage}</div>}
            </form>

            <AdminListContainer />

            <div className="exitAdmin">
                <button onClick={props.onHandleExit}>Выйти</button>
            </div>
        </div>
    )
}

export default AdminReg;