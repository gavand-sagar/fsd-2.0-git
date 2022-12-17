let globalUserObject = {
  email: "sagar@abc.com",
  username: "sagar",
  age: 32,
  contact: "678126378",
  profession: "Developer",
};

function toChangeAValue() {}

//spread

let obj = { ...globalUserObject, toChangeAValue };
obj.username;
obj.age;
obj.toChangeAValue();

// let obj = {globalUserObject,toChangeAValue}

//is newObject copy of globalUserObject?

function onlyUsername(username, password) {
    if ((username == "sagar")) {

    }
}

function usernameAndPassword(username, password) {
    if ((username == "sagar" && password == '123')) {

    }
}

function usernameAndPasswordFromDatabase(username, password) {
    if ((username == "sagar" && password == '123')) {

    }
}

function login(username, password, func) {
    if(func(username, password)){
        //
    }else{
        Navigate('')
    }
}

login('Sagar','123',usernameAndPasswordFromDatabase)


// Higher oder function is a function that accepts another function as parameter
// Higher oder Component is a Component that accepts another Component as parameter