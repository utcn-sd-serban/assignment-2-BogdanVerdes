import React, {Component} from "react";
import question from "../model/Questions";
import QuestionsList from "./QuestionsList";
import questionsListPresenter from "../presenter/questionsListPresenter";
import user from "../model/Users";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions,
});

export default class SmartQuestionsList extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(question.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        question.addListener("change",this.listener);
        user.addListener("change",this.listener);
    }

    render(){
        return(
            <QuestionsList 
            onAskQuestion={questionsListPresenter.onAskQuestion}
            onChange={questionsListPresenter.onChange}
            onSearch={questionsListPresenter.onSearch}
            onLogout={questionsListPresenter.onLogout}
            questions={this.state.questions} 
            username={user.state.currentUser.username}/>
        );
    }

    componentWillUnmount(){
        question.removeListener("change",this.listener);
    }
}