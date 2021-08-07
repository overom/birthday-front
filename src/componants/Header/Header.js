import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./header.scss";
const Header = ({ isLoggedin }) => {
  const history = useHistory();

  return (
    <div>
      <div className="header-title">
        <div>Bon Anniversaire Audrey</div>
        <br />
        {isLoggedin && <div>Seras-tu le premier à trouver la clé qui mene au coffre caché ?</div>}
      </div>
      {!isLoggedin && (
        <div className="lmj-banner flex">
          <Button onClick={() => history.push("/inscription")} title="Inscription" />
        </div>
      )}
    </div>
  );
};
export default Header;
