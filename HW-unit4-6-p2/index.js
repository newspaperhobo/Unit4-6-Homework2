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

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array




