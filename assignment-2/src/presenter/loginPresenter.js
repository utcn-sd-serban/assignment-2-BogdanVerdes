import user from "../model/Users";

class QuestionsListPresenter {
    onLogin(){
        let newUser = user.state.newUser;
        let users = user.state.users;

        for (let i = 0; i < users.length; i++) {
            if (newUser.username === users[i].username) {
                if (newUser.password === users[i].password) {
                    user.state.currentUser.username = newUser.username;
                    user.state.currentUser.password = newUser.password;
                }

            }
        }
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