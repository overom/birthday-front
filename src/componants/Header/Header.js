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
  console.log("====================================");
  console.log(isLoggedin, !profilPageIsActif);
  console.log("====================================");
  return (
    <div>
      <div className="header-title">
        <div>Bon Anniverssaire Audrey</div>
      </div>
      <div className="lmj-banner flex">
        {isLoggedin && !profilPageIsActif ? (
          <Button onClick={() => history.push("/profil")} title="profil" />
        ) : null}
        {isLoggedin && (
          <Button onClick={() => history.push("/")} title="Accueil" />
        )}

        {isLoggedin ? (
          <Button onClick={onLogout} title="Déconexion" />
        ) : (
          <Button
            onClick={() => history.push("/inscription")}
            title="Inscription"
          />
        )}
      </div>
    </div>
  );
};
export default Header;
