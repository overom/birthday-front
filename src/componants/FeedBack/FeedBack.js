import Button from "../Button/Button";
import { useHistory } from "react-router";

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
      <div>
        Felicitation !!!
        <div>
          <Button onClick={onNext} title="Question Suivante" />
        </div>
      </div>
    );
  }

  return (
    <div>
      Mausaise reponse !!!
      <div>
        <Button onClick={onNext} title="Reessayer" />
      </div>
    </div>
  );
};

export default FeedBack;
