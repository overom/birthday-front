import { useState, useEffect } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "../Question/question.scss";
import Loader from "../Loader/Loader";

const Question = () => {
  const [questionId, setQuestionId] = useState(1);
  const [userResponse, setUserResponse] = useState("");
  const [dataquestion, setDataQuestion] = useState("");
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (history?.location?.nextQuestion) {
      setQuestionId(history?.location?.nextQuestion);
      const getNextQuestion = async () => {
        const token = JSON.parse(
          JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
        );
        try {
          const response = await api({
            url: "/question/" + history?.location?.nextQuestion,
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });

          setDataQuestion(response.data.question);
          console.log("-----------------data-------------------");
          console.log(response.data);
          console.log("------------------------------------");
        } catch (error) {}
      };
      getNextQuestion();
    } else {
      const getQestion = async () => {
        sessionStorage.setItem("id-session", questionId);

        const token = JSON.parse(
          JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
        );
        try {
          const response = await api({
            url: "/question/" + questionId,
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });
          setDataQuestion(response.data.question);
          setQuestionId(response.data.questionId);
        } catch (error) {}
      };
      getQestion();
    }
  }, [history?.location?.nextQuestion, questionId]);

  const onSubmit = async () => {
    setIsLoading(true);
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
    );
    sessionStorage.setItem("id-session", questionId);
    try {
      const response = await api({
        url: "/reponse/" + questionId,
        method: "post",
        data: { userResponse },
        headers: { Authorization: `Bearer ${token}` },
      });

      setQuestionId(response.data.nextQuestionId);
      setIsLoading(false);

      history.push({
        pathname: "/feedback",
        state: {
          nextQuestionId: response.data.nextQuestionId,
          result: response.data.reponse,
        },
      });
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setUserResponse(e.target.value);
    setIsError(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className={isLoading ? "page-container" : ""}>
        <div className="flex-direction">
          <div className="question-title">Question {questionId}</div>
          <div className="question-container">{dataquestion}</div>
          <div className="flex-button">
            <Input
              value={userResponse}
              onChange={onChange}
              label="Votre réponse"
            />
            <div className="button-container">
              <Button onClick={onSubmit} title="Envoyer" />
            </div>
            {isError && (
              <div className="error-container">
                Oups une erreur est survenu
                <br /> Veillez reessayer
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
