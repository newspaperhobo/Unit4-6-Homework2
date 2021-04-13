//Homework Part One

//Using what you did with Objects period 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Person(firstName, lastName, birthYear, age, hobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.age = age;
    this.hobbies = hobbies;
}

//Step 2
let person1 = new Person("Kira", "Novak", "1989", 31);
console.log(person1);



//Step 3

let person2 = new Person("Renee", "Goudreau", "1989", 31);
console.log(person2);

let person3 = new Person("Emma", "Soucy", "1993", 27);
console.log(person3);

let person4 = new Person("Colin", "Meloy", "1974", 46);
console.log(person4);


//Step 4
function Hobbies(faveActivity, playsSports) {
    this.faveActivity = faveActivity;
    this.playsSports = playsSports;
}
//Step 5
let hobbies1 = new Hobbies("Mushroom Hunting", true);
let hobbies2 = new Hobbies("Crocheting", false);
let hobbies3 = new Hobbies("Video games", false)
let hobbies4 = new Hobbies("Playing guitar", true)

console.log(hobbies1, hobbies2, hobbies3, hobbies4)

//Step 6
let profile1 = new Person("Kira", "Novak", "1989", 31, hobbies1)
console.log(profile1)

let profile2 = new Person("Renee", "Goudreau", "1989", 31, hobbies2)
console.log(profile2)

let profile3 = new Person("Emma", "Soucy", "1993", 27, hobbies3)
console.log(profile3)

let profile4 = new Person("Colin", "Meloy", "1974", 46, hobbies4)
console.log(profile4)

console.log(profile4.hobbies.faveActivity);

// Step 7
profile1.eatsMeat = false;
console.log(profile1)

//.Create

//Step 1
let Region = {
    location: "USA",
    displayRegion: function() {
        console.log(this.location)
    }
};

//Step 2
let USA = Object.create(Region);
USA.displayRegion()

//Step 3
let Canada = Object.create(Region);
Canada.location = "Canada";
Canada.displayRegion();

//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.
let hobby = {
    name: "wake boarding",
    description: "a water sport where you surf on water with a board, pulled by a boat",
    suppliesNeeded: true
}
//Use dot notation to return hobby description
console.log(hobby.description);

//Use bracket notation to return name
console.log(hobby["name"]);


//Arrays: Create an array with 4 different hobbies
let hobbies = ["wake boarding", "skateboarding", "ultimate frisbee", "overwatch"];

//access second item in the array
console.log(hobbies[1]);

//Objects
//Change the value of the boolean of the object we created.
hobby.suppliesNeeded = false;
console.log(hobby);

//Add a new property to our hobbies object such as supplies with multiple values in the property.
hobby.supplies = ["board", "boat", "wetsuit", "goggles"];
console.log(hobby);

//remove the hobby description property from the person object
delete hobby.supplies;
console.log(hobby)


//Arrays
//Use push to add another hobby to your array of hobbies
hobbies.push("gardening");
console.log(hobbies)


//use pop to remove the last item from an hobby array
hobbies.pop();
console.log(hobbies)


//use unshift to add more values to the beginning of the hobby array.
hobbies.unshift("gardening");
console.log(hobbies)

// us shift to remove the item from the hobby of the array
hobbies.shift();
console.log(hobbies)

//Object
//Write a for in loop for the person object you created
for (let key in profile1) {
    console.log(key);
    console.log(profile1[key])
}

//Write a for each loop for your person Object
Object.keys(profile1).forEach(function(key) {
    console.log(key);
    console.log(profile1[key]);
})

//Arrays
//Write a for loop for your hobby array
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i])
}

//Write a for of loop for your hobby array
for (let item of hobbies) {
    console.log(item);
}

//write a for each loop for your hobby array
hobbies.forEach(element => console.log(element));




