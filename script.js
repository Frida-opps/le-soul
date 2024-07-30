/*console.log("La Musique " + name);
console.log("Comment vas-tu " +  name + "?");

alert( "Salut " + name + " ! ")*/

let prenom = prompt("Bonjour, quel est votre prénom?");
let nom = prompt("Quel est ton nom de famille ?");
let myTitle = document.getElementById("welcomeTitle")

myTitle.innerText = "Bienvenue " + prenom + nom;
 let isOk= prompt("ça va ou pas? répondre par oui ou par Oui ou par OUI ou par non ou par Non ou par NON ou par oui ça va ou par non pas trop ");

 if ((isOk == "oui") || (isOk == "Oui") || (isOk == "OUI") || (isOk == "oui ça va"))
 {
      //faire autre chose
      console.log("l'utilisateur va bien")       
 }
 else if ((isOk == "non") || (isOk == "Non") || (isOk == "NON") || (isOk == "non pas trop"))
 {
 	console.log("l'utilisateur va mal")  
 }
 else
 {
 	console.log("l'utilisateur ne respecte pas la question")  
 }