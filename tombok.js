/*
Létrehozunk egy tömböt
A szamok2 mint változónak megadtuk a szamokat, mint értéket, már a számok2 is egy tömb, ami tartalmazza azokat a pozítiv egész számokat 
1-10-ig
utána a számok2-ben átírtuk a 3 indexű tagot 111-re
majd kiírjuk a szamokat és annak ellenére, hogy nem szamok2-t írtk ki, ahol megváltoztattuk a 3-dik indexű elemet,
ahol a módosítás történt, hanem a szamokat, mégis megváltozott a szamok is 

ha ezt nem egy tömbbel csináljuk meg hanem csak egy stringvel, akkor az eredeti nem fog megváltozni 

*/
const szamok = [1,2,3,4,5,6,7,8,9,10];
const szamok2 = szamok;
szamok2[3] = 111;

console.log(szamok);
/*
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*/

let szam = 5;
let szam2 = szam;
szam2 = 11;
console.log(szam); //5 -> marad az eredeti, nem ugy, mint a tömböknél

/*
Ennek az oka -> 
alaplapon vannak a komponensek, ilyen fő komponens a processzor 
a processor végzi a számításokat, ilyen komponens pl. a memória azaz a RAM (random access memory)
ez a memória ideglenesen tárol, olyan adatokat, amelyeket kiolvastunk a háttértárolóból, ami vagy egy winchester vagy 
SSD és feldolgozásra kerülnek 
pl. amikor a vs-code beolvas egy fájlt, akkor az történik, hogy a fájlnak a tartalma az biztosan bekerül ideglenesen
a memoriába vagy amikor a chrome-on megnyitunk egy új tab-ot, annak a tartalma is bekerül a memóriába, mert a processzornak
fel kell dolgoznia, hogy melyik pixelen melyik szín legyen 

Van a memória, ami ideglenesen tárol adatokat, amit a processzornak fel kell dolgoznia 
ez a memória, memóriacellákból áll és mindegyik cella egy bájtos 
Elkészítünk egy tömböt az bekerül a memóriába, aminek a kezdeti címe lesz valami, minden egyes memóricellának van egy memóriacíme 
ami egy bineáris érték 

Mondjuk az első cellának a bineáris értéke legyen a 000, következő cellának a 001 és így tovább 
!!!És amikor elhelyezünk egy tömböt, akkor a 000-tól fog kezdödni(egy memóriacellába nem fog beleférni egy tömb, még csak a kezdetét jelöljük meg)
viszont amikor azt mondjuk, hogy ennek a tömbnek az értékét lemáasoljuk, akkor nem az fog történni, hogy berakja egy másik 
memóriacellába (memóriacellától valameddig) a tömbnek a tartalmát, hanem készit egy másik névvel ugyanarra a memóriaterületre mutató tömböt
->
tehát, ha lemásoljuk a tömböt, akkor gyakorlatilag csak létrehozunk neki egy másik nevet, amin ugyanazt a memóriaterületet tudjuk elérni 
és éppen azért ez a két tömb megegyezik egymással, csak más néven tudjuk elérni -> referenciaváltozó 
És ha a referenciaváltozó értékét megváltoztatjuk és egy másik változó mutatott ugyanarra a területre, akkor a memóriaterületen lévő
értéket fogjuk módosítani, ami azt jelenti, hogy az összes másolatra ez hatással lesz 

!!!! Ha bármilyen módisítást vegzünk a tömbön egy tömbmetódussal pl. berakok a végére valamit, akkor azzal ténylegesen a tömböt 
módosítom, viszont ha a stringen végzek bármiféle változást, akkor az eredeti nem fog változni 
pl.datum -> datum.slice()
A datum.slice()-nak van egy visszatérési értéke, ami az eredeti stringnek a megfelelőképpen módosított változata, de az eredeti nem 
módosult 
******************************************************************************************************************************/

//számok tömb végére berakunk egy elemet ->
// szamok.push(11);
// console.log(szamok); 
/*
[
   1, 2, 3, 111,  5,
   6, 7, 8,   9, 10,
  11
]
ha ez nem lenne hatással az eredeti tömbre, hanem csak visszadna egy tömböt, ami ugyanaz plusz a 11-es 
akkor ezt kéne csinálni -> egy új változóban létrehozni, mint a stringeknél, ez viszont kényelmetlen 
ez lenne 
const szamok 3 = szamok.push(11); !!!!!!!!!!!ezért kell a stringeknél mindig módosításnál új változót létrehozni 
*/

//viszont van egy visszatérési értéke a tömbnek is az új length 

const ujLength = szamok.push(99);
console.log(`A tömb már ${ujLength} elemű.`); //A tömb már 11 elemű.
//eredeti tömb lengthje 10 volt, miután hozzáadtuk a 99-es számot utána a visszatérési értéke a length-nek 11 lesz 


//ha szeretnénk kivenni egy elemet a tömbböl -> pop !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const utolsoElem = szamok.pop(); //kikerült a 99, amit hozzáadtunk a push-val 
console.log("A tömb utolsó eleme: " + utolsoElem); 
/*
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*/

/*
Ha nem a végére, hanem a tömb elejére szeretnénk berakni egy elemet
vár egy paramétert, ugyanugy, mint a push, hogy melyik elemet szeretnénk belerakni 
*/

const ujLength2 = szamok.unshift(0);
console.log(`A tömb már ${ujLength} elemű.`);
console.log(szamok);
/*
[
   0, 1, 2, 3, 111,
   5, 6, 7, 8,   9,
  10
]
*/

//Shift-vel tudunk kiszedni egy elemet az elejéről, nem vár paramétert, ugynaugy, mint a pop
const elsoElem = szamok.shift();
console.log(`Az első eleme: ${elsoElem}`);
console.log(szamok);
/*
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
*******************************************************************************************************************************************/

/*
Ami még fontos azaz includes, mert azzal tudjuk megmondani, hogy egy bizonyos érték megtalálható-e a tömbben
*/
const megtalalhatoE = szamok.includes(8);
console.log(megtalalhatoE); // true, értéke mindig boolean lesz 

const megtalalhatoE2 = szamok.includes(99);
console.log(megtalalhatoE2); //false

// ha stringként írjuk be, akkor mindig false lesz ->

const megtalalhatoE3 = szamok.includes("8");
console.log(megtalalhatoE3); //false, az includesnál nem ugyanaz a string "8" és a number 8 !!!!!!

/*******************************************************************************************************************************************/

/*
A tömbökön eddig for ciklussal mentünk végig, de a tömbökön végig tudunk menni, hanem for of is 
*/

for(const szam of szamok) {
    console.log(szam);
}
/*
szam vátozóban meg fog jelenni az összes szám sorban ->
1
2
3
111
5
6
7
8
9
*/

/*
for each nem csak a tömbökkel van kapcsolatban, ami egyben egy ciklus is és egy callback functiont vár 

callback function egy olyan function, ami egy függvény paramétereként szerepel 
*/

function osszeadas(konzolKiir, a, b) {
    const result = a + b;
    konzolKiir(result);
}

function konzolKiir(ertek) {
    console.log(`A megadott érték: ${ertek}`);
}

osszeadas(konzolKiir, 5, 11); //A megadott érték: 16

/*
Úgy hívjuk meg a osszeadast, hogy a konzolKiirt átadjuk neki paraméterként 

Az osszeadas átvette paraméterként a konzolKiir nevű függvényünket és meghívta, ráadásul úgy, hogy megadta neki a megfelelő nevű paramétert (ertek) 
végrahajtódik az összeadás (a + b), majd a konzolKiir, azt a bizonyos átadott függvényt meghívjuk a konzolKiir megkapja a erteket 

callback function az, amikor a function függvény paraméterként szerepel 
sok helyen előfurdul a JavaScriptben pl.eseménykezelőkben de a for each is egy ilyen dolog
*/

szamok.forEach(konzolKiir);
/*
vár egy paramétert, ami egy callback function és ez pl. lehet a konzolKiir -> vár egy értéket és azt mondja, hogy megadott érték: 
és kiírja azt az értéket 

A megadott érték: 1
A megadott érték: 2
A megadott érték: 3
A megadott érték: 111
A megadott érték: 5
A megadott érték: 6
A megadott érték: 7
A megadott érték: 8
A megadott érték: 9
A megadott érték: 10

végigment és mindenegyes elemnél meghívja a konzolKiir függvényt 
*/

function konzolKiir2(ertek, index, tomb) { //ezeket is vissza tudjuk kapni a callback function-ökben 
    console.log(ertek);
    console.log(index);
    console.log(tomb);
    console.log("***********************************************************************");
}

szamok.forEach(konzolKiir2);
/*
1
0
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
***********************************************************************
2
1
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
***********************************************************************
3
2
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
***********************************************************************
111
3
[
  1, 2, 3, 111,  5,
  6, 7, 8,   9, 10
]
***********************************************************************
*/

/*
de nem muszály, így meghívni hanem adhatunk egy névtelen függvényt is 
ez a névtelen function kizárolag csak arra jó, hogy callback function-ként üzemeljen 
*/

szamok.forEach(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("***********************************************************************");
})
//teljesen azt kapjuk vissza, mint az elöbb, csak nem volt szükséges egy plusz függvényt létrehozni 

const myFunc = function(a, b) {
    return a * b;
};

/*
function létrehoz egy functiont-t és ebbe a válzotóba fogjuk bevezetni az értékét (myFunc)
*/

console.log(myFunc(5, 6)); //30

/*
callback function az egy értékként átadott függvény, ami akár lehet név nélküli is, mint pl.

szamok.forEach(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("***********************************************************************");
*/

/***************************************************************************************************************************************/
//self invoke, önmagát meghívó function

function() {

}
/*
Ezzel annyi a probléma, hogy szintaktikailag helytelen, ha nem egy változó értékének adjuk meg ezt a névtelen functiont
vagy nem callback function-ként, viszont, így meg tudja magát hívni ->
*/
(function() {
    console.log("Meg vagyok hívva!");//automatikusan meg fogja magát hívni 
})();

(function a() {
    console.log("Meg vagyok hívva!"); 
})();
//nem kell hívatkozni rá, hanem önmagát meghívja