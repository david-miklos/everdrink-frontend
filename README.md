
# Bevezetés

 A tervezett webalkalmazás egy nagykereskedelmi webáruház rendszer
 megvalósítását célozza meg, amelyen keresztül a felhasználók
 rendeléseket adhatnak le.

 A felhasználók két csoportra bonthatók, magánszemély, illetve
 kiskereskedő. Amennyiben a felhasználó magánszemély átirányítjuk egy
 másik oldalra. Ha a felhasználó viszonteladó akkor regisztráció és
 azonosítást követően kap engedélyt a nagykereskedelem termékeinek
 rendelésére illetve az árlisták / katalógusok megtekintésére.

 A sikeres regisztráció feltétele, a meglévő adatokon kívül, az
 érvényes működési engedély, amelyet a felhasználó a regisztráció
 menüpontban tudna feltölteni. A nagykereskedő minden regisztrációról
 értesítést kap, a végfelhasználó pedig visszaigazolást.

 A végfelhasználók csak a megerősített regisztráció után tudnak majd
 rendelést leadni. A leadott rendelés megjelenik a nagykereskedő
 felületén, továbbá E-mail formájában a rendelés összesítőjét elküldi a
 felek részére.

 A rendeléshez tartozó további funkcionalitások az alábbiak. A rendelés
 történhet árlista alapján, a termék mellett elhelyezett rublikába
 kiválasztott mennyiség formájában. Továbbá a rendelés funkcióhoz
 tartozna az, hogy a nem egyutas termékek mellé automatikusan
 rendelődjenek meg a göngyölegek is, a darabszámok és az árak
 megjelenítésével. Emellett a felhasználó a rendelésen be tudja
 jelölni, hogy személyes átvételt szeretne az adott telephelyen, címmel
 kiegészítve, vagy kiszállítást, melynek időpontját szintén a
 visszaigazolásban tudja majd megadni.

 Az alkalmazás implementálása külön komponensekre lesz bontva a szerver
 oldali backend illetve a kliens oldali frontend részre. A backendet
 egy általam választott innovatív platformra fogom építeni, frontend
 oldalról pedig az alkalmazás Angular 11(+) keretrendszert fog
 használni, amit TypeScript-ben fejlesztek. Továbbá a fejlesztés részét
 fogja képezni a komplett production-kész continuous integration (CI)
 és continuous delivery (CD) megvalósítás is.

# Felhasználói dokumentáció

### A feladat rövid ismertetése

 A feladat egy nagykereskedelmi webáruház fejlesztése, amely mint a
 viszonteladók mint a nagykereskedő számára biztosít egy platformot az
 árucsere menetének lebonyolítására.

 A viszonteladó számára lehetővé teszi nagykereskedelem termékeinek
 megtekintését, továbbá azoknaknak a megrendelését. Emellett a
 nagykereskedő nyilvántarthatja partnereit, illetve a beérkezett
 rendeléseket.

### A szoftver célja és célközönsége

 Az elkészült szoftver a fent említett munkament minél könnyedebb
 lebonyolítását célozza meg.

 Az alkalmazás első sorban a nagykereskedelem és a vele jogviszonyban
 álló kiskereskedők számára készült.

## Szerepkörök

 Az alkalmazáson belül három jogosultsági csoportot különböztetünk meg,
 a VENDÉG, a PARTNER , illetve az ADMIN. Ezek a jogosultsági csoportok
 két fő kategóriába sorolhatók, a végfelhasználó illetve a rendszer
 adminisztrátor, amelyek nagyban eltérnek egymástól. Ez az eltérés nem
 csak a funkciók elérésében nyilvánul meg, hanem az alkalmazás
 használatának a menete is teljesen különböző, így a továbbiakban ezt a
 két szerepkört külön fogom ábrázolni, illetve bemutatni.

## Végfelhasználói dokumentáció

### Felhasználói jogok

 A végfelhasználó szerepkörhöz tartozó jogosultsági csoportok a VENDÉG,
 illetve a PARTNER. Ezek a csoportok különböző elérhető funkciókat,
 illetve jogokat birtokolnak. Ezek a jogok a következők:

 **A VENDÉG:**

 Hozzáférhetőségek:

-   A főoldal tartalmához fér hozzá

-   Megtekintheti a katalógusban szereplő termékeket

-   Regisztrálhat

-   Szállítási címet adhat meg

-   Működési engedélyt tölthet fel

-   Bejelentkezhet

-   Bejelentkezés után új címet adhat meg Funkciók:

-   *Regisztráció*

-   *Szállítási cím megadása*

-   *Működési engedély feltöltése*

-   *Bejelentkezés*

-   *Új cím hozzáadása*

 **A PARTNER:**

 Hozzáférhetőségek:

-   Rendelkezik mindazokkal a hozzáférhetőségekkel mint a VENDÉG,
     kiegészülve a továbbiakkal

-   Terméket adhat a kosárhoz

-   Megtekintheti a kosár tartalmát

-   Eltávolíthat terméket a kosárból

-   Rendelést adhat let Funkciók:

-   Rendelkezik mindazokkal a funkciókkal mint a VENDÉG, kiegészülve a
     továbbiakkal

-   *Kosárba helyezés*

-   *Eltávolítás a kosárból*

-   *Rendelés véglegesítés*

## Funkciók

 A továbbiakban a végfelhasználó szerepköréhez tartozó funkciók rövid
 bemutatására kerül sor.

#### Regisztráció

 A regisztráció funkció egy új ﬁók létrehozását teszi lehetővé.
 Amennyiben a felhasználó még nem rendelkezik ﬁókkal kötelező
 regisztrálnia, amely során e-mail cím és jelszó megadása szükséges.

#### Szállítási cím megadása

 A szállítási cím megadására a regisztráció után kerül sor, amely során
 a felhasználó a szükséges szállítási adatokat adhatja meg. Ide
 tartozik az ország, a megye, a város, az irányítószám, az utca az
 utcaszám, illetve a felhasználó telefonszáma.

#### Működési engedély feltöltése

 A szállítási cím megadása után a felhasználónak meg kell adnia az
 érvényes működési engedélyét, amelyet .png formátumba tölthet fel.

#### Bejelentkezés

 Ahhoz, hogy a felhasználó bejeletkezhessen, értelemszerűen már
 rendelkeznie kell egy létező ﬁókkal. Ha ez a feltétel teljesül, akkor
 a regisztrált e-maillel, illetve a választott jelszóval
 bejelentkezhet.

#### Új cím hozzáadása

 A bejelentkezés és a már meglévő szállítási cím megadása után, új cím
 megadása is lehetséges.

#### Kosárba helyezés

 A kosárba helyezés lehetővé teszi, hogy a felhasználó, új terméket
 adjon kosarához, kiválasztva a kívánt darabszámot a termék mellett
 elhelyezett rubrikában.

#### Eltávolítás a kosárból

 Lehetővé teszi, hogy a nem kívánt termékeket a felhasználó
 eltávolítása a kosarából.

#### Rendelés véglegesítés

 A felhasználó kosarában lévő termékeket megrendelheti, amely által a
 kosár tartalma megürül és a rendelés továbbítódik a
 rendszeradminisztrátor felületére.

## A szoftver használata

 A szerepkörök és a funkciók ismertetésével bemutatásra kerül a
 szoftver használatának menete végfelhasználói oldalról.

### A használat menete

![image2](https://user-images.githubusercontent.com/48122593/182591553-6fb18c56-0c31-493d-944e-8e116aaea2cb.png)
 
 Az alkalmazás első körben a főoldalra
 irányítja a felhasználót, ahol a fejléc és a fő tartalom található. A
 fejlécben elhelyezett egységek által lehetőség nyílik, a *felhasználó
 proﬁl* funkcióinak az elérésére a *termékek megtekintésére*, illetve
 betekintést nyerhetünk a *kosár* tartalmába.

#### Felhasználó proﬁl

 A felhasználó proﬁl tartalmaz minden szükséges funkciót, ami a
 felhasználó kezelést illeti. Értem ez alatt a *regisztrációt*, amely
 egy új felhasználó felvételét biztosítja. A *bejelentkezést*, amely a
 már regisztrált felhasználók számára érhető el. A felhasználó proﬁl
 továbbá kiegészül még két extra funkcióval, amelyek csak a
 bejelentkezés után válnak elérhetővé. Az egyik értelemszerűen a
 *kijelentkezés*, a másik pedig az *új cím hozzáadása*.

![image3](https://user-images.githubusercontent.com/48122593/182591555-2b3102e0-0125-47a1-8a35-1184a846dfe5.png)

![image4](https://user-images.githubusercontent.com/48122593/182591559-f050dc12-3846-4384-a56f-0c655dcc69db.png)

###### Regisztráció

![image5](https://user-images.githubusercontent.com/48122593/182591562-9baefcf8-22f9-47fb-a438-13676aaa2091.jpeg)

 A felhasználó számára egy új ﬁók létrehozását teszi lehetővé, mely során
 e-mail cím és jelszó megadása szükséges. A jelszó megadása során a
 felhasználó különböző kritériumoknak kell eleget tennie a jelszó
 erősségét illetően, ezzel is biztosítva adatainak fokozott védelmét,
 illetve a szovfter robosztusságát. Továbbá a választott jelszavát meg
 kell majd ismételnie. Az e-mail cím illetve a két jelszó mező
 validitásának ellenőrzése kliens oldalról történik, ami által a
 felhasználó azonnali visszajelzést kap, ha az adatok kitöltése nem
 tesz eleget a formai követelményeknek, a kitűzött kritériumoknak, vagy
 akár az azonosság vizsgálatának. Amennyiben a felhasználó által
 megadott adatok eleget tesznek a fent említett elválasoknak
 megtörténik a regisztráció. Az új ﬁók létrehozásának sikeressége abban
 áll, hogy a felhasználó által megadott e-mail címhez még nem tartozik
 ﬁók. Ennek az ellenőrzéséről már a szerver oldal gondoskodik. A
 regisztráció közben fellépő esetleges hibákról egy felugró ablak
 tájékoztatja a felhasználót és nem megy végbe az új ﬁók létrehozás,
 ezt követően az adatok újbóli megadása szükséges. Amennyiben a
 regisztráció sikeres, a felhasználó szintén egy felugró ablak által
 értesítést kap erről és átírányuk az úgynevezett "lépegető" egységre,
 ahol a további szükséges adatok megadása kerül sorra.

###### Lépegető

 A lépegető két részből áll, az első a szállítási cím megadása a
 második pedig a működési engedély feltöltése. Mindkettő létfontosságú
 szerepet játszik az új ﬁók létrehozásában ezért a regisztráció után
 rögtön ide irányítjuk a felhasználót, hogy a további kötelező adatokat
 megadja.

###### Első fázis

![image7](https://user-images.githubusercontent.com/48122593/182591569-e65fa8b0-a752-4d72-99b6-0a32263cb13e.png)
 
 Először a felhasználónak a szállítási
 adatait kell megadnia, melyek a következőkből tevődnek össze: ország,
 megye, város, irányítószám, utca, utca szám, illetve telefonszám. Az
 adatok formai ellenőrzése itt is megvalósul. Amennyiben a felhasználó
 által megadott adatok helyesek, a szállítási adatai rögzítésre
 kerülnek. A procedúra eredményéről a felhasználó visszajelzést kap. A
 szállítási adatok sikeres rögzítése után továbbléphet a második
 fázisra, ellenkező esetben az űrlap újbóli kitöltése szükséges.

###### Második fázis

 Az első fázist az érvényes működési engedély feltöltése követi,
 amelyet a felhasználó .png formátumba tölthet fel. Ennek eredményéről
 szintén értesülni fog. Amennyiben a feltöltés sikerrel járt vissza
 látogathat a főoldalra. Sikertelen feltöltés eseteben ezt a lépést
 újból meg kell ismételnie.

![image8](https://user-images.githubusercontent.com/48122593/182591571-563d0705-264e-42de-894f-81c72d4e3676.png)

![image9](https://user-images.githubusercontent.com/48122593/182591574-0187862c-2e9c-47d9-b369-3971103e137f.png)
 
 A fentebb ábrázolt lépések után létrejön
 a felhasználó, akit alapértelmezett módon a VENDÉG jogosultsági
 csoportba soroljuk, így a Felhasználói jogok fejezetben ábrázolt
 jogokkal rendelkezik, mindaddig, amíg a rendszer adminisztrátor teljes
 körű felhasználóvá, PARTNERRÉ, nyilvánítja. A felhasználó a
 jogosultsági státuszát láthatja, illetve ennek változásáról éresítést
 is kap.

###### Bejelentkezés

![image10](https://user-images.githubusercontent.com/48122593/182591577-4d042d0e-ef97-4967-9d1a-6f5db0b3c298.jpeg)
 
 A ﬁókkal rendelkező felhasználók,
 számára érhető el. A bejelentkezés során szükség van a regisztrációkor
 megadott e-mail címre és a választott jelszóra. A meghatározott adatok
 helyességének ellenérzéséről a szerver oldal gondoskodik és a
 felhasználó értesülést kap ezeknek a validitásáról. Sikeres
 bejelentkezés esetén a felhasználót a főoldal tartalmára irányítjuk,
 ellenkező esetben újból próbálkozhat.

###### Új cím hozzáadása

 A bejelentkezett felhasználók új szállítási címet adhatnak meg,
 melynek a a formai követelményei az előbb felvázolt szállítási cím
 megadását követik. Ez a lépés az előzővel ellentétben nem kötelező,
 azon kiskereskedők számára lehet hasznos, amelyek több üzlettel
 rendelkeznek, így a rendelés leadásakor válaszhatnak a különböző
 szállítási címek közül.

![image11](https://user-images.githubusercontent.com/48122593/182591584-5124f2a3-ca4d-45a5-960a-05a2b9647333.png)

###### Kijelentkezés

 A már bejelentkezett felhasználók számára elérhetővé válik a
 kijelentkezés, amely által kiléphetnek a bejelentkezett ﬁókjukból.

#### Termékek megtekintése

 A fejlécben elhelyezett Termékek fülre kattintva a felhasználó tovább
 navigálhat a kategóriák megtekintéséhez, amely a nagykereskedelem
 termékeit fő kategóriákba sorolja ezzel is elősegítve a könnyed
 navigációt.

###### Kategória kiválasztása

![image12](https://user-images.githubusercontent.com/48122593/182591589-8b5a167a-863f-4c8c-80a9-85502bc966f2.jpeg)
 
 A felhasználó a kívánt kategória
 kiválasztása után láthatja a nagykereskedelem termékeit, melyek a
 választott kategóriához tartoznak.

 A termékek megjelenítése a webáruházak konvencióit követi, miszerint a
 felhasználó számára látható az árucikk forgalmazója, megnevezése,
 illetve az ára. A további információk csak egy adott termék
 kiválasztása után lesznek elérhetőek a felhasználó számára.

![image13](https://user-images.githubusercontent.com/48122593/182591591-e3e0cca4-dc25-434a-b3b7-add1612fefe7.jpeg)

###### Termék megtekintése

 A termékek listából kiválasztva a kívánt arucikket, az adott termék
 oldalára kerül a felhasználó, ahol már a termékhez tartozó
 részletesebb információk is megjelennek. Az árucikk forgalmazója,
 megnevezése, illetve ára mellett, a felhasználó láthatja a termék
 *típusát*, *csomagolását*, illetve azt, hogy milyen *kiszerelésben*
 érhető el.

 Továbbá elérhetővé válik a *kosárhoz adás* funkció. A termék mellett
 elhelyezett rubrikában kiválasztva a darabszámot az adott árucikk a
 kosárba helyezhető. A Felhasználói jogok fejezetén bemutatottak
 alapján a kosárhoz adás funkció csak a hitelesített felhasználók
 számára érhető el, mivel csak az a felhasználó adhat le rendelést, aki
 rendelkezik érvényes működési engedéllyel. Ennek az elbírálásáról a
 rendszer adminisztrátor gondoskodik.

![image14](https://user-images.githubusercontent.com/48122593/182591594-1ed56969-b8f1-48f9-acdf-ee4d3c6fd487.jpeg)

#### Kosár

![image15](https://user-images.githubusercontent.com/48122593/182591595-bf1e923f-144e-4a60-ae8f-bd2757fe8402.png)
 
 A kosár csak a hitelesített felhasználók
 számára elérhető, ugyanis csak ők helyezhetnek terméket a kosárba, így
 a tartalom megtekintése csak akkor valósulhat meg, ha már a kosár nem
 üres, ellenkező esetben ezt jelezzük a felhasználónak.

###### Tartalom megtekintése

 A kosár tartalmazza azon termékeket, amelyeket a felhasználó az előbb
 említett módon a kosárba helyezett. A kosárba a termékek megjelenítése
 tartalmazza a

 termék nevét, illetve annak forgalmazóját. Továbbá láthatóvá válnak a
 termékhez tartozó részletes információk. Emelett fel vannak a tüntetve
 a termékhez tartozó göngyölegek, illetve azok árai, mivel ezek
 automatikusan rendelődnek meg a termék mellé.

![image16](https://user-images.githubusercontent.com/48122593/182591599-d035931b-7097-4245-a0fe-9fc085da8ce1.jpeg)
 
 A kosárban felsorakoztatott árucikkel
 alatt egy összesítést láthat a felhasználó, amely a kosárban lévő
 termékek árát foglalja magában.

###### Eltávolítás a kosárból

 A kosárban lévő termékeket a felhasználó *eltávolíthatja a kosárból.*
 Ekkor a termék eltávolítása mellet az imént említett összesítés is
 változik, az eltávolított termék árának függvényében.

![image17](https://user-images.githubusercontent.com/48122593/182591602-35e52c69-d25f-4122-aa81-5f386b5690ea.png)

###### Szállítási mód kiválasztása

 Mindemellett, a felhasználó itt választhatja ki a szállítás módját.
 Amennyiben a felhasználó a kiszállítást válassza megjelennek a
 lehetséges címek, ahova kérheti a termékek kiszállítását. Ha a
 felhasználó csak egy címet adott meg, amelyet a regisztráció folyamat
 soran határozott meg, akkor ez a cím fog megjelenni. Ha a felhasználó
 a

 regisztrációkor kötelező módon megadott cím mellé még új címeket is
 adott hozzá, ez esetben ezek is a választható opciók csoportját fogják
 képezni.

 Amennyiben a felhasználó személyes átvételt szeretne a választható cím
 a nagykereskedelem székhelye lesz, és a termékek összesített ára
 csökken 4% százalékkal, ugyanis a személyes átvételt választó
 kiskereskedők kedvezményben részesülnek.

###### Rendelés véglegesítése

 Miután a felhasználó úgy dönt, hogy a kosárban már csak a kívánt
 termékek szerepelnek, azonkívül kiválasztotta a kívánt szállítási
 módot véglegesítheti a rendelés. A rendelés leadásakor a felhasználó
 értesül, ennek kimenetéről. Sikeres rendelés esetén a kosár tartalma
 kiürül és a felhasználó visszakerül a főoldalra. A véglegesített
 rendelés ezután a rendszer adminisztrátor oldalára kerül.

## Rendszeradminisztrátor dokumentáció

### Felhasználói jogok

 A rendszeradminisztrátor szerepkörhöz tartozó jogosultsági csoport az
 ADMIN. Ez a csoport az előző fejezetben tárgyalt végfelhasználó
 szerepkörtől eltérő funkciókat, illetve jogokat birtokol. Ezek a jogok
 a következők:

 **Az ADMIN:**

 Hozzáférhetőségek:

-   Bejelentkezhet

-   Az admin felület tartalmához fér hozzá

-   Megtekintheti a VENDÉG felhasználókat, azokat a regisztált
     felhasználókat, melyek még nem lettek jóváhagyva általa

-   Megtekintheti a VENDÉG felhasználó adatait, illetve az érvényes
     működési engedélyt, melyet a regisztráció során töltöttek fel

-   Jóváhagyhatja a VENDÉG felhasználókat

-   Megtekintheti a jóváhagyott, PARTNER felhasználóknak a rendeléseit

-   A rendelést lezártnak/kiszállítottnak nyilváníthat Funkciók:

-   *Bejelentkezés*

-   *Felhasználó jóváhagyása*

-   *Rendelések lezártnak/kiszállítottnak nyilvánítása*

### Funkciók

 A továbbiakban a rendszeradminisztrátor szerepköréhez tartozó funkciók
 rövid bemutatására kerül sor.

#### Bejelentkezés

 Ahhoz, hogy az adminisztrátor bejeletkezhessen, értelemszerűen már
 rendelkeznie kell egy létező ﬁókkal. Az adminisztrátornak nem
 szükséges regisztrálnia, ugyanis ez a ﬁók alapértelmezett módon létre
 lett hozva.

#### Felhasználó jóváhagyása

 Az adminisztrátor a listázott VENDÉG felhasználókat jóváhagyhajta,
 amely által a felhasználó jogosultsági csoportja PARTNER-é változik,
 így nem fog már szerepelni a VENDÉG-ek listájában.

#### Rendelések lezártnak/kiszállítottnak nyilvánítása

 A PARTNER felhasználók által leadott rendeléseket az adminisztrátor
 lezárhatja. Ekkor a rendelés törlődik az aktív rendelések listájából.

## A szoftver használata

 Az adminisztrátor szerepkörhöz tartozó jogok és a funkciók
 ismertetésével bemutatásra kerül a szoftver használatának menete,
 rendszer admin oldalról.

### A használat menete

 Az admin felhasználó résznek a menete valójában a végfelhasználó
 bejelentkezésénél kezdődik. Ugyanis itt dől el, hogy az adott
 végfelhasználó, aki bejelentkezett, a rendszeradmin szerepkörhöz
 tartozik-e. Amennyiben ez a feltétel nem teljesül a szoftver
 használatának a menete a végfelhasználóét követi. Viszont ha a
 bejelentkezett felhasználó ADMIN ekkor az alkalmazás átirányítja őt az
 admin felületre.

![image18](https://user-images.githubusercontent.com/48122593/182591603-938ec2b9-090f-4063-b2d4-8acc60fbe222.jpeg)
 
 Ennek értelmében a procedúra az admin
 felületen folytatódik tovább, melynek külalakja hasonló az
 végfelhasználóéhoz, viszont elérhetőségek és funkciók tekintetében
 igencsak eltérő. A fejlécben lévő egységek által lehetőség nyílik a
 *fehasználók megtekintésére*, a *rendelések listázására,* illetve a
 *admin felhasználó proﬁl* funkcióinak az elérésére.

#### Admin felhasználó proﬁl

 Az admin felhasználó proﬁl, a végfelhasználóéval ellentétben jóval
 kevesebb funkcióval rendelkezik, ez esetben csak a *kijelentkezés*
 funkció érhető el, ugyanis az adminisztrátornak nem kell regisztrálnia
 vagy akár új címet megadnia.

###### Kijelentkezés

 A kijelentkezés során az adminisztrátor elhagyhatja felülelét és az
 alkalmazás visszairányul, a kezdő stádiumába, amelyben nincs
 bejelentkezett felhasználó, emellett a főoldal szerepel és az előző
 fejezetben felvázolt funkciók.

#### Felhasználók megtekintése

![image19](https://user-images.githubusercontent.com/48122593/182591605-4e58915d-88d1-414c-a66b-ffabbee7c23a.png)
 
 A fejlécben elhelyezett Felhasználók
 fülre kattintva az admin tovább navigálhat a felhasználók
 megtekintéséhez. Ezen a felületen a VENDÉG felhasználók proﬁljai
 jelennek meg. Ezek azok a felhasználók amelyek jóváhagyásra várnak. Az
 adminisztrátor a jóváhagyást ezek a felületen teheti meg. Amint ez a
 követelményekben is ábrázolva volt a jóváhagyás feltétele az érvényes
 működési engedély, amelyek a végfelhasználó a regisztráció folyamata
 alatt töltött fel. Ahhoz, hogy az adminisztrátor jóváhagyhassa egy
 felhasználót szemügyre kell, hogy vegye az általa benyújtott működési
 engedélyt. Ehhez szüksége van hogy megtekinthesse a felhasználó által
 benyújtott dokumentumot.

###### Felhasználó megtekintése

 A VENDÉG felhasználók listájából kiválasztva a kívánt felhasználót az
 adott felhasználót jelenítheti meg az adminisztrátor. Itt láthatóvá
 válik az általa benyújtott működési engedély.

###### Felhasználó jóváhagyása

 Ha a felhasználó által benyújtott működési engedély megfeltnek
 bizonyul, ekkor az adminisztrátor jóváhagyhatja a felhasználót. Ha a
 jóváhagyás megtörtént a végfelhasználó, kinek jogosultsági csoportja
 eddig VENDÉG volt, PARTNER-é módosul. Ennek értelmében törlődik a
 VENDÉG felhasználók listájáról. A megtörtént módosításáról mint az
 adminisztrátor felületén, mint a végfelhasználó felületén változást
 okoz. Az adminisztrátor felületén lévő felhasználók listájából
 törlődik a jóváhagyott felhasználó, illetve az adott felhasználó
 felületén már elérhetővé válnak a PARTNER jogosultsági csoport körébe
 tartozó funkciók és hozzáférések.

![image20](https://user-images.githubusercontent.com/48122593/182591607-9519a18e-0f06-4479-a0d7-23436407cd39.jpeg)

#### Rendelések megtekintése

![image21](https://user-images.githubusercontent.com/48122593/182591609-8d9da650-cfc0-4da2-b4ee-6938e8d81aab.png)
 
 A fejlécben elhelyezett Rendelések
 fülre kattintva az admin tovább navigálhat a rendelések
 megtekintéséhez. Ezen a felületen a PARTNER felhasználók rendelései
 tekinthetőek meg. Ezek azok a rendelések amelyeket a PARTNER
 felhasználók véglegesítettek. A rendelések megjelenítéséhez társulnak
 a rendelések adatai, a *rendelés azonosítója*, illetve a
 végfelhasználó által választott *rendelési mód*, amely kétféle lehet,
 Szállítás vagy Személyes átvétel.

###### Rendelés megtekintése

 A PARTNER felhasználók rendeléseinek listájából kiválasztva a kívánt
 rendelést az adott rendelést jelenítheti meg az adminisztrátor. Itt
 láthatóvá válnak a rendelés adatai. A rendelés adatai közé tartoznak a
 *termékek*, melyeket a felhasználó megrendelt, a rendeléshez tartozó
 *felhasználó,* illetve a felhasználó által választott *szállítási
 cím*.

![image22](https://user-images.githubusercontent.com/48122593/182591612-2c7fe78e-4e9d-4db7-991d-25fc99d517b9.jpeg)

###### Termékek

 A termékek listájában szerepelnek a rendeléshez tartozó termékek.
 Minden termékhez társul a hozzá tartozó lényeges információ, amely
 magába foglalja az árucikk *forgalmazóját*, *nevét*, *típusát*.
 Emellett fel van tüntetve a termék *csomagolása*, illetve
 *kiszerelése*. Minden rendelésben szereplő termék mellett megjelenik,
 hogy a felhasználó hány darabot kíván belőle megrendelni, ez a
 megrendeléskor általa választott darabszám.

###### Felhasználó

 A rendeléshez hozzákapcsolódik a felhasználó, amely az adminisztrátor
 számára szintén látható. Feltüntetve ennek azonosítóját, illetve
 e-mail címét.

###### Szállítási cím

 Amennyiben a rendelés szállítási módja Személyes átvétel, a
 megjelenített cím a nagykereskedelem székhelyének címe. Ellenkező
 esetben a rendelés véglegesítése kor, a felhasználó által választott
 szállítási cím jelenik meg.

###### Rendelés lezártnak/kiszállítottnak nyilvánítása

 Az adminisztrátor egy rendelést lezártnak/kiszállítottnak
 nyilváníthat. Ekkor a választott rendelés törlődik a rendelések
 listájából.

# Fejlesztői dokumentáció

### Használt technológiák

#### TypeScript

 A Typescript egy Microsoft által fejlesztett és fenntartott
 programozási nyelv. A JavaScript-nek úgynevezett superset-je, amely a
 JavaScriptet szigorú szintaktikával és erős típusossággal egészíti ki.
 A superset, vagyis "szülő-halmaz" azt foglalja magába, hogy minden
 JavaScript program valid Typescript program is egyben, viszont ez a
 reláció, ellenkező irányban nem érvényes. Ennek értelmében a
 TypeScript egy típusos és compiler által fordított programozási nyelv,
 akár a C++ vagy a Java. A compiler egy extra lépést helyez a kód írása
 és futtatása közé, mivel a böngészők nem tudnak TypeScript kódot
 futtatni, ezért a TypeScript kód JavaScriptre fordul, ezen a lépcsőn
 történnek szintaktikai- és típusellenőrzés, melyek nagymértékben
 megemelik az írott kód minőségét és csökkentik a futási hibák
 kialakulását. Az erős típusosság további előnyei közé tartozik,
 például az alkalmazások skálázhatósága. Ha többen dolgoznak egy adott
 projekten elősegíti a kód olvashatósága és magabiztosabb használatát.
 A kód írás fázisában is hasznosnak bizonyul mivel a legtöbb
 progresszív szövegszerkesztők vagy az integrált fejlesztői környezetek
 (IDE), jelzik az esetleges hibákat vagy akár utalásokkal segíthetik a
 fejlesztőt.

#### Angular

 Az Angular egy platform, illetve keretrendszer egyoldalas kliens
 alkalmazások HTML és TypeScript használatával történő fejlesztéséhez.
 Az Angular TypeScript-ben íródott. Az alap- és opcionális
 funkcionalitásokat importált TypeScript könyvtárak halmazaként
 valósítja meg.

 Az Angular alkalmazás architektúrája bizonyos alapfogalmakra
 támaszkodik. Egy Angular alkalmazás alapvető építőkövei a komponensek,
 amelyek NgModule-okba vannak rendezve. Az NgModule a kapcsolódó
 kódokat funkcionális halmazokba gyűjti, tehát egy Angular alkalmazást
 egy NgModule készlet határoz meg. Egy alkalmazásnak mindig van
 legalább egy "gyökér-modulja", amely lehetővé teszi a
 rendszerindítást, és általában számos "funkció-modulja".

 A komponensek nézeteket határoznak meg, amelyek közül az Angular
 választhat és módosíthat a program logikája és adatai szerint.

 A komponensek olyan szolgáltatásokat használnak, amiket Service-eknek
 nevezünk, és olyan speciális funkciókat biztosítanak, amelyek nem
 közvetlenül kapcsolódnak a nézetekhez. A Service-szolgáltatókat
 komponensekbe injektálhatjuk függőségként, így a kód moduláris,
 újrafelhasználható és hatékony.

 A modulok, komponensek és szolgáltatások olyan osztályok, amelyek
 úgynevezett dekotárokat használnak. Ezek a dekorátorok megjelölik a
 típusukat, és metaadatokat adnak meg, amelyek megadják az Angular
 számára használatuknak módját.

 Egy komponens osztály metaadatai társulnak egy nézetet meghatározó
 sablonnal. A sablon a hétköznapi HTML-t ötvözi az Angular
 direktívákkal és az összerendelési jelölésekkel, amelyek lehetővé
 teszik az Angular számára, hogy módosítsa a HTML-t, mielőtt
 megjelenítené azt.

 A szolgáltatás osztály metaadatai megadják azokat az információkat,
 amelyekre az Angularnak szüksége van, hogy az komponsenek számára
 elérhetővé tegye függőségi injekcióval (DI).

 Egy alkalmazás összetevői általában több nézetet határoznak meg,
 amelyek hierarchikusan vannak rendezve. Az Angular a Router
 szolgáltatást nyújtja, melynek segítségével nézetek közötti navigációs
 útvonalakat határozhatunk meg. A Router kiﬁnomult böngészőbeli
 navigációs rendszert biztosít.

#### NgRx

 Az Ngrx az Angular könyvtárak egy csoportja a reaktív
 kiterjesztésekhez. Az Ngrx / Store a Redux mintát a jól ismert RxJS
 Observable-ek felhasználásával valósítja meg. Számos előnyt nyújt az
 alkalmazás állapotának egyszerű objektumokra történő
 egyszerűsítésével, az egyirányú adatáramlás érvényesítésével.

 A reaktív programozással az alkalmazások kezelhetik az eseményeket és
 az adatáramlást. A reaktív programozás során úgy tervezzük meg a
 komponenseket és a szoftver többi részét, hogy reagáljanak ezekre a
 változásokra, ahelyett, hogy változtassák őket. A reaktív programozás
 eszközei közé tartozik az RxJS.

 A reaktív programozás aszinkron programozási paradigma, amely az
 adatfolyamokkal és a változás terjedésével foglalkozik. Az RxJS
 (Reactive Extensions for JavaScript) egy Observable-okat felhasználó
 reaktív

 programozási könyvtár, amely megkönnyíti az aszinkron alapú kód
 összeállítását.

 Az RxJS biztosítja a Observable típus megvalósítását. A könyvtár segéd
 függvényeket is biztosít a Observable-ek létrehozásához és azok
 használatához.

 Azáltal, hogy megﬁgyelhető elemeket és számos operátort biztosít a
 bejövő adatok átalakításához, ez a könyvtár segít kezelni az
 alkalmazás eseményeit. Valójában a Observable-ek segítségével az
 események, események folyamaként tekinthető meg, nem pedig egyszeri
 eseményként.

 A reaktív programozás az alkalmazás különböző részei közötti
 kommunikációt változtatja meg. Ahelyett, hogy az adatokat közvetlenül
 a szükséges komponenshez vagy szolgáltatáshoz fűznénk, a reaktív
 programozás paradigmát követve a komponens vagy szolgáltatás reagál az
 adatok változásaira.

#### Angular Material

 Az Angular Material egy UI komponens könyvtár az Angular fejlesztők
 számára. Az Angular Material komponensek segítenek a látványos,
 következetes és funkcionális weboldalak és webalkalmazások
 felépítésében, miközben betartják a modern webtervezési alapelveket,
 például a hordozhatóságot (a böngészőre való tekintettel), illetve az
 eszköz függetlenséget. Segítséget nyújt a gyors, látványos és
 reszponzív webalkalmazások létrehozásában. A Google Material Design
 ihlette.

### Frontend

 A kliens oldalon egy egyoldalas alkalmazás áll.

 Az egyoldalas alkalmazás (SPA) egyetlen oldal, ahol a legtöbb
 információ változatlan marad, és szükség esetén csak néhány darabot
 kell frissíteni.

 A SPA minden kattintással csak a szükséges információt küldi el, és a
 böngésző erre reagálva elvégzi a megjelenítést. Ez különbözik a
 hagyományos oldalbetöltéstől, ahol a szerver minden kattintással újból
 megjelenít egy teljes oldalt, és elküldi azt a böngészőnek. Ez a
 kliens oldali módszer gyorsabbá teszi a betöltési időt a felhasználók
 számára, és sokkal költséghatékonyabbá teszi a szerver által küldendő
 információ mennyiségét. Ez a megközelítés elősegíti a felhasználói
 élmény gördülékenységét.

 A legtöbb weboldalon sok ismétlődő tartalom található. Némelyik
 változatlan marad, bárhová is navigálna a felhasználó (fejlécek,
 láblécek, logók, navigációs sáv stb.), Mások csak egy bizonyos
 szakaszban találhatóak meg (szűrősávok, szalaghirdetések), illetve sok
 ismétlődő elrendezés és sablon található. Az egyoldalas alkalmazások
 kihasználják a fent említett az ismétléseknek az előnyeit.

 A SPA-nak számos előnye van, mint például az alkalmazások jobb
 teljesítménye és következetessége, valamint a fejlesztési idő és az
 infrastruktúra költségeinek csökkentése. Az előnyök közé sorolható az:

###### Egyszeri fájlbetöltés (HTML, CSS, JS fájlok)

 Egyoldalas alkalmazás esetén, a kezdeti oldalbetöltés után a szerver
 nem küld több HTML-t, mindent letölt oldalbetöltéskor. Ezután, minden
 kattintáskor, a SPA visszaküldi az adatokat és kéréseket, a szerver
 pedig válaszol a szükséges

 adatokkal, a böngésző pedig átveszi és frissíti a felhasználói
 felületet. Egységeket cserélgetve anélkül, hogy bármikor frissítenie
 kellene a teljes oldalt. Ez a gyors felcserélhetőség hihetetlenül
 hasznossá teszi a SPA-kat az olyan oldalakon, amelyeken gyakori a
 navigáció és ismétlődő sablonokból tevődik össze.

###### Nincsenek extra lekérdezések a szerver irányába

 Mivel a szervernek nem kell időt és energiát tölteni a teljes kép
 elkészítésével, a SPA-k összességében csökkentik a szerverekre
 gyakorolt hatást, amely energia illetve pénz megtakarításhoz vezet,
 mivel kevesebb erőforrást használunk, ugyanakkora forgalomhoz.

#### Az Angular architektúrája

##### Modulok

 Az Angular NgModule-jai eltérnek a JavaScript (ES2015) moduloktól, és
 egyben ki is egészítik azokat. Minden Angular alkalmazásnak van egy
 gyökér-modulja, a konvenciós nevén AppModule, amely biztosítja az
 úgynevezett indító mechanizmust. A gyökér-modul mellett egy alkalmazás
 általában sok funkcionális-modult tartalmaz. A JavaScript modulokhoz
 hasonlóan az NgModules képes importálni a funkcionalitást más
 NgModule-okból, és lehetővé teszi saját funkcionalitásainak
 exportálását illetve más NgModule használatát.

 A kód különálló funkcionális modulokká szervezése segít a komplex
 alkalmazások fejlesztésében és az újrafelhasználhatóságban. Ez a
 szemlélet továbbá lehetővé teszi a *lazy-loading-*ot, vagyis a modulok
 igény szerinti betöltését, hogy minimalizálja az indításkor betöltendő
 kód mennyiségét.

##### Komponensek

 Minden Angular alkalmazás rendelkezik legalább egy komponssel, a
 gyökér-komponenssel, amely összekapcsolja a komponens hierarchiát az
 oldal dokumentum objektum modelljével (DOM). Minden komponens
 meghatároz egy osztályt, amely az alkalmazáshoz kapcsolatos adatokat
 és logikát tartalmazza. Emellett egy HTML-sablonnal van társítva,
 amely meghatározza a megjelenítendő nézetet.

 A \@Component() dekorátor közvetlenül az alatta lévő osztályt
 azonosítja komponensként, ezenkívül megadja a sablont és a
 komponens-speciﬁkus metaadatokat.

 **Sablonok, direktívák és adatkötés**

 A sablon egyesíti a HTML-t egy Angular jelöléssel, amely módosíthatja
 a HTML-elemeket, mielőtt azok megjelennének. A sablon direktívák
 program logikát nyújtanak, az adatkötés pedig összeköti az alkalmazás
 adatait és a DOM-ot. Kétféle adatkötés létezik:

-   Az esemény-adatkötlés (event-binding) lehetővé teszi az alkalmazás
     számára, hogy az alkalmazás adatainak frissítésével válaszoljon a
     felhasználó által nyújtott inputra.

-   A tulajdonság-adatkötés (property-binding) lehetővé teszi az
     alkalmazásadatokból kiszámított értékek interpolálását a HTML-be.

 Mielőtt megjelenik egy nézet, az Angular kiértékeli a direktívákat, és
 végrehajtja a sablonban található kötőszintaxist a HTML-elemek és a
 DOM módosítására a program adatai és logikája szerint. Az Angular
 támogatja a kétirányú adatkötést, ami azt jelenti, hogy a DOM-ban
 végrehajtott változások, például a felhasználói input , a
 programadatokban is tükröződnek.

 A sablonok csövek (pipes) segítségével javíthatják a felhasználói
 élményt a megjelenített értékek átalakításával. Például csövek
 segítségével megjeleníthessük a felhasználó környezet beállításainak
 megfelelő dátumokat

 és pénznemeket. Az Angular biztosít pár előre deﬁniált csövet, viszont
 a fejlesztő akár sajátot is készíthet.

##### Szolgáltatások és függőség-injektálás

 Gyakran előfordul, hogy olyan adatokat, illetve logikákat szeretnénk
 megosztani a komponensek között, melyek nincsenek társítva egy adott
 nézethez. Ez esetben használunk szolgáltatásokat, úgynevezett
 service-eket.

 A service osztály meghatározását közvetlenül megelőzi az
 \@Injectable() dekorátor. Ez a dekorátor megadja azokat a szükséges
 metaadatokat, amelyek lehetővé teszik, hogy a többi szolgáltató
 függőség ként bekerüljön az osztályába.

 A függőség-injektálás (DI) lehetővé teszi a komponens osztályok
 "karcsúságának" megőrzését. Mivel nem a komponens osztályra bízzuk
 például az adatok lekérését a szervertől, vagy mondjuk a felhasználó
 input ellenőrzését, hanem ezeket a logikai részeket a service-ekre
 ruházzuk át. Ezzel is erősítve a kód rendezettségét és olvashatóságát.

#### Komponensek bemutatása

##### Header Component

 A fejléc komponens főként navigációs szerepet tőlt be és az alkalmazás
 használata során változatlan marad. Kivételt képez az adminisztrátor
 használati esete, ugyanis ekkor a fejlécben a navigációs menüpontok
 változnak. Fejlécben elhelyezett egységek változása a bejelentkezett
 felhasználó szerepköre függvényében változik. Az említett menüpontok
 mellett itt található a Felhasználó proﬁl és a Kosár komponenshez
 vezető navigációs menüpont, ami a fejlécben van elhelyezve, itt
 érhetőek el az autentikációval kapcsolatos funkciók, illetve az Új cím
 hozzáadása. Továbbá egy termék kosárba helyezésekor a Kosár ikon
 felett megjelenik egy értesítés amely a kosárban elhelyezett termékek
 számát jelzi, és dinamikus változik hozzáadás, illetve eltávolítás
 esetén.

##### Menu Component

 A felhasználó proﬁl is főként navigációs szerepet tölt be. Ezáltal
 érhetőek el az autentikációhoz illetve a regisztrációhoz tartozó
 komponensek. Továbbá bejelentkezett felhasználó számára elérhetővé
 válik az Új cím hozzáadása menüpont is.

##### Sign Up Component

 A regisztrációs komponens egy új felhasználó felvevését teszi
 lehetőve. Egy form-ot foglal magába amely által lekérjuk a felhasználó
 adatait, ellenőrizve azok helyességét. A bevitt adatok érvényességet
 különböző validátorokkal ellenőrizzük. A Angulár is biztosít számunkra
 validátorokat, mint példaul az e-mail validátor, viszont legtöbb
 esetben nem elég az Angular alapértelmezett validátorait használni.
 Ilyenkor sajátot kell készítenük, amelyhez egy előre deﬁniált Regex
 mintát kell megadunk. Ezt a megközelítés van alkalmazva a jelszó
 erősségének vizsgálatakor, ugyanis ﬁgyelnünk kell arra hogy a jelszó
 tartalmazzon legalább nyolc karakter, legalább egy nagybetűt és
 legalább egy számot. Így errel alkalmas Regex-et kell készítenünk.
 Emellett a felhasználó a választott feljaszvát meg kell ismételnie,
 amit ugyancsak ellenőrzünk, hogy azonos-e az előtte megadott
 jelszóval. Az említett feltételeknek eleget téve megvalósulhat az új
 felhasználó felvétele.

##### Stepper Component

 A regisztráció után a felhasználót automatikusan a Lépegető
 komponensre irányítjuk az Angular Router segítségével. Amint az a
 felhasználó dokumentáció fejezetben is szerepelt a lépegető komponens
 két részből áll. Az első fázisban a felhasználótól lekérjük a
 szállítási adatait, ennek megvalósítására szintén egy formot
 használunk, ﬁgyelve a bevitt adatok helyességére. Ez esetben
 ellenőrizni kell az irányítószám és a telefonszám érvényességét.
 Csakis valid űrlap kitöltése után léphet a felhasználó a következő
 fázisra. A következő fázisban az érvényes működési engedély feltöltése
 következik, ami szintén nem maradhat üresen, ezzel is biztosítva azt,
 hogy a felhasználó minden szükséges

 adatot megad a főoldalra látogatás előtt. Amint a adatok sikeresen
 feltöltésre kerültek a felhasználó tovább navigálhat a főoldal
 tartalmához.

##### Sign In Component

 A bejelentkezés komponens a regisztráció mintáját követi, itt viszont
 nem szükséges a jelszó ismétlődő megadása. A felhasználó a regisztrált
 e-mail címével és jelszavával bejelentkezhet.

##### Add-Address Component

 Az Új-cím-hozzáadása a lépegető komponens első fázisát követi. Az ott
 említett irányelvek szerint kérjük le a felhasználó szállítási címének
 adatait, ﬁgyelve azok helyességére.

##### Categories Component

 A kategóriák komponens a különböző kategóriák megjelenítéséért
 felelős. Magába foglal egy úgynevezett gyerek-komponenst, ami maga a
 Kategória komponens és az Angular NgFor direktívája segítségével, amit
 egy for ciklusnak feleltethető meg a DOM manipulálásához, megjeleníti
 a gyerek komponenseit. A gyerek komponenseknek az NgFor ciklusban a
 Sablonok és direktívák fejezetben említett tulajdonság-adatkötés által
 adjuk át az egyes kategóriákat.

###### Category Component

 Az imént említett Kategória komponens az egyes Kategóriák
 megjelenítéséért felelős. A komponensbe elhelyezett navigációs gomb
 által haladhat tovább a felhasználó a kiválasztott kategória
 termékeihez.

##### Products Component

 A termékek komponens a kategóriákhoz hasonló módon a különböző
 termékek megjelenítéséért felelős.

###### Product Component

 A Termék komponens megjelenít egy adott terméket, feltüntetve az ahhoz
 tartozó elsődleges és lényeges információkat. A komponensbe
 elhelyezett navigációs gomb segítségével a felhasználó ellátogathat a
 kiválasztott termék oldalára amelynek a megjelenítéséért a
 Product-Detail komponens felelős.

###### Product-Detail Component

 A szóban forgó komponens megjeleníti a felhasználó által választott
 terméket. Ez az által történik, hogy a felhasználó amikor kiválaszt
 egy terméket, az adott termék egyedi azonosítója szerint az Angular
 által kínált Router segítségével az URL a választott termék
 függvényben konstruálódik meg. Itt fel vannak tüntetve a termékhez
 tartozó részletesebb információk, illetve ezen a szakszon helyezhető a
 termék kosárba, a kiválasztott darabszám szerint. A felhasználó a
 darabszámot kedve szerint változtathatja, növelheti vagy csökkentheti,
 viszont gondoskodunk róla, hogy a darabszám legalább egy legyen. Ezt
 az által értjük el, hogy ha a darabszám kettő alá csökken letiltjuk a
 csökkentés gomb használatát. Továbbá, a Kosárba gombra kattintva a
 termék a felhasználó kosarába kerül.

##### Cart Component

 A kosár komponens a kosárhoz adott termékek megjelenítéséért felelős,
 továbbá ezen a szakaszon történik meg a rendelés véglegesítése, a
 szállítási cím kiválasztásával. Ennek értelmében a kosár komponensben,
 választómenü segítségével a felhasználó megadhatja a kívánt szállítási
 módot, illetve választógombok által kiválaszthatja a szállítási címet.
 Ezek a lépések után a Rendelés leadása gombra kattintva leadhatja a
 rendelését. A Rendelés leadása gomb felett megjelenik a rendelés
 összesítése, amely dinamikusan változik, kosárhoz adás esetén a termék
 illetve göngyölegek ára szerint nő, eltávolítás esetén pedig csökken,
 így a felhasználó, mindig naprakészen láthatja, hogy a kosárba
 elhelyezett termékek árát.

###### Orders-In-Cart Component

 A Rendelések-a-kosárban komponens rendelések megjelenítésért felelős.
 Magába foglal egy gyerek-komponenst, melynek átadja az egyes
 rendeléseket ezek megjelenítése érdekében

###### Order-In-Cart Component

 A Rendelés-A-Kosárba egy adott rendelést reprezentál. Input ként kapja
 meg a szülő komponenstől a rendelést és azzal dolgozik. Fel van benne
 tüntetve a megrendelendő termék, a hozzá kapcsolódó ár- illetve
 termékinformációkkal kiegészítve. Megjelenik a felhasználó által
 kiválasztott darabszám is, amit ezen a szakaszon is változtathat.
 Változtatás során a termékhez tartozó árinformációk is változnak a
 darabszám függvényében. Továbbá az Eltávolítás a kosárból gombot
 használva a termék törlődik a felhasználó kosarából, maga után vonva
 az elvárt következményeket, a kosár tartalma és az összesítés csökken.

##### Admin

 Az Admin felület két sajátos komponenst foglal magába amelyek csak az
 adminisztrátor számára érhetőek el. Az előbb említett fejléc dinamikus
 változásból adódóan ez két eltérő navigációs menü ponttal egészül ki,
 a Felhasználók, illetve Rendelések, amelyeken keresztül navigálhatunk
 a hozzájuk tartozó komponensekhez.

##### Users Component

 A felhasználók komponens az adminisztrátor számára a VENDÉG
 felhasználók megjelenítését teszi lehetővé. Ez a Termékek és
 Kategóriák mintáját követve egy szülő kompons amely magába foglalja a
 hozzá tartozó gyerek komponenst, átadva neki input ként az adott
 felhasználót.

###### User Component

 A Felhasználó komponens megjelenít egy adott felhasználót, annak
 adatit, illetve a hozzá tartozó működési engedélyt. Ezen a felületen
 tudja az admin szemügyre venni a benyújtott működési engedélyt és a
 Jóváhagyás gombra kattintva PARTNER-ré minősíteni a felhasználót.

##### Checkouts Component

 A Véglegesített rendelés komponens megjeleníti a felhasználók által
 leadott rendeléseket. A szokásos módon az NgFor direktíva
 segítségével, hozza létre gyerek komponenseit, amelyek egy adott
 rendelést tartalmaznak.

###### Checkout Component

 A Véglegesített rendelés komponens egy adott rendelés megjelenítéséért
 felelős. Feltüntetve a hozzá tartozó felhasználót, szállítási adatokat
 és a megrendelt termékeket. A komponensbe helyezett Kézbesített gombra
 kattintva a rendelés kiszállítottnak nyilvánítható, amely által a
 véglegesített rendelés többé nem fog a listában szerepelni.

#### Szolgáltatások bemutatása

 A szolgáltatásokra jellemző, hogy az Angular által biztosított
 HttpModule-t használják. Ennek segítségével kommunikálhatunk a szerver
 oldallal a HTTP-protokollon keresztül az adatok letöltéséhez vagy
 feltöltéséhez és más háttér-szolgáltatások eléréséhez. A HttpModule
 metódusai Observable típust adnak vissza, melyek értéke a subscribe()
 metódussal hivatkozhatunk, emelett a HttpModule biztosít hibakezelést
 is.

##### Product Service

 A Termék szolgáltatáson keresztül kérjük le a szervetől a
 nagykereskedelem termékeit. Két metódus van benne implementálva a
 getAll(), illetve a getOne(). Sikeres lekérdezés esetén a termékek
 illetve a termék a Service osztály két

 adattagjába kerülnek és ezekre hivatkozhatnak majd a komponensek
 amelyek használni kívánják az említett adatokat.

##### Category Service

 A Kategória szolgáltatás a nagykereskedelem kategóriáinak lekérdezését
 végzi. A Termék szolgálatáshoz hasonló módon a getOne(), illetve a
 getAll(), metódus van implementálva. Sikeres lekéréskor a szolgáltató
 osztály adattagaiba kerülnek a várt adatok, melyekre majd a
 komponensek hivatkozhatnak.

##### Address Service

 A Szállítási cím szolgáltatás, ezeknek a létrehozásáról, illetve
 lekérdézésről felelős. Három metódus van benne implementálva a post(),
 a getUser(), illetve a getAdmin(). A post() metódus segÍtségével
 tudunk új szállítási címet felvenni. A Lépegető, illetve az Új cím
 hozzáadása ezt a metódust használja. A felhasználó által kitöltött
 űrlap adatait továbbítja a szerverünkre, ahol megvalósul az új
 szállítási cím felvétele. A getUser(), illetve a getAdmin() metódusok
 a felhasználó illetve a nagykereskedelem székhelyének címét szerzik
 meg, amelyekre szükségünk van a rendelés leadásakor.

##### Order Service

 A Rendelés szolgáltatáson keresztül hozhatunk létre egy rendelést. A
 post() metódus van benne implementálva, melyet a Product-Detail
 használ. A komponensben elhelyezett Kosárba gombra kattintva
 meghívódik a rendelés szolgáltatás és egy új rendelés kerül
 felvételre.

##### Checkout Service

 A Rendelés szolgáltatáson keresztül hozhatunk létre egy rendelést. A
 post() metódus van benne implementálva, melyet a Product-Detail
 használ. A komponensben elhelyezett Kosárba gombra kattintva
 meghívódik a rendelés szolgáltatás és egy új rendelés kerül
 felvételre.

##### Auth Service

 Az Autentikáció szolgáltatás, a felhasználó regisztrálását, illetve
 bejeletkezését végzi. Két metódus van benne implementálva signup(),
 illetve a signin(). A signup() metódus segítségével tudunk új
 felhasználót felvenni. A Sign Up komponens, ezt a metódust használja.
 A felhasználó által kitöltött űrlap adatait továbbítja a szerverünkre,
 ahol megvalósul a regisztráció. A signin(), metódus hasonlóan működik,
 viszont kiegészül némi funkcionalitásokkal. Itt jön képbe az NgRx
 használata amely az alkalmazás állapotát menedzseli. Felhasználó
 bejelentkezésekor a szervertől visszakapott üzenetet tároljuk az NgRx
 store-ba és egy logikai változó segítségével nyilvántarjuk, hogy az
 alkalmazás éppen milyen állapotban van, ugyanis fontos számunkra, hogy
 egy bejelentkezett felhasználóval van dolgunk vagy nem.

##### User Service

 A Felhasználó szolgáltatás, ezeknek a lekéréséről és jóváhagyásáról
 gondoskodik. Két metódus van benne implementálva, a getGuests(),
 amelyet az admin felület User Component-je jasznált, illetve az
 approve(), amely által egy felhasználó szerepkörét megváltoztathatjuk.

##### Cart Service

 A Kosár szolgáltatás nagyban különbözik az előbb felsoroltaktól,
 ugyanis ez nem a szerverünkkel kommunikált, hanem az NgRx Store-al.
 Mivel a kosár tartalma változhat, hozzáadás vagy eltávolítás esetén
 ezt számon kell tartanunk az alkalmazásunk állapotában, erre nyújt
 nekünk segítséget az NgRx. Az ökoszisztéma kialakításához létre kell
 hoznunk pár NgRx koncepciót, melyek az állapot menedzseléshez
 szükségesek.

###### Actions

 A műveletek olyan egyedi eseményeket írnak le, amelyeket az összetevők
 és szolgáltatások küldenek. A műveletek az NgRx egyik fő építőeleme. A
 műveletek olyan egyedi eseményeket fejeznek ki, amelyek

 az alkalmazás során történnek. Ezek lehetnek például felhasználó
 interakciók.

###### Reducers

 Az állapotváltozásokat a redukálóknak nevezett tiszta függvények
 kezelik, amelyek az aktuális állapotot és a megadott műveletet hajtják
 végre egy új állapot kiszámításához. Az NgRx reduklálói felelősek az
 alkalmazás egyik állapotából a következő állapotba történő átmenetek
 kezeléséért. Mivel ezek a függvények tiszta függvények, nincsenek
 mellékhatásai, nem változtatják meg az alkalmazás állapotát, hanem a
 régi alapján újat hoznak létre. Ez a megközelítés meglehetősen
 előnyös, mivel ezáltal folyamatosan nyomon tudjuk követni az
 alkalmazás állapotát.

###### Selectors

 A szelektorok tiszta függvények, amelyeket az állapot szegmensek
 kiválasztásához, levezetéséhez és összeállításához használhatóak.

###### State

 Az alkalmazás állapota egy előre deﬁniált interface, ennek az
 interfacenek az adattagjai érhetőek el a szelektorok segítségével. Az
 állapot a Store-val érhető el, amely állapot- és művelet megﬁgyelő.

 A Kosárhoz két fő művelet van deﬁniálva, az addToCart, illetve a
 removeFromCart. A kosárhoz adás művelet az alaklmazás állapotába
 helyezi az adott terméket a rendelések közé. A rendelések az
 alkalmazás-állapot egy részét képezik ami tömbként van deﬁniálva és
 rendeléseket tartalmaz. Ha a kosárba adáskor a felhasználó kétszer
 ugyanazt a terméket kívánja hozzáadni, akkor a redukáló függvényében
 ﬁgyelünk arra, hogy ne keletkezzenek duplikátumok és csak az adott
 termék darabszámán változtassunk. A rendelések mellet a kosár
 állapotát képezik az is, hogy hány darab termék található benne,
 illetve termékek árainak az összesítése. A redukáló

 függvényekben ezek állaptán is változtatunk, műveletek
 bekövetkezésekor. A darabszám dinamikus változását a Fejléc
 komponensben elhelyezett értesítésen keresztül tudassuk a
 felhasználóval, az összesítés pedig a Kosár komponensbe szerepel, ahol
 a felhasználó a kosárba helyezett termékeket elemzheti.

### Tesztelés

 Az alkalmazás tesztelése során end-to-end tesztek lettek megvalósítva.
 Az end-to-end tesztelés egy olyan technika, amely a teljes
 szoftverterméket elejétől a végéig teszteli annak biztosítására, hogy
 az alkalmazás folyamata a várt módon viselkedjen. Meghatározza a
 termék rendszerfüggőségeit, és biztosítja, hogy az összes integrált
 darab a várt módon működjön együtt.

 Az end-to-end (E2E) tesztelés fő célja, hogy a végfelhasználó
 tapasztalatai alapján tesztelje a valós felhasználói szcenárió
 szimulálásával.

 A szoftver rendszerek manapság összetettek és számos alrendszerrel
 vannak összekapcsolva. Ha bármelyik alrendszer meghibásodik, az egész
 szoftver rendszer összeomolhat. Ez komoly kockázatot jelent, és
 végpontok közötti teszteléssel elkerülhető.

#### Autentikáció

 Az autentikáció tesztelése során négy tesztet végzünk el, melyek az
 autentikációhoz való fő funcionalitásokat vizsgálják. Először is
 ellenőrizzük, hogy regisztráció során valóban létrejön az új
 felhasználó. Regisztrációkor fontos arra ﬁgyelni, hogy két felhasználó
 ne regisztrálhasson azonos e-mail címmel, ennek elkerülésére
 teszteljük, hogy a rendszer az elvárt módon viselkedik az ilyen
 esetekben, elutasítja a duplikátumokat.

 Következő lépés a bejelentkezés tesztelése. Első sorban teszteljük,
 hogy hibás hitelesítő adatok révén ne lehessen belépni, ekkor a
 rendszernek jelezi kell a hibát és megtagadnia a hozzáférést. Ha a
 hitelesítő adatok megfelelnek, akkor

 megtörténik a bejelentkezés és vizsgáljuk, hogy a bejeltkezés kérésére
 kapott válasz tartalmazza a hozzáféréshez szükséges tokent.

#### Termékek

 A termékek tesztelésekor megbizonyosodtunk arról, hogy a lekérés során
 a szerver továbbítja számunkra a nagykereskedelem termékeit. Az
 esetben ha egy adott terméket kérünk az egyedi azonosítója alapján
 akkor értelemszerűen azt a terméket várjuk vissza, ha pedig a termék
 nem létezik vagy hibás azonosítót küldünk a szervernek akkor ezt a
 hibát jelezze is.

#### Felhasználók

 A felhasználók tesztelésekor vizsgáljuk a VENDÉG felhasználók
 lekérdezését. Abban szertnénk biztosak lenni, hogy az adminisztrátori
 jóváhagyás számára valóban csak a VENDÉG jogosultsági csoportba
 tartozó felhasználók kerülhessenek. Ennek értelmében ellenőrizzük,
 hogy a szerver válaszában lévő felhasználók összessége VENDÉG
 szerepkört tölt be.

#### Szállítási cím

 A szállítási címeknek a tesztelésekor megbizonyosodtunk arról, hogy a
 felhasználó által megadott szállítási cím valóban létrejött. Emellet
 vizsgáljuk, azt is, hogy a cím a megfelelő felhasználóhoz
 kapcsolódik-e. Egy cím létrehozásakor a felhasználót a kérés
 objektumból szűrjük ki és a kapcsolatot ezáltal végezzük el.
