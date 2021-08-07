import { useState, useEffect } from "react";
import "./header.scss";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../Button/Button";
const Header = ({ isLoggedin, setIsLoggedin }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <div className="header-title">
        <div>Bon Anniversaire Audrey</div>
      </div>
      {!isLoggedin && (
        <div className="lmj-banner flex">
          <Button
            onClick={() => history.push("/inscription")}
            title="Inscription"
          />
        </div>
      )}
    </div>
  );
};
export default Header;
