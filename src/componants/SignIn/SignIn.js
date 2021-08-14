import { useState } from "react";
import { useHistory } from "react-router";
import api from "../../config/api";
import Input from "../../componants/Input/Input";
import Button from "../../componants/Button/Button";
import "./signin.scss";
import { htmlEncoded } from "../../helpers/index";

const SignIn = ({ setIsLoggedin }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeEmail = (e) => {
    const emailValue = htmlEncoded(e.target.value);
    setIsError(false);
    setEmail(emailValue);
  };

  const onChangePassword = (e) => {
    const passwordValue = htmlEncoded(e.target.value);
    setIsError(false);
    setPassword(passwordValue);
  };

  const onSignIn = async () => {
    if (!email || !password) return setIsError(true);
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
