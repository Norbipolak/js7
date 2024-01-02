const palindrom = "a cápa ette apáca a cápa ette apáca";

/*
    A string egy tömb karakterekkel és eppen ezért van egy olyan tulajdonsága, hogy length
    length -> karakterek száma
*/

console.log(`A karakterek száma: ${palindrom.length}`); //A karakterek száma: 17

/*
Éppen azért, mert ez egy tömb karakterekkel minden egyes karakter rendelkezik egy index-vel
ugyanugy mint tömbnél a tömbelemek
*/

console.log(palindrom[0]); //a
console.log(palindrom[4]); //p

/*
Végig tudunk menni a karaktereken egy for ciklus segítségével
*/

for(let i = 0; i < palindrom.length; i++){
    console.log(`${i+1}. karakter: ${palindrom[i]}`);
}

/*
1. karakter: a
2. karakter:  
3. karakter: c
4. karakter: á
5. karakter: p
6. karakter: a
stb.
*/

/*
Ha visszafele akarunk menni a for ciklussal 
A length-1-nél kezdünk addig ameddig nem lesz kisebb vagy egyenlő mint nulla és folyamatosan kivonunk belőle egyett
*/

for (let i = palindrom.length - 1; i >= 0; i--) {
    console.log(`${palindrom.length - i}. karakter: ${palindrom[i]}`);
}

/*
Hogyan tudunk megtalálni egy karaktert vagy egy karakterláncot egy másik karakterláncban
Egy karakter/karakterlánc kezdő indexének a helye a karakterláncban

Szeretnénk kitalálni, hogy az ette szó hányadik indextől indul
*/

const index = palindrom.indexOf("ette");
console.log("index: " + index); // index: 7

/*
Az indexOf amennyiben meg van ez a bizonyos karakterlánc a másik karakterláncban 
abban az esetben megmondja nekünk a kezdeti indexét (hányadik indexen helyezkedik el az e)

Viszont, ha nincs meg akkor -1-et add vissza, ennek az az oka, hogy pl amennyiben az a karaktert keressük 
az első előfordulást fogja nekünk megtalálni és az nulla lesz, tehát a legkisebb szám itt nulla lehet, 
éppen ezért ha nincs benne akkor -1-ként fogjuk jelölni
*/

const nincsBenne = palindrom.indexOf("itta");
console.log("nincsBenne: " + nincsBenne); //nincsBenne: -1

/*
lemásoltuk még egyszer
const palindrom = "a cápa ette apáca"; -> const palindrom = "a cápa ette apáca a cápa ette apáca";
*/

/*
A lastIndexOf mindig az utolsó előfordulást keresi
Itt is ha olyat írunk be, ami nincsen benne a stringben akkor is -1-et kapunk, mint az indexOf
*/

const lastIndex = palindrom.lastIndexOf("ette");
console.log("lastIndex: " + lastIndex); // lastIndex: 25

/*
Hogyan lehet részletet kivágni a stringből 
*/

const datum = "2018.10.10 10:11:12";
//szeretnénk kiszedni az évet innen
const ev = parseInt(datum.slice(0, 4)); // a 4-dik karakter már nincsen benne, nulladik indextől a negyedik indexig, csak az már nincsen benne
console.log(ev); //2018

/*
A slice várhat egy vagy két paramétert
ha egy paramétert adunk meg akkor attol a karaktertől végig megy -> const ev = datum.slice(0) nulladik karaktertől a végéig

de ha azt szeretnénk, hogy a nulladik karaktertől valahányadik karakterig, akkor két paramétert fogunk megadni -> 
const ev = datum.slice(0, 4);
*/

//hónap visszakapása
const honap = parseInt(datum.slice(5, 7));
console.log(honap); //10

/*
!!!! De ez mindig stringet fog visszaadni, hiszen stringből dolgozik, hogyha fontos nekünk, hogy ez integer legyen -> parseInt 
*/

//hogyan tudunk negatív indexeket megadni -> szeretnénk a percet kiválasztani 
const perc = datum.slice(-5, -3); // hátulról számolva kezdjük és minuszt kell eléírni
console.log(perc); //11

/*
Ugyanerre a JavaScriptben van még két megközelítés, hogy részletet vágjunk ki egy stringből

1. substr
*/
//ötödik indexű karaktertől, 5 darab karaktert 
const evHonap = datum.substr(5, 5); // 10.10
console.log(evHonap);

/*
!!!!!!!!!!!! Az első paraméter ugynazt jelenti, mint a slice-nál, hogy hanyadik karaktertől, viszont a második 
karakter, hogy hány db karaktert 
*/

console.log(datum.slice(5)); // ötödik karaktertől visszakapjuk az összes többit, a végéig és egyanez van a substr-nél is 
//hogy csak 1 darab karaktert adunk meg, minusz itt nincsen, az csak a slice esetében müködik

/*
2. subString ugyanaz, mint a slice, csak nem fogadhat negatív indexek
*/

console.log(datum.substring(0, 4));//2018 , ugyanugy megkapjuk erre az évet, mint a slice-nál
//start-ot és az end-et kell megadni

/*****************************************************************************************************************************/

const evNum = 2019;
const honapNum = 5;
const napNum = 6;

//megpróbáljuk dátumstringbe összefüzni

const datumStr = evNum + "." + honapNum + "." + napNum;
console.log(datumStr); //2019.5.6 -> ugy kéne megjelennie, hogy 05.06 

/*
Erre kell a padStart, de ezt csak string-vel lehet megcsinálni, ezért kell elé a toString()
első paraméter, hogy mennyi legyen a maximális karakterszám -> itt a példában 2 (05) szeretnénk majd az 5-ből
második paraméter, ameddig nem éri el a 2-t (a maximális karakterszámot) addig pl. itt a nullás karakteret hozzáadja -> "0"
ezt mindig aposztrofba kell beletenni
*/
const datumStr2 = evNum + "." + honapNum.toString().padStart(2, "0") + "." + napNum.toString().padStart(2, "0"); //2019.05.06
console.log(datumStr2);

//behelyetesítjük alt gr7-vel
const datumStr3 = `${evNum}.${honapNum.toString().padStart(2, "0")}.${napNum.toString().padStart(2, "0")}}`

//létezik padEnd() is 

const strNum = "2019.".padEnd(8, "0")//8 karakteres legyen és nullákat rakunk a végére
console.log(strNum); //2019.000

const strNum2 = "2019.".padEnd(20, "iii|");//2019.iii|iii|iii|iii -> annyiszor fogja ezt a karakterlácot megismételni 
//ahányszor szökséges, hogy 20 karakteres legyen 
console.log(strNum2);

/********************************************************************************************************************/

const nevek = ["Aladár", "Bettina", "Cecil", "Daniella", "Franciska", "Elemér"];
//ezt a tömböt szeretnénk stringre alakítani 
/*
A numbernek, arraynak is van toString() metódusa, ugyanígy a tömbnek is 
*/
const nevekStr = nevek.toString();
console.log(nevekStr); //Aladár,Bettina,Cecil,Daniella,Franciska,Elemér
//kaptunk egy olyan stringet, ami vesszővel elválasztva tartalmazza a tömbnek az elemeit 

/*
viszont ha ebből custom stringet szeretnénk csinálni -> megmondani, hogy milyen legyen az elválasztó karakter 
*/

const nevekStr2 = nevek.join(", ")//ide pl. beírtunk egy vesszőt és egy szóközt
console.log(nevekStr2); //Aladár, Bettina, Cecil, Daniella, Franciska, Elemér -> és már van szóközünk is 

/*
!!!!!!!!A toString() és a join() ellentéte a split() 
ami stringekből csinál tömböt 
*/

const nevekTomb = nevekStr.split(",");
console.log(nevekTomb); //[ 'Aladár', 'Bettina', 'Cecil', 'Daniella', 'Franciska', 'Elemér' ]
/*
nevekStr-ben készítettünk egy vesszővel elválasztott stringet toString() segítségével, amiben ea tömbelemek vesszővel elválasztva 
találhatóak meg és a split()-vel visszaalakítom tömbeelemekké -> 
visszakaptuk ugyanazt a tömböt, amit korábban elkészítettünk
*/

const nevekTomb2 = nevekStr2.split(", ");
console.log(nevekTomb2);
/*
nevekStr2-öt csinéljuk vissza tömbbé és akkor nem csak egy vessző, hanem egy space és vessző mentén rakja bele tömbelemekbe
s stringeket 
*/

