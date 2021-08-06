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
    let token;

    try {
      const response = await api.post("/register", {
        email,
        password,
        pseudo,
      });
      token = response.data.token;
      sessionStorage.setItem("bon-anniv-audrey-token", response.data.token);
      console.log("----------------res.data--------------------");
      console.log(response.data);
      console.log("------------------------------------");

      history.push("/login");
    } catch (error) {}
  };

  return (
    <div className="lmj-main">
      <div className="lmj-flex">
        <div className="element-size">
          <Input onChange={onChangeEmail} value={email} label="Email" type="email" />
        </div>
        <div className="element-marge  element-size">
          <Input onChange={onChangePassword} value={password} label="Password" type="password" />
        </div>
        <div className="element-marge  element-size">
          <Input onChange={onChangeUsername} value={pseudo} label="Username" />
        </div>
        <div className="element-marge">
          <Button onClick={onSignUp} title="Valider" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
