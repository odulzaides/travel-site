'use strict';

// Athlete class
class Athlete {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    addToUsers(){
        this.push(Users);
    }
}

// Cyclists
class Cyclist extends Athlete{
    setMetrics(ftp, lthr){
        this.ftpMult = [.55, .56, .75, .76, .95, .96, 1.05, 1.06, 1.20, 1.21, 1.50];
        this.lthrMult = [10,20];
        this.ftp = ftp;
        this.lthr = lthr;

        // console.log('Cyclist.setMetrics', this.ftp, this.lthr);
        

        let powerZones = this.ftpMult.map((item)=>{ return Math.floor(item*this.ftp)});
        let heartZones = this.lthrMult.map((item)=>{return Math.floor(item*this.lthr)})
        // console.log(powerZones, heartZones);
        
    }
}

// Runners
class Runner extends Athlete {
    setMetrics(lthr){
        this.lthr = lthr;
        // console.log('Runners metrics', this.lthr)
    }
}

// Site users
class Users {
    constructor(){
        this.users = []
    }
    addUser (user){
        this.users.push(user)
    }
    getUsers(){
        return this.users;
    }
    getUser(name){   
        var users = this.users;
         function findUser(user){
        console.log("****", user.firstName, name);      

           return user.firstName === name;
            }
        return users.find(findUser);
    }
}

// add Athlete
const oscar = new Cyclist("Oscar", "Dulzaides", 56);
oscar.setMetrics(230, 152);

const thomas = new Cyclist("Thomas", "Corea", 26);
thomas.setMetrics(200, 143);

const rick = new Runner("Rick", "Danko", 23);
rick.setMetrics(162);

// Users class
const users = new Users("users");
users.addUser(oscar);
users.addUser(thomas);
users.addUser(rick);

users.getUsers();
var athlete = users.getUser("Rick");
console.log("Full Name: ", athlete.firstName, athlete.lastName, "\n", "Age: ", athlete.age );

