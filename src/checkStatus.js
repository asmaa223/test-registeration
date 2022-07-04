'use strict'
const {includes, has, map} = require('lodash')

function checkStatus(firstName, lastName) {

   //check if user exists:
   const fullName = firstName + " " + lastName
   let exists = Object.keys(userMap).some(key => userMap[key] === fullName.trim());
   let status; 
   if(exists)
    { 
        if((userMap[fullName] === "active"))
        { 
            status = "User Exists and is Active";
            return status
        }
        else
        {
            status = "User does not exist";
            return status
        } 
    }
    else return "User does not exist";

}

const userMap = [
    
    {"Rafeal Turtle" : "active" },
    {"Donatello Turtle" : "inactive"},
    {"Michaelanglo Turtle": "active"},
    {"Leanordo Turtle": "inactive"}
    
]

 
module.exports = {checkStatus}