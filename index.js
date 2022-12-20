'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}


/**
 * identity: Designed to return the same value, unchanged
 * 
 * @param {Value}: Takes in any value and returns the value unchanged. 
 * @return {Value}: Returns the input value unchanged.
 */

_.identity = function(value){
    // return value unchanged
    return value;
}



/**
 * typeOf: Designed to return the data type of a value, as a string
 * 
 * @param {Value}: Takes in any value and returns the type of value, as a string.
 * @return {String}: Function returns the datatype of the input value, as a string.
 */

_.typeOf = function(value){
    // find typeOf value and return type as a string
    if(typeof value == "string"){ 
        return "string"; // return string
    }  else if (Array.isArray(value) === true){ // if array => array
        return "array"; // return array
        // if object => object
    } else if((value instanceof Date) === false && Array.isArray(value) === false && typeof value === "object" && value !== null){ 
        return "object"; // return object
    }
    // if undefined => undefined
    else if (typeof value == "undefined"){ 
        return "undefined"; // return undefined
    }
    // if number => number
    else if (typeof value == "number"){ 
        return "number"; // return number
    }
    // if boolean => boolean 
    else if (typeof value == "boolean"){
        return "boolean"; // return boolean
    }
    // if null => null
    else if (value == null){ 
        return "null"; // return null
    }
    // if function => function
    else if (typeof value == "function"){ 
        return "function"; // return function
    }
    // if date => date
    else if ((value instanceof Date) === true){ 
        return "date"; // return date
    }
}
/**
 * first: Designed to return the first number of items, in an array.
 * 
 * @param {Array} collection: An array over which to iterate.
 * @param {Number} value: The number of first items to return from the array. 
 * @return {Array, Item, or First number of items in array}: Function returns an empty array, an array element, or first number of items in array.
 */

_.first = function(array, number){
    let result = []; // create empty array
    if (Array.isArray(array) === false) { // test if array
        return result; // return empty array 
    } else if (typeof number !== "number") { // test if number
        return array[0]; // return first index of array
    } else if(number > array.length){ // edge case 
        return array; // return original array 
    } else { // edge case
        for (var i = 0; i < number; i++) { // for loop 
            result.push(array[i]); // push values to result array
        }
    }
    return result;
}

/**
 * last: Designed to return the last number of items, in an array.
 * 
 * @param {Array} collection: An array over which to iterate.
 * @param {Number} value: The number of last items to return from the array. 
 * @return {Array, Item, or Last number of items in array}: Function returns an empty array, an array element, or last number of items in array.
 */

_.last = function(array, number) { // logic logic as first, yet focused on last index
    let result = []; 
    if (Array.isArray(array) === false) { 
        return result; 
    } else if (typeof number !== "number") { 
        return array[array.length - 1]; 
    } else if(number > array.length){ 
        return array; 
    } else { 
        for (var i = 1; i <= number; i++) { 
            result.push(array[i]); 
        }
    }
    return result; 
};


/**
 * indexOf: Designed to loop over an Array and return the index of the first occurence in the array. 
 * 
 * 
 * @param {Array} collection: The array over which to iterate.
 * @param {Value} value: The value checked for, throughout the array.
 * @return {Number}: Function returns -1 or the index value
 */

_.indexOf = function(array, value){
    if (Array.isArray(array) === false){ // check if array
        return -1; 
    }
    for (let i = 0; i < array.length; i++){ // for loop 
        if(array[i] == value){ 
            return i; 
        }
    } return -1; 
}

/**
 * contains: Designed to loop over an Array and return boolean on whether the array contains the value or not. 
 * 
 * 
 * @param {Array} collection: The array over which to iterate.
 * @param {Value} value: The value checked for, throughout the array.
 * @return {Boolean}: Function returns boolean value, indicated whether the array contains a specific value
 */

_.contains = function(array, value){ 
    if (array.includes(value) === true){ // if array includes value
    return true;
    }
    return false;
    }

/**
 * unique: Designed to loop over an Array and return a new array with duplicate values removed. 
 * 
 * 
 * @param {Array} collection: The array over which to iterate.
 * @param {Value} value: The value checked for, throughout the array. Duplicates of valeus removed.
 * @return {Array}: Returns an array with duplicate values removed
 */

_.unique = function(array){ 
    let result = []; // empty array
    for( let i = 0; i < array.length; i++){ // for loop
        if(result.indexOf(array[i]) === -1) {   // if -1
                result.push(array[i]); // push item
                } 
            }
    return result; 
}
    

/**
 * filter: Designed to loop over an Array and apply a test function to every element.
 * If the test function returns true on the current element, the element is pushed to an output array.
 * Returns array of values that pass.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each element in the array
 * @return {Array}: Returns an array of values that pass the test function
 */

_.filter = function(array, callback){
    let result = []; // empty array
    for (let i = 0; i < array.length; i++){ // for loop 
        if (callback(array[i], i, array)){ // iterate through callback
            result.push(array[i]); // push to result
        }
    }  
     return result; 
}

/**
 * reject: Designed to loop over an Array and apply a test function to every element.
 * If the test function returns false on the current element, the element is pushed to an output array.
 * Returns array of values that FAILED the condition. Opposite logic of filter.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each element in the array
 * @return {Array}: Returns an array of values that failed the test function
 */

_.reject = function(array, callback){ // same logic as filter, with bang operator in if statement - rejecting instead of accepting values
    let result = []; // empty array
    for (let i = 0; i < array.length; i++){ // for loop 
        if (!callback(array[i], i, array)){ // iterate through callback
            result.push(array[i]); // push to result
        }
    }  
     return result; 
}

/**
 * partition: Designed to loop over an Array and apply a test function to every element.
 * If the test function returns true on the current element, the element is pushed to the first array of the output array.
 * If the test function returns false on the current element, the element is pushed to the second array of the output array.
 * Returns output array containing two sub-arrays of values that passed in the first sub-array and values that failed in the other sub-array. 
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each element in the array
 * @return {Array}: Function returns an array with two sub-arrays, the first sub-array consisting of values that pass the test function.
 * The other sub-array consists of values that failed the test function.
 */

_.partition = function(array, callback){
    let filtered = []; // filtered values
    let rejected = []; // rejected values
    let allValues = []; // both
    for (let i = 0; i < array.length; i++){ // for loop 
        if (callback(array[i], i, array)){ // iterate through callback
            filtered.push(array[i]); // push items
        } else if (!callback(array[i], i, array)){ // 
           rejected.push(array[i]); // push items
        } 
    }  
    allValues.push(filtered); // push filtered items
    allValues.push(rejected); // push rejected items
     return allValues; // return all items
}

/**
 * map: Designed to loop over a collection, Array or Object, and applies the callback function to each item
 * in the input array. Whatever this callback function returns, is pushed to an output array.
 * Returns an array with each element transformed.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * @return {Array}: Function returns an array with the callback function applied to every array element.
 * 
 */

 _.map = function(collection, func){
    // we're going to be calling a function for each element in the collection passing the arguments
    
        let result = []; // create an array for the result
    
    if (Array.isArray(collection) === true){         // if the collection is an array
        for(let i = 0; i < collection.length; i++){     // use for loop to iteration through collection
            result.push(func(collection[i], i, collection));    // call function on the element (collection[i]), it's index (i), and the collection (collection) and push to new array
        }
    } else if (Array.isArray(collection) === false){ // edge case if the collection is an object
        for (var key in collection){ // for in loop for object 
            result.push(func(collection[key], key, collection)); // call function on the value (collection[key]), it's key (key), and the collection (collection) and push to new array
        }
    }
        return result;        // return the new array
    }

/**
 * pluck: Designed to loop over an Array of Objects, and return an array
 * containing the property value for every element in the array of objects.
 * 
 * @param {Array of Objecst} collection: The array of objects over which to iterate.
 * @param {Property} value: The property value to search for and return for every element in the array of objects.
 * @return {Array}: Function returns an array containing the property value for every element in the array of objects.
 */

_.pluck = function(array, property){ 
    let result = []; // empty array
    for(let i = 0; i < array.length; i++){ // for loop 
        result.push(array[i][property]); // push iteration property
    }
        return result; 
    }

/**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. If EVERY value in the collection passes a condition,
 * true is returned, if not, then false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to every value in the collection.
 * @return {Boolean}: Function returns a boolean value, determining if every value in the collection passes the test condition.
 */

 _.every = function(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }
        }
    }//return true
    return true;
     }

/**
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. If at least one (SOME) value in the collection passes a condition,
 * true is returned, if not, then false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to every value in the collection.
 * @return {Boolean}: Function returns a boolean value, determining if at least one value in the collection passes the test condition.
 */

 _.some = function(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(collection[i]){
                    //return false;
                    return true;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(collection[key]){
                    //return false;
                    return true;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === true){
                    //return false
                    return true;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === true)
                {   //return false;
                    return true;
                }
            }
        }
    }//return true
    return false;
     }

/**
 * reduce: Designed to loop over an Array and applies the 
 * action Function to each element in the array, passing in the retun value of from the calculation on the preceding element.
 * Returns a single value of everything reduced.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each element in the 
 * array
 * @param {Seed}: Initializes the return value of the function. If not provided, will default to the first value in array.
 * @return {Value}: Function returns seed value, if it is not provided, will default to first value in array.
 */

_.reduce = function(array, callback, seed){
    // create result variable
    let result;
// determine if seed did not receive a value, else it did
if (seed === undefined){ // zero is a falsey value;
    result = array[0];
    for (let i = 1; i < array.length; i++){ // start at second index of array since, 
        result = callback(result, array[i], i, array);

    }
} else { // else it did
    result = seed;
    for (let i = 0; i < array.length; i++){
        result = callback(result, array[i], i, array);
    }
}
return result;
}

  /**
 * extend: Designed to extend properties of an object with the properties from another object.
 * Returns variable of extended object.
 * 
 * @param {Object} collection: The collection which to extend.
 * @param {Object} collection: The collection which allows property extension. 
 * @return {Object}: Function returns the update to object1.
 */

  _.extend = function(object1, ...object2) {
    let result = Object.assign(object1, ...object2); // use object assign and spread operator and assign to variable
    return result; // return variable
      }

module.exports.each = each;

