const  StatusCode  = require('http-status-codes');

const info = (request, response)=> {

     response.json({
        "Success" : "True",
        "Message" : "The API is now redirecting to homepage API",
        "data" : {},
        "error" : {} 
   });
}
//here it is not taking statuscode package, have to see

//    response.status(StatusCode.OK).json({
//         "Success" : "True",
//         "Message" : "The API is now redirecting to homepage API",
//         "data" : {},
//         "error" : {} 
//    });


module.exports = {
    info
}