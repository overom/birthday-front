import { useEffect } from "react";
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
        await api({
          url: "/user-profile",
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        history.push("/connexion");
      }
    };
    getUser();
  }, [history]);

  return <Question />;
};
export default LandingPage;
