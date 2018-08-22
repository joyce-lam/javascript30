
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function changeColor() {
  const p = document.querySelector('p');
  p.style.color = '#76FFFA';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hi");

// Interpolated
console.log("Hi I am %s", "Joyce");

// Styled
console.log("%c Large text", "font-size: 30px; background: yellow");

// warning!
console.warn("OHHHH");

// Error :|
console.error("Error");

// Info
console.info("Info: ABC");

// Testing
console.assert(1 === 1, "Correct!");
// console.assert(1 === 2, "Wrong");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
// console.dir(p); //can look at the properties of the particular element

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  //console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`);
  console.groupEnd(`${dog.name}`);
})


// counting
console.count("XYZ") //count the string/element
console.count("XYZ")
console.count("XYZ")
console.count("XYZ")
console.count("XYZ")
console.count("XYZ")


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });


//displaying table array of object
console.table(dogs);
