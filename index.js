const people = [{
	name: "James",
	lastName: "Jack",
	address: "H. Street 55",
	color: "Red",
	short: true
}, {
	name: "Pojo",
	lastName: "Uncle",
	address: "Opus. AV. d5",
	color: "Black",
	short: false
},
{
	name: "Al",
	lastName: "B",
	address: "T. Street 2",
	color: "Red",
	short: true
	},
{
	name: "Mary",
	lastName: "M",
	address: "M. Street 2m",
	color: "Green",
	short: false
	},
{
	name: "Lou",
	lastName: "L",
	address: "L. Street 1L",
	color: "Yellow",
	short: false
	},
{
	name: "Jack",
	lastName: "Black",
	address: "B. Street Jb",
	color: "Yellow",
	short: false
	},
{
	name: "Jones",
	lastName: "Jonson",
	address: "J. Avenue 1F",
	color: "Green",
	short: false
	},
{
	name: "Fi",
	lastName: "Fo",
	address: "Fu. AV. 3",
	color: "Black",
	short: true
}
	];
 const names = [];

 
 //trufy, falsy -> ''-> false, undefined == false , 0 == false
 /* atsirenkam kokiu spalvu ir kokiais kiekiais yra masyve */
const colorsCount = {};
for (const person of people) {
	const {color} = person; //destructuring ...
	colorsCount[color] = colorsCount[color] ?  colorsCount[color] + 1 : 1;
}
const colorNames = Object.keys(colorsCount);


/* randame dazniausiai paminetos spalvos kieki (spalvos pavadinimas nera aktualus) */
let mostPopularColorCount = 0;
for ( const color in colorsCount ) {
	const count = colorsCount[color];
	if ( count > mostPopularColorCount) {
		mostPopularColorCount = count;
	}
}

/* randame visus spalvu pavadinimus, kurie atitinka didziausia paminejimu kieki */
let mostPopularColorNames = [];
for (const color in colorsCount) {
	const count = colorsCount[color];
	if ( count === mostPopularColorCount) {
		mostPopularColorNames.push(color);
	}
}

console.log(mostPopularColorNames);
