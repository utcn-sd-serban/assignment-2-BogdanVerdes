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

    searchUser(username,password){
            this.state.searchedUser = this.state.users.filter(
                user => (user.username === username &&
                user.password === password)
            )
            this.state.currentUser = this.state.searchedUser;
            this.emit("change",this.state);
    }
}

const user = new User();

export default user;