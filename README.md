# WebProjekt_TimRaketa - Pokedex

![cover-pokemon-preview](https://user-images.githubusercontent.com/61355658/160351295-75843f57-bbcd-49e4-ba67-794a217053a7.png) <img src="https://user-images.githubusercontent.com/61355658/160352409-c4447a82-d373-4233-868a-7df2ddc8a7fe.png" width="400" height="250">


## Funkcionalni zahtjevi
* prikaz pokemona kroz pokedex s mogućnošću filtriranja pokemona po imenu i tipu
* prikaz karte iz videoigara pokemon fire red i leaf green s dodatnim interaktivnim sadržajima
* mogućnost odabira prikaza za svaku igru zasebno (sidebar mijenja boju ovisno o odabiru igre)
* prikaz detalja o odabranom pokemonu 
* mogućnost odabira nasumičnog pokemona s prikazom evolucijske linije
* registracija/prijava korisnika
* označavanje pokemona kao favorita

## Korištene tehnologije

* React.js
* Node.js i pripadajuće biblioteke
* HTML
* CSS
* Visual Studio Code

## Pregled značajki
### Navigacija
Navigacijska traka na vrhu web aplikacije sastoji se od sljedećih destinacija: Pokedex, Map, Who's that POKEMON?, Favorites, Sign in i Register. Opcija Favorites omogućena je isključivo ako je korisnik prijavljen. Prilikom uspješne registracije ili prijave, korisnik se vraća na Pokedex, uz istaknutu email adresu kojom je prijavljen.

### Pokedex
Pokedex je početna stranica na kojoj se može vidjeti svih 151 pokemona iz Kanto regije. Pokemoni su prikazani na vlastitim karticama ([Card.js](https://github.com/FilipKupanovac/WebProjekt_TimRaketa/blob/main/src/Components/Card.js)), koje čine popis kartica ([CardList.js](https://github.com/FilipKupanovac/WebProjekt_TimRaketa/blob/main/src/Components/CardList.js)). Na dijelu zaslona gdje se nalazi popis pokemona omogućen je scroll. Iznad popisa pokemona nalazi se element za unos teksta, koji dinamički filtrira prikazane pokemone unutar liste, omogućujući funkcija pretraživanja. Prilikom odabira jednog pokemona, ispod popisa prikazuje se kartica s detaljima odabranog pokemona ([DetailsCard.js](https://github.com/FilipKupanovac/WebProjekt_TimRaketa/blob/main/src/Components/DetailsCard.js)). Kartica s detaljima sadrži sljedeće: redni broj i ime pokemona, tip, sliku, slike evolucijskog stabla i popis lokacija unutar video igrice gdje je mogući susresti se s odabranim pokemonom. Ukoliko je korisnik prijavljen, također se prikazuje i zvijezda koja omogućava pohranu ili brisanje pokemona iz omiljenih pokemona (Favorites).

### Map
Na ovom dijelu web aplikacije prikazana je karta ([Map.js](https://github.com/FilipKupanovac/WebProjekt_TimRaketa/blob/main/src/Components/Map.js)) iz video igrice Pokemon Fire Red i Leaf Green. Na karti su označeni putevi, gradovi i područja unutar njih. Prilikom prelaska mišem preko karte, ispisuje se naziv područja nad kojim se pokazivač nalazi. Klikom na odabrano područje, ispod karte se ispisuje popis pokemon koje je moguće susresti na odabranom području.

### Who's that POKEMON?
Jednostavna igra ([Wtpmon.js](https://github.com/FilipKupanovac/WebProjekt_TimRaketa/blob/main/src/Components/Wtpmon.js)) koja kombinira inspiraciju dobivenu od serijala crtanih filmova Pokemona koji su na početku prikazivali siluete pokemona, s namjerom da gledatelj pogađa ime pokemona, i igrom [Wordle](https://www.nytimes.com/games/wordle/index.html) u kojoj je cilj pogoditi riječ iz određenog broja pokušaja. Korisniku je prikazana silueta pseudonasumičnog pokemona, te se traži unos imena pokemona. Ukoliko igrač pogriješi 5 puta, utoliko gubi igru i može igrati ponovno s novim pokemonom. Ako igrač upiše točno ime pokemona, prikazuje se animirana čestitka igraču na pobjedi. Igra nudi 2 vrste pomoći, prikaz prvog slova pokemona i prikaz broja slova pokemona.

### Favorites
Dio web aplikacije koji je dostupan samo prijavljenim korisnicima. Korisniku je prikazan popis omiljenih pokemona koje je vlastoručno izabrao klikom na zvijezdu na Pokedex dijelu aplikacije. Prikaz je ostvaren na isti način kao i na Pokedex dijelu aplikacije, uz dodatnu funkcionalnost dinamičkog osvježavanja omiljenih pokemona, primjerice, pritiskom na zvijezdu unutar Favorites dijela, pokemon nestaje s popisa. Implementacija omiljenih pokemona realizirana je pomoću firebase realtime database biblioteke.

### Sign in i Register
Dijelovi web aplikacije koji omogućuju korisniku registracijju i prijavu implementiranu pomoću firebase authentication biblioteke.

### Firebase
Za autentikaciju korisnika korištena je Authentication mogućnost Firebase servisa, a za pohranu podataka korišten je Firebase Realtime Database. Baza podataka sastoji se od niza emailova, od kojih svaki sadrži jedan niz cijelih brojeva koji predstavljaju ID omiljenih pokemona. Ukoliko korisnik nema omiljenih pokemona, umjesto niza cijelih brojeva upisuje se 'undefined'.

### Web adresa i server
* [Web aplikacija](https://filipkupanovac.github.io/pokedex-web-app/)
* [Server](https://pokedex-timraketa-nodejs.herokuapp.com)


## Resursi i ključne riječi
* [Pokemon API](https://pokeapi.co/)
* React lifecycle hooks
* [Using dynamic key to set state](https://stackoverflow.com/questions/51282464/using-a-dynamic-key-to-setstate-in-react)
* [Handling events](https://reactjs.org/docs/handling-events.html)
* [CSS Aspect Ratio](https://css-tricks.com/almanac/properties/a/aspect-ratio/)
* [CSS Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
