// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.
const arr =[1,2,3,4]
function double(arr,fun) {
    fun(arr)
}
function fun(arr){
    console.log( (arr.map(el=>el*2)) )
}
double(arr,fun);

function doubleInt(intArray, callback){
    let doubledArray = intArray.map(num => num * 2)
    return callback(doubledArray)
}
doubleInt([1,2,3,4], (arr) => console.log(arr))
// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.
function manipulateString(string,logString) {
    let str = string.toUpperCase();
    return logString(str);
}
function logstring(str){
    console.log("The manipulated string is",str);
}
manipulateString("santosh", logstring)

// 3. Age in Days.
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.

// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."

// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

function ageInDays(object){
    const fullname = (object.firstname)+" ".concat(object.lastname);
    const ageInDays = object.age*360;
    return function logResult() {
        console.log(`The person's full name is ${fullname} and their age in days is ${ageInDays}`);
    }
}

const person ={
    firstname : "santosh",
    lastname : "jena",
    age : 26
}
const logMessage = ageInDays(person);
logMessage()

// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Animal Farm", author: "George Orwell", year: 1945 },
  ];
  function alphaBeticalOrder(books,callback) {
    const list = books.map(book => book.title).sort();
    return callback(list);
  }
  function callback(list) {
    console.log("Titles in alphabatic order:")
    list.forEach(book => console.log(book))
  }
  alphaBeticalOrder(books,callback);

// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".

// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!"

function greeting(name){
    // this.name = name;
    return new Promise(function message(resolve,reject){
        return typeof name == "string"
        ? resolve("hello, "+(name))
        : reject("name is not string")
    })
}
const x = greeting("santosh");
x.then(function f(value){
    console.log(value);
}).catch((value)=>console.log(value));

// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API 
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console

async function asycn(){
    return await fetch ("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
}

asycn().then(res => console.log(res))
.catch(error => console.log(error));

// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns 
// a to-do task, while the second API provides post details. The function should combine the results from both APIs 
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the 
// responses from the respective APIs

async function multipleRequest() {
    const [todore,postre] = await Promise.all(
        [fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1"),]
    )
    const todo = await todore.json();
    const post = await postre.json();

    const combine = {todo,post};
    console.log(combine);
}
// multipleRequest();

// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to 
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list 
// of posts, and then display them to the browser console

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data
  }
  
  async function logfetch(){
    const log = await getPosts();
    console.log(log)
  }
  
  logfetch()

//   9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors 
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 
// to simulate an error, and then display an error message on the webpage

async function fetchData() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/12345678"
    );
    debugger;
    return (res.status == 200 || res.status == 202)
      ? res.json()
      : {
          code: "fetch_failed",
          status: res.status,
          statusText: res.statusText,
        };
  }
  
  fetchData().then((res) => console.log(res));