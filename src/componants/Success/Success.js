import { useEffect } from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import "./success.scss";

const Success = ({ setIsLoggedin }) => {
  const history = useHistory();
  useEffect(() => {
    sessionStorage.removeItem("id-session");
    sessionStorage.removeItem("bon-anniv-audrey-token");
  }, [setIsLoggedin]);

  const onFinish = () => {
    setIsLoggedin(false);
    history.push("/connexion");
  };

  return (
    <div>
      <div className="success-message">
        Félicitation tu as trouvé la clé menant au coffre, n’oublie pas un
        coffre peut en cacher un autre.
      </div>
      <Button title="Terminer" onClick={onFinish} />
    </div>
  );
};

export default Success;
