import question from "../model/Questions";

class CreateQuestionPresenter {

    onAskQuestion(){
        question.addQuestion(question.state.newQuestion.title,
            question.state.newQuestion.body,
            question.state.newQuestion.tags,"bogdan");
        question.changeNewQuestionProperty("title","");
        question.changeNewQuestionProperty("body","");
        question.changeNewQuestionProperty("tags","");
        window.location.assign("#/");
    }

    onChange(property,value){
        question.changeNewQuestionProperty(property,value);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;