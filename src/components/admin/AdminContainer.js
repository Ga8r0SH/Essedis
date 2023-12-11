import { useState, useContext } from "react";
import { setAdminAC, updateLogOutStateAC } from "../../redux/adminReducer";
import { connect } from "react-redux";
import axios from "axios";
import AdminReg from "./AdminReg/AdminReg";
import './AdminReg/Admin.css';
import AdminLogin from "./AdminLoginAPI/AdminLogin";
import AdminContext from "../../redux/adminContext";
import Cookies from "js-cookie";

const AdminAPI = () => {

  const isAdmin = useContext(AdminContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitNewAdmin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('*Passwords do not match.');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    await axios.post('http://localhost/essedis/api/admin/registration.php', formData)
      .then(response => {
        if (response.status === 200) {
          alert('Регистрация прошла успешно');
          setUsername('');
          setPassword('');
          setConfirmPassword('');
          setErrorMessage('');
        }
        console.log(response.data);
      })
      .catch(error => {
        setErrorMessage('Registration failed.');
        console.log(error);
      })
  }



  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', adminName);
    formData.append('password', adminPassword);

    await axios.post('http://localhost/essedis/api/admin/authentication.php', formData)
      .then(response => {
        if (response.status === 200) {
          if (response.data === true) {
            Cookies.set('isAdmin', 'true', { expires: 1 });
            window.location.reload()
          } else {
            setLoginError('*Неправильное имя пользователя или пароль');
          }
        }
      })
      .catch(error => {
        setLoginError('Login failed');
        console.log(error);
      })
  }

  let onHandleExit = () => {
    Cookies.set('isAdmin', 'false');
    window.location.reload();
  }

  return (
    <div className="admin">
      <div className="container">
        {!isAdmin && <AdminLogin
          setAdminName={setAdminName}
          setAdminPassword={setAdminPassword}
          // setLoginError={setLoginError}
          // setMessageSucces={setMessageSucces}

          adminName={adminName}
          adminPassword={adminPassword}
          loginError={loginError}

          onLogin={onLogin}
        />}

        {isAdmin && <AdminReg 
          setUsername={setUsername}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setErrorMessage={setErrorMessage}

          username={username}
          password={password}
          confirmPassword={confirmPassword}
          errorMessage={errorMessage}

          handleSubmitNewAdmin={handleSubmitNewAdmin}
          onHandleExit={onHandleExit}
        />}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setAdmin: value => {
      dispatch(setAdminAC(value))
    },
    updateLogOutState: value => {
      dispatch(updateLogOutStateAC(value));
    }
  }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminAPI);