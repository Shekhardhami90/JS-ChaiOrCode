let myName = "shekhar";
let newName = myName;
newName = "dhami";
console.log(myName);
console.log(newName);

let user = {
  name: "dhami",
  email: "dhami@google.com",
};

let userOne = user;
userOne.email = "shekhardhami@github.com"

console.log(user.email);
console.log(userOne.email);
