import { useState } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import "./signin.scss";
import Input from "../../componants/Input/Input";
import Button from "../../componants/Button/Button";
const SignIn = ({ setIsLoggedin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const onChangeEmail = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  };

  const onSignIn = async () => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      sessionStorage.setItem("bon-anniv-audrey-token", response.data.token);
      setIsLoggedin(true);

      if (response.data.token) {
        history.push("/");
      }

      history.push("/");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="form-container">
      <div className="signin-title">Connexion</div>

      <Input
        onChange={onChangeEmail}
        value={email}
        label="Email"
        type="email"
      />
      <Input
        onChange={onChangePassword}
        value={password}
        label="Password"
        type="password"
      />
      {isError && (
        <div className="error-container">
          Mauvais mots de passe ou email
          <br /> Veillez reessayer
        </div>
      )}
      <div className="button-container">
        <Button onClick={onSignIn} title="Valider" />
      </div>
    </div>
  );
};
export default SignIn;
