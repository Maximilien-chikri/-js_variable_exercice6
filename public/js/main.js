// afficher uniquement la première lettre du prénom
let prénom = prompt("prénom" )
alert(prénom.charAt(0));

// Affiche la dernière lettre du prénom de la personne

alert(prénom.charAt(prénom.length -1));

// Affiche le prénom sans sa première lettre

// alert(prénom.substring(1));


// Affiche le prénom de la personne mais avec la 2eme lettre en majuscule uniquement (rentre un prénom en minuscule dans le prompt)

// prénom = prénom.toLocaleLowerCase;
// alert(prénom.charAt(0) + prénom.charAt(1).toLocaleUpperCase() + prénom.slice(2));

// let upper = prénom.charAt(1)
// alert(prénom.replace(upper.toUpperCase());)



// Demande a l'utilisateur d'entrer son prénom puis demande lui quelle lettre il veut mettre en majuscule, affiche lui son prénom avec la lettre désirée en majuscule

// let lettre = prompt(`quel lettre voulez vous mettre en majuscule dans `${prénom}``);

// alert(prénom.replace(lettre, lettre.toLocaleLowerCase));

// Quel que soit la façon dont a été entré le prénom, le nom se réaffiche avec la première lettre est en majuscule et le reste en minuscule

// let firstUpper = prénom.charAt(0);
// alert(prénom.replace(firstUpper, firstUpper.toUpperCase));
// alert(prénom.charAt(0).toUpperCase() + prénom.substring(1)); 


// Affiche le prénom de la personne mais avec une lettre aléatoire retirée (bonus)

let nbA1 = Math.round(Math.random()*prénom.length);
console.log(nbA1)
alert(prénom.replace(prénom.charAt(nbA1), ""));