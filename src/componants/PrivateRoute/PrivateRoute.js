import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ componant: Componant, isLoggedin, setIsLoggedin,...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? (
          <Componant {...props}  setIsLoggedin={setIsLoggedin} />
        ) : (
          <Redirect to={{ pathname: "/connexion" }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
