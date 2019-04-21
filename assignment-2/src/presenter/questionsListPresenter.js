import question from "../model/Questions";
import user from "../model/Users";
import answer from "../model/Answers";

class QuestionsListPresenter {
    onAskQuestion(){
        window.location.assign("#/ask-question");
    }
    onChange(property,value){
        question.changeNewQuestionProperty(property,value);
    }
    onSearch(){
        question.searchQuestion(question.state.newQuestion.title);
        window.location.assign("#/search");
    }
    onListAnswers(index){
        answer.listAnwsers(index);
        window.location.assign("#/answers/"+index); 
    }
    onLogout(){
        user.logout();
        window.location.assign("#/");
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;