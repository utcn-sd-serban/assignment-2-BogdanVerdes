import user from "../model/Users";

class QuestionsListPresenter {
    onLogin(){
        user.searchUser(user.state.newUser.username,user.state.newUser.password);
        if(user.state.currentUser.username!==""){
            window.location.assign("#/questions");
        }
        else window.location.assign("#/");
    }
    onRegister(){
        user.addUser(user.state.newUser.username,user.state.newUser.password);
        window.location.assign("#/questions");
    }
    onChange(property,value){
        user.changeNewUserProperty(property,value);
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;