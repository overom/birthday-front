import { useState, useEffect } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import "./signin.scss";
import Input from "../../componants/Input/Input";
import Button from "../../componants/Button/Button";
const SignIn = ({ setIsLoggedin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log("------------------------------------");
    console.log("hello");
    console.log("------------------------------------");
  }, []);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSignIn = async () => {
    let token;
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      token = response.data.token;
      sessionStorage.setItem("bon-anniv-audrey-token", response.data.token);
      setIsLoggedin(true);
      console.log("--------------data2----------------------");
      console.log(response.data);
      console.log("------------------------------------");
      if (response.data.token) {
        history.push("/");
      }

      history.push("/");
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
        <div className="element-marge">
          <Button onClick={onSignIn} title="Valider" />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
