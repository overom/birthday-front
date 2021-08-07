import { useState, useEffect } from "react";
import api from "../../config/api";
import { useHistory } from "react-router";
import Input from "../Input/Input"
import Button from "../Button/Button"
import "../Question/question.scss"


const Question = ()=>{
    const [questionId, setQuestionId] = useState(1);
    
const [userResponse , setUserResponse] = useState("")
    const history = useHistory();
    const [dataquestion , setDataQuestion] = useState("")

useEffect(()=>{
const getQestion = async()=>{
    const token = JSON.parse(
        JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
      );
    try {
        const response = await api({
            url: "/question/"+ questionId,
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('--------------------data----------------');
          console.log(response.data);
          console.log('------------------------------------');
  setDataQuestion(response.data.question)
    } catch (error) {
        
    }
}
getQestion()



},[])


const onSubmit = async()=>{
    
    const token = JSON.parse(
        JSON.stringify(sessionStorage.getItem("bon-anniv-audrey-token"))
      );

try {
    const response = await api({
        url: "/reponse/"+ questionId,
        method: "post",
        data:{userResponse},
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('------------------response.data------------------');
      console.log(response.data);
      console.log('------------------------------------');
      history.push("")
      setQuestionId(response.data.nextQuestionId)
      if(response.data.reponse){

        try {
            const response = await api({
                url: "/question/"+ questionId,
                method: "get",
                headers: { Authorization: `Bearer ${token}` },
              });
             
        } catch (error) {
            console.log('------------error-----------------------');
            console.log(error);
            console.log('------------------------------------');
        }
      }

      
} catch (error) {
    console.log('------------error2-----------------------');
    console.log(error);
    console.log('------------------------------------');
}



}

const onChange = (e)=>{
    setUserResponse(e.target.value)
}


return(
<div className="flex-direction">
    <div>
    {dataquestion}
    </div>
   <div className="flex-button">
       <br/>
       <Input value={userResponse} onChange={onChange} label="Votre réponse"/>
    <Button onClick={onSubmit} title="Envoyer"/>
   </div>
    
    
    </div>

)
}
export default Question