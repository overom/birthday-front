import { useState } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import "./signup.scss";
import Input from "../../componants/Input/Input";
import Button from "../../componants/Button/Button";
import { htmlEncoded } from "../../helpers/index";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [isError, setIsError] = useState(false);
  const history = useHistory();

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

  const onChangeUsername = (e) => {
    const usernameValue = htmlEncoded(e.target.value);
    setIsError(false);
    setPseudo(usernameValue);
  };

  const onSignUp = async () => {
    if (!email || !password || !pseudo) return setIsError(true);

    try {
      const response = await api.post("/register", {
        email,
        password,
        pseudo,
      });

      sessionStorage.setItem("bon-anniv-audrey-token", response.data.token);

      history.push("/connexion");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="form-container">
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

      <Input onChange={onChangeUsername} value={pseudo} label="Username" />

      {isError && (
        <div className="error-container">
          Mauvais mots de passe ou email
          <br /> Veillez reessayer
        </div>
      )}
      <div className="button-container">
        <Button onClick={onSignUp} title="Valider" />
      </div>
    </div>
  );
};

export default SignUp;
