import MaterialButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Button = ({ size, type = "submit", title, onClick }) => {
  return (
    <MaterialButton
      size={size}
      type={type}
      onClick={onClick}
      variant="contained"
      color="primary"
      style={{ width: "100%" }}
    >
      {title}
    </MaterialButton>
  );
};
export default Button;
