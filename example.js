//warm up code
/*jshint esversion: 6 */
var database = [
  {
    username: "andre",
    password: "secret"
  },
  {
    username: "sally",
    password: "secret"
  },
  {
    username: "john",
    password: "secret"
  },
  {
    username: "ryan",
    password: "secret"
  }
];
var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from work"
  },
  {
    username: "Sally",
    timeline: "Javascript is super cool"
  }
];

var usernamePrompt = prompt("What's ur username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(
      newsFeed.forEach(news => {
        return news[i].timeline;
      })
    );
  } else {
    console.error("Sorry wrong username and password");
  }
}
signIn(usernamePrompt, passwordPrompt);

var todos = [
  "clean room",
  "brush teeth",
  "workout",
  "study javascript",
  "eat healthy"
];
//add ! after every elem in the array

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}
todos.forEach(i => console.log(i));
