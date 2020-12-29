let phrase = "Bonjour tout le monde"  ;
// afficher la longueur 
console.log(`${phrase.length}`);
// enlever l'espace
phrase = phrase.trim();
// phrase = phrase.replace(/ +\s/, "")

// reafficher la longueur 
console.log(`${phrase.length}`);
// afficher la dernière lettre
console.log(phrase.charAt(phrase.length -1));

// console.log(phrase.slice(-1));

// console.log(phrase.substr(20));

// console.log(phrase.substring(2));

// enlever le bonjour
phrase = phrase.replace('Bonjour ', "")

console.log(phrase)
// remmetre bonjour
let bonjour = "bonjour";
phrase = bonjour.concat(" ", phrase);
console.log(phrase);


// supprimer toute la phrase sauf le " bonjour"
phrase = phrase.substring(0,8);
console.log(phrase);

// remplacer
let phrase2 = "ceci est une variable de type number !";
console.log(phrase2);
phrase2 = phrase.replace("number", "string")
let phrase3 = "ceci est une variable de typer NuMbEr ! les numbers c'est trop bien Number numBer numbeR"
console.log(phrase3);
phrase3 = phrase3.replace(/number/ig, "number");
console.log(phrase3);