import { useState, useEffect } from "react";
import "./header.scss";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../Button/Button";
const Header = ({ isLoggedin, setIsLoggedin }) => {
  const history = useHistory();
  const [profilPageIsActif, setprofilPageIsActif] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/profil") {
      setprofilPageIsActif(true);
    } else {
      setprofilPageIsActif(false);
    }
  }, [location.pathname]);
  const onLogout = () => {
    setIsLoggedin(false);
    sessionStorage.removeItem("bon-anniv-audrey-token");
    history.push("/connexion");
  };
  return (
    <div className="lmj-banner flex">
      <div className="image-rognage">
        <div>Bon Anniverssaire Audrey</div>
      </div>
      {isLoggedin && !profilPageIsActif ? (
        <Button onClick={() => history.push("/profil")} title="profil" />
      ) : (
        <Button onClick={() => history.push("/")} title="Accueil" />
      )}
      {isLoggedin ? (
        <Button onClick={onLogout} title="Déconexion" />
      ) : (
        <Button onClick={() => history.push("/inscription")} title="Inscription" />
      )}
    </div>
  );
};
export default Header;
