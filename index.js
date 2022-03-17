const people = [{
	name: "James",
	lastName: "Jack",
	address: "H. Street 55",
	color: "red",
	short: true
}, {
	name: "Pojo",
	lastName: "Uncle",
	address: "Opus. AV. d5",
	color: "black",
	short: false
}

	];
 const names = [];
 const colors = [];
for (const person of people) {
	const {color} = person;
	const {name} = person;
	names.push(name);
	colors.push(color);
}
console.log(colors);
console.log(names);
