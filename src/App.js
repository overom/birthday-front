import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./componants/PrivateRoute/PrivateRoute";
import SignUp from "./componants/SignUp/SignUp";
import Footer from "./componants/Footer/Footer";
import Header from "./componants/Header/Header";
import SignIn from "./componants/SignIn/SignIn";
import api from "./config/api";
import LandingPage from "./componants/LandingPage/LandingPage";
import FeedBack from "./componants/FeedBack/FeedBack";
import Success from "./componants/Success/Success";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    const token = JSON.parse(JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token")));

    if (!isLoggedin && token) {
      const getUser = async () => {
        try {
          await api({
            url: "/user-profile",
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });

          setIsLoggedin(true);
          setCheckLogin(true);
        } catch (error) {
          setCheckLogin(true);
        }
      };
      getUser();
    } else {
      setCheckLogin(true);
    }
  }, [isLoggedin]);

  return (
    <Router>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

      <Switch>
        {checkLogin && <PrivateRoute exact path="/" componant={LandingPage} isLoggedin={isLoggedin} />}
        {checkLogin && <PrivateRoute exact path="/success" componant={Success} isLoggedin={isLoggedin} />}
        <Route
          path="/connexion"
          render={() =>
            isLoggedin ? <Redirect to="/" /> : <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
          }
        ></Route>

        <Route
          path="/inscription"
          render={() => (isLoggedin ? <Redirect to="/" /> : <SignUp setIsLoggedin={setIsLoggedin} />)}
        ></Route>

        {checkLogin && <PrivateRoute exact path="/feedback" componant={FeedBack} isLoggedin={isLoggedin} />}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
