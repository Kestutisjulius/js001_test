const text = {
    first: (s) => s[0],
    middle: (s) => s[Math.floor((s.length - 1) / 2)], //suapvalinti i mazesne puse
    last: (s) => s[s.length - 1],

};
const textAction = 'last'; // first | middle | last
const word = 'Labas';
const letter = text[textAction](word);
console.log(`${textAction} letter of word "${word}" is ${letter}`);
