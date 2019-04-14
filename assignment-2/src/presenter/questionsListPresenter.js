import question from "../model/Questions";
import user from "../model/Users";

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
    onLogout(){
        user.state.currentUser.username="";
        user.state.currentUser.password="";
        user.state.newUser.username="";
        user.state.newUser.password="";
        window.location.assign("#/");
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;