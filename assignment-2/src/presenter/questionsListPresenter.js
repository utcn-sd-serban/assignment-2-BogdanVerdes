import question from "../model/Questions";

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
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;