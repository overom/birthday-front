import { LinearProgress } from "@material-ui/core";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <LinearProgress />
      <div className="loader-text">Chargement...</div>
    </div>
  );
};

export default Loader;
