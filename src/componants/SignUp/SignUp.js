import { useState } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import "./signup.scss";
import Input from "../../componants/Input/Input";
import Button from "../../componants/Button/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUsername = (e) => {
    setPseudo(e.target.value);
  };

  const onSignUp = async () => {
    try {
      const response = await api.post("/register", {
        email,
        password,
        pseudo,
      });

      sessionStorage.setItem("bon-anniv-audrey-token", response.data.token);

      history.push("/login");
    } catch (error) {}
  };

  return (
    <div class="form-container">
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
      <div className="button-container">
        <Button onClick={onSignUp} title="Valider" />
      </div>
    </div>
  );
};

export default SignUp;
