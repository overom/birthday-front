import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  componant: Componant,
  isLoggedin,
  setIsLoggedin,
  pseudo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? (
          <Componant {...props} setIsLoggedin={setIsLoggedin} pseudo={pseudo} />
        ) : (
          <Redirect to={{ pathname: "/connexion" }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
