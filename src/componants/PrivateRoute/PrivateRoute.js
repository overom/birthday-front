import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ componant: Componant, isLoggedin, setIsLoggedin, myUserId, admin, avatar, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? (
          <Componant {...props} setIsLoggedin={setIsLoggedin} />
        ) : (
          <Redirect to={{ pathname: "/connexion" }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
