// Updating a property value

const userReviews = {};

userReviews["queenBee49"] = 4.0;
userReviews["reyFollador"] = 4.6;
userReviews.xander69 = 3.9;

console.log(userReviews);

if (typeof userReviews.newUser == "undefined"){
    userReviews.newUser = 4.9
} else{
    console.log("User name already taken!!!")
}

console.log(userReviews);
