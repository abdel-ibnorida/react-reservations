import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersList from "../../mocks/credentials";
import styles from "./index.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authFailed, setAuthFailed] = useState(false);

  const onHandleUsername = (e) => setUsername(e.target.value);

  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  const authentication =(mock,username, password)=>{
   return mock.find(element => element.username===username && element.password===password);
  }
    try {
      if (authentication(usersList,username,password)) {
        navigate("/dashboard");
        localStorage.setItem("auth", true);
      }
      throw new Error("Credenziali non valide");
    } catch (error) {
        setAuthFailed(true)
    }
  };

  return (
    authFailed ? <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={onHandleUsername}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={password}
          onChange={onHandlePassword}
          type="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Log in" />
      </form>
    </div> : <div>errore{console.log(authFailed)}</div> 
  );
};

export default Login;