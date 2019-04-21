import { EventEmitter } from "events";

class User extends EventEmitter{
    constructor(){
        super();
        this.state = {
            users : [{
                username: "bogdan",
                password: "verdes"
            }, {
                username: "verdes",
                password: "bogdan"
            }],
            newUser:{
                username: "",
                password: ""
            },
            searchedUser: [],
            currentUser: {
                username: "",
                password: ""
            }
        }
    }

    addUser(username,password){
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                username: username,
                password: password
            }]),
            currentUser:{
                username: username,
                password: password
            }
        }
        
        this.emit("change",this.state);
    }

    changeNewUserProperty(property,value){
            this.state = {
                ...this.state,
                newUser:{
                    ...this.state.newUser,
                    [property]:value
                }
            }
            this.emit("change",this.state);
    }

    logout(){
        this.state = {
            ...this.state,
            newUser:{
                ...this.state.newUser,
                username: "",
                password: ""
            },
            currentUser:{
                ...this.state.currentUser,
                username: "",
                password: ""
            }
        }
        this.emit("change",this.state);
}

    searchUser(username,password){
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
    }
}

const user = new User();

export default user;