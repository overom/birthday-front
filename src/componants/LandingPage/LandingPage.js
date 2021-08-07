import { useState, useEffect } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import Question from "../Question/Question";

const LandingPage = () => {

  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
    );

    const getUser = async () => {
      try {
        const response = await api({
          url: "/user-profile",
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        });

      } catch (error) {
        history.push("/connexion");
      }
    };
    getUser();
  }, []);

  return <Question />;
};
export default LandingPage;
