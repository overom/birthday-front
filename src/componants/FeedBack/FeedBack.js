import Button from "../Button/Button";
import { useHistory } from "react-router";
import "./feed-back.scss";

const FeedBack = () => {
  const history = useHistory();

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
