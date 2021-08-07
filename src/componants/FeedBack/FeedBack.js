import Button from "../Button/Button";
import { useHistory } from "react-router";
import "./feed-back.scss";
import { useEffect } from "react";

const FeedBack = () => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.state.nextQuestionId === 3) {
      history.push("/success");
    }
  }, []);

  const onNext = () => {
    history.push({
      pathname: "/",
      nextQuestion: history.location.state.nextQuestionId,
    });
  };

  if (history.location.state.result) {
    return (
      <div className="feed-back-container">
        Felicitation !!!
        <div className="button-container">
          <Button onClick={onNext} title="Question Suivante" />
        </div>
      </div>
    );
  }

  return (
    <div className="feed-back-container">
      Mausaise reponse !!!
      <div className="button-container">
        <Button onClick={onNext} title="Reessayer" />
      </div>
    </div>
  );
};

export default FeedBack;
