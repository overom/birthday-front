import { useState, useEffect } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";

const LandingPage = ({}) => {
  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token")));

    const getUser = async () => {
      try {
        const response = await api({
          url: "/user-profile",
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("----------------data--------------------");
        console.log(response.data);
        console.log("------------------------------------");
      } catch (error) {
        history.push("/connexion");
      }
    };
    getUser();
  }, []);

  return <div>test</div>;
};
export default LandingPage;
