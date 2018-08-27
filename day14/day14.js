let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);


let name = "Joyce";
let name2 = name;
console.log(name, name2);

name = "Lam";
console.log(name, name2);


const players = ["Joyce", "Joyz", "Albert", "Bear", "Dino", "Sharky"];
const team = players;
console.log(players, team);

// team[3] = "Ra";
console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
// team2[3] = "Ra";
// team3[3] = "Ra";
console.log(players, team2);
console.log(players, team3)

const team4 = [...players];
team4[3] = "Ra";
console.log(players, team4)

const team5 = Array.from(players);
team5[3] = "Ra";
console.log(players, team5)

//===============================================

const person = {
	name: "Joyce",
	age: 30
};

// const me = person;
// me.age = 25;

const me = Object.assign({}, person, {age: 25});
console.log(person, me)

const me2 = {...person};
console.log(me2);


const joy = {
	name: "Joyce",
	age: 30, 
	social: {
		linkedin: "joycesnlam",
		github: "joyce-lam"
	}
};

console.log(joy);
const copyJoy = Object.assign({}, joy);
copyJoy.name = "Joyz";

//fake deep clone
const copy2 = JSON.parse(JSON.stringify(joy));



