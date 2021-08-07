import { useEffect } from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router";

const Success = () => {
  const history = useHistory();
  useEffect(() => {
    sessionStorage.removeItem("id-session");
    sessionStorage.removeItem("bon-anniv-audrey-token");
  }, []);
  return (
    <div>
      <div>Félicitation tu as trouvé la clé menant au coffre, n’oublie pas un coffre peut en cacher un autre.</div>
      <Button title="Terminer" onClick={() => history.push("/connexion")} />
    </div>
  );
};

export default Success;
