##Bruk av siden 
På vår nettside er det mulig å endre tema på siden, lagre installasjoner og hente de lagrede installasjonene frem igjen. De ulike temaene er tropical, disco og royal. Når du trykker på favoritt-ikonet ved bildene og deretter trykker på "click here to save your favorites for next time", kan du finne bildene under favoritt-ikonet øverst til høyre på siden. For å spille av lyden, trykk på hver installasjon.
 
##React 
Løsningen vi har brukt er implementert ved bruk av React, slik det er spesifisert i oppgaveteksten. Gruppen installerte node.js fra nettsiden deres (https://nodejs.org/en/download/ ), og kunne derfra begynne å bruke “npm” i kommandolinjen. Node package manager (npm) gir oss muligheten til å hente ned pakker laget av andre open-source utviklere. Vi lagde appen Gallery med create-react-app som spesifisert i forelesningsnotatene. TypeScript gir oss fordelen med at det er lettere å debugge enn med JavaScript, noe gruppen har sett svært nyttig i arbeidet med prosjektet. 
Gruppen har laget ulike UI-komponenter til å sette sammen siden, og har både brukt klasser (som i DisplayArt.tsx) og funksjonelle komponenter (som i Installation.tsx) for å utfordre oss selv til å implementere begge deler. Enkeltkomponenter har tilstander til eget bruk, men App.tsx bruker også state hooks og Context API-et for å i praksis ha en global tema-tilstand. Dette er en løsning som lar oss slippe å passe tema-variablene gjennom komponenthierarkiet som props. useContext eller Consumer blir brukt av komponentene som benytter seg av tema for å oppdatere styling i henhold til det nåværende temaet. Tre knapper i menyen oppdaterer temaet ved å kalle en toggle-funksjon som oppdaterer temaet i App.tsx, som fungerer som Provider. 
 
##SVG eller Canvas 
Erfaringene gruppen hadde tilegnet seg fra prosjektoppgave 1, der vi var enige om at vi likte å arbeide med SVG fremfor Canvas, gjorde at valget falt på å kun bruke SVG i dette prosjektet. Fordelen med vektorgrafikk, slik SVG er, er at bildene egner seg godt for skalering, noe som gjør at vi får den ønskede responsiviteten. I tillegg hadde vi gode erfaringer med @keyframes i CSS fra prosjektoppgave 1, og vi kunne dermed gjenbruke mye av koden til animeringen av bildene. For å lage bildene har vi brukt "<path>" i svg-taggen. Pathene ble tegnet i Photoshop.
 
##AJAX
Musikk ble implementert ved hjelp av Audio() funksjonen til react, som returnerte et HTMLAudioElement. Det ble laget en “AudioClips” fil, der alle lydklippene ble lagret i mp3-format.  Vi valgte å bruke mp3 fordi dette er kompatibelt med alle nettlesere. Audio-funksjonen ble implementert sammen med lydfilene i de ulike SVG-komponentene. Håndteringen av avspilling ble løst med en onClick på hele SVG-bildet. Toggle-funksjonen ble implementert i en egen fil for å få en ryddig struktur. Denne funksjonen sjekker når det skal pauses og spilles lyd. Gruppen synes det var mest hensiktsmessig å kunne spille en og en lyd. Derfor må en lyd pauses før en annen kan spilles.
 
Gruppen valgte å hente ut json-data dynamisk fra Poetry-databasen. Dette ble løst ved å hente ut den tilgjengelige dataen ved montering av “DisplayArt”. Dette gjorde at det ble generert tekst med en gang siden loades. Dataen ble lagret i PoetryDB som en tilstand. For å få ut kun tittelen, brukte vi map-funksjonen på PoetryDB sammen med Math.random som index for å hente ut forskjellige dikttitler til installasjonene.
 
##HTML Web Storage
Gruppen har brukt både sessionStorage og localStorage fra HTML Web Storage. Vi bruker sessionStorage til å lagre hvilke installasjoner som er markert som favoritt for øyeblikket. localStorage brukes til å lagre markerte favoritter. Disse blir værende som favoritter helt til man velger å lagre nye favoritter, selv hvis siden blir lukket.
 
##Responsive web design
Løsningen implementerer responsivt design og tilpasser seg ulike skjermstørrelser. Når skjermen blir liten nok (smal mobil) endres bildene til en mindre størrelse ved hjelp av media queries og viewbox. Siden er fungerende når du også roterer skjermen. Gruppen har laget all CSS fra bunnen, og laget passende mapper for å binde CSS- og Typescript-filene sammen.
 
##Testing
Gruppen startet med å laste ned react-test-renderer fra npm. La til snapshot test, der youtube-videoen som er referert til i kildene la grunnlag for vår kode. Vi la også til en smoke test for å sjekke at det App rendrer uten å krasje.
 
##Bruk av git, koding
Koden i prosjektet er fornuftig strukturert og kommentert der gruppen har ment det er nødvendig. Gruppen brukte GitHub desktop til versjonshåndtering. Vi har brukt issues og issue boards på GitLab for å holde oversikt over hva som må gjøres, slik at gruppens fremdrift er tydelig. 
 
##Kilder
https://nodejs.org/en/download/
https://reactjs.org/docs/create-a-new-react-app.html 
https://reactjs.org/tutorial/tutorial.html
https://reactjs.org/docs/getting-started.html#learn-react 
https://reactjs.org/docs/context.html
https://fettblog.eu/typescript-react/context/
https://reactjs.org/docs/hooks-overview.html
https://reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/hooks-state.html
https://www.digitalocean.com/community/tutorials/js-json-parse-stringify
https://www.robinwieruch.de/local-storage-react
https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5
https://www.youtube.com/watch?v=KT4dFLrlS7A
https://medium.com/better-programming/add-sound-to-a-react-ui-c58e33e0a96c
https://www.udemy.com/share/101WH4CEoecllSRHo=/
 
 
 
 
 
 
 
 
 
 
 

