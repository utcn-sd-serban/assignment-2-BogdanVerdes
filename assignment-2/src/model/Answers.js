import { EventEmitter } from "events";

class Answer extends EventEmitter{
    constructor(){
        super();
        this.state = {
            answers : [{
                qId: 0,            
                text: "This is an answer",
                author: "verdes",
                score: 0
            }, {
                qId: 1,
                text: "Good",                
                author: "bogdan",
                score: 0
            }],
            newAnswer:{
                text: "",
                author: "",
                score: 0
            },
            searchedAnswers:[]
        }
    }

    addAnswer(text,author,qId){
        if(text!==""){
        this.state = {
            ...this.state,
            answers: this.state.answers.concat([{
                qId: qId,
                text: text,
                author: author,
                score: 0
            }])
        }
        this.emit("change",this.state);
    }
    }

    changeNewAnswerProperty(property,value){
            this.state = {
                ...this.state,
                newAnswer:{
                    ...this.state.newAnswer,
                    [property]:value
                }
            }
            this.emit("change",this.state);
    }

    listAnwsers(qId){
            this.state.searchedAnswers = this.state.answers.filter(
                answer => answer.qId === qId
            )
            this.emit("change",this.state);
    }
}

const answer = new Answer();

export default answer;