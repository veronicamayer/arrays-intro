/* Lev 1_3 */
console.log("---------------Lev1_3---------------");

const numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

/* Lev 1_5 */
console.log("------------------Lev1_5------------------");

const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
console.log(songs);
const totalSongs = [...songs];
totalSongs.push("Mein Song", "Noch ein Song", "Letzter Song");
console.log(totalSongs);

const besteFussballerAllerZeiten = ["Lionel Messi", "Pelé", "Diego Armando Maradona"];
besteFussballerAllerZeiten.push("Oliver Kahn", "Iker Casillas");
console.log(besteFussballerAllerZeiten);

/* Lev 1_5_2 */
console.log("------------------Lev1_5_2------------------");
const heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]];
heroUndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"]);
console.log(heroUndEnemy);

/* Lev 1_7 */
console.log("------------------Lev1_7------------------");
const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("Schnitzel", "Brezel");
console.log(deutscheGerichte);

/* Lev 1_8 */
console.log("------------------Lev1_8------------------");
const nichtGut = [...deutscheGerichte]
nichtGut.shift();
nichtGut.shift();
nichtGut.shift();
console.log(nichtGut);

/* Lev 1_9 */
console.log("------------------Lev1_9------------------");
const neueVariable = [23, 54, 75];
console.log(neueVariable);
const neueVariable2 = [...neueVariable];
neueVariable2.push(12, 67, 89);
console.log(neueVariable2);
const neueVariable3 = [...neueVariable2];
neueVariable3.unshift(1, 2, 3);
console.log(neueVariable3);
const neueVariable4 = [...neueVariable3];
neueVariable4.pop();
neueVariable4.pop();
console.log(neueVariable4);
const neueVariable5 = [...neueVariable4];
neueVariable5.shift();
neueVariable5.shift();
console.log(neueVariable5);

/* Lev 2_3 
---------------------BONUS------------------------*/
const arr = []; 
const list = document.querySelector("ol");

document.getElementById("addButton").addEventListener("click", (event) => {
    event.preventDefault();

    const input = document.getElementById("inputField");
    arr.push(input.value);
    input.value = "";
    renderList();
});

document.getElementById("removeLastButton").addEventListener("click", (event) => {;
    event.preventDefault();

    arr.pop();
    renderList();
});  

document.getElementById("removeButton").addEventListener("click", (event) => {
    event.preventDefault();

    const input = document.getElementById("inputField");
    const index = arr.indexOf(input.value);
    if (index !== -1) {
        arr.splice(index, 1);
        input.value = "";
        renderList();
    }
});

const renderList = () => {
    list.innerHTML = "";
    arr.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = item;
        list.appendChild(listItem);
    });
};