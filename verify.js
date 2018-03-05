module.exports = function(x) {
    if(typeof x !== "number"){
        throw new Error("Input should be a number");
    }

    if(x <= 0){
        throw new Error("Input should be a positive number");
    }

    if(!Number.isInteger(x)){
        throw new Error("Input should be an integer");
    }
    
    return x;
};