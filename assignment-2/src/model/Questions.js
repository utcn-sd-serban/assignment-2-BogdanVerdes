import { EventEmitter } from "events";

class Question extends EventEmitter{
    constructor(){
        super();
        this.state = {
            questions : [{
                title: "What is javascript?",
                body: "I want to know",
                tags: "programming,javascript",
                author: "bogdan",
                score: 0
            }, {
                title: "How are you?",
                body: "Hello i am new here",
                tags: "general",
                author: "verdes",
                score: 0
            }],
            newQuestion:{
                title: "",
                body: "",
                tags: "",
                author: "",
                score: 0
            },
            searchedQuestions: []
        }
    }

    addQuestion(title,body,tags,author){
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                title: title,
                body: body,
                tags: tags,
                author: author,
                score: 0
            }])
        }
        this.emit("change",this.state);
    }

    changeNewQuestionProperty(property,value){
            this.state = {
                ...this.state,
                newQuestion:{
                    ...this.state.newQuestion,
                    [property]:value
                }
            }
            this.emit("change",this.state);
    }

    searchQuestion(title){
            this.state.searchedQuestions = this.state.questions.filter(
                question => question.title.includes(title) 
            )
            this.state.searchedQuestions = this.state.searchedQuestions.concat(
                this.state.questions.filter(
                    question => question.tags.includes(title)
                )
            )
            let unique = [...new Set(this.state.searchedQuestions)];
            this.state.searchedQuestions = unique;
            this.emit("change",this.state);
    }
}

const question = new Question();

export default question;