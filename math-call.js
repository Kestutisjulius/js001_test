 
    const sudeti = (a,b) => a + b;
    const atimti = (a,b) => a - b;
    const dalinti = (a,b) => a / b;
    const dauginti = (a,b) => a * b;


const n1 = 7;
const n2 = 5;

// turi gauti skaicius ir norima panaudoti funkcija
function skaiciuok(action) {
    if (action === sudeti) {
        return sudeti(n1, n2);
    }
    if (action === atimti) {
        return atimti(n1, n2);
    }
    if (action === dalinti) {
        return dalinti(n1, n2);
    }
    if (action === dauginti) {
        return dauginti(n1, n2);
    } else {
        return 'ERROR';
    }
    
}

// cons r1 = 12
const r1 = skaiciuok(sudeti);
const r2 = skaiciuok(atimti);
const r3 = skaiciuok(dalinti);
const r4 = skaiciuok(dauginti);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

