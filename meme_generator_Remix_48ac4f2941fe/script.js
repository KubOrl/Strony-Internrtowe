//tworzymy zmienne, dzięki którym uzyskamy dostęp do kluczowych elementów HTML w projekcie
//tworzymy je jako stałe bo nie będziemy im już przypisywać innych wartości
const choosenPicture = document.querySelector("#select-picture");
const canvas = document.querySelector("#meme");
const textTop = document.querySelector("#text-top");
const textBottom = document.querySelector("#text-bottom");
const downloadButton = document.querySelector('#download-button'); 
//zmienna globalna przechowująca nasz wybrany obrazek w formie URL
let picture;

//ukrywamy przycisk pobierz
downloadButton.style.display='none';





function wgrajobrazek(e){







choosenPicture.addEventListener("change", wgrajobrazek);


//na jakąkolwiek zmianę w inpucie tekstu górnego odświeżamy obrazek w canvasie
textTop.addEventListener("change", function(){
  

});

//na jakąkolwiek zmianę w inpucie tekstu dolnego odświeżamy picture w canvasie
textBottom.addEventListener("change", function(){
  

});

//funckja odpowiedzialna za ładowanie obrazka w canvasie oraz dodowanie napisu górnego i dolnego

function updateMeme(canvas, picture,textTop,textBottom) {
//ustawiamy kontekst renderowania w canvasie w naszym przypadku będzie to 2D
const ctx = canvas.getContext("2d");
//szerokość i wysokość canvy ustawiamy na parametry obrazka

//wgrywanie małych obrazków zakończy się pikselozą
const canvasWidth = picture.width;
const canvasHeight = picture.height;
//Wielkość czcionki będzie zależna od szerokośći obrazka jeśli chcemy zmienić to w tym miejscu można edytować wartosć
// Math.floor zaokrągla do najmniejszej lub największej liczby całkowitej

const fontSize = Math.floor(canvasWidth / 20);
//odstępy napisów od górnej i dolenej krawędzi zdjęcia im mniejsza wartość tym napisy będą bliżej środka
const offsetY = canvasHeight / 25;

  //ustawiamy szerokść i wysokość naszego płótna na wymaery obrazka
canvas.width = canvasWidth;
canvas.height = canvasHeight;
//metoda ta rysyuje obrazek w canvasie kordy 0 , 0 wskazują miesce rozpoczęcia rysowania lewy - górny róg canvasu
ctx.drawImage(picture, 0, 0);
  
  
// Przygotowanie tekstu  https://www.w3schools.com/tags/ref_canvas.asp
  
  //kolor obramowań liter
ctx.strokeStyle = "black";
  //szerokość obramowańa liter
ctx.lineWidth = Math.floor(fontSize / 4);
  //kolor wypełnienia litery
ctx.fillStyle = "white";
  //wyśrodkowanie tesktu
ctx.textAlign = "center";
  //zaokrąglenie obramowania
ctx.lineJoin = "round";
ctx.font = `${fontSize}px Lato`;

  
//przygotowanie górnego tekstu
//ustawiamy linię bazową od której zaczynamy rysować tekst
ctx.textBaseline = "top";
  //rysujemy tekst bez wypełnienia
ctx.strokeText(textTop, canvasWidth / 2, offsetY);
  //dodajemy wypełnienie
ctx.fillText(textTop, canvasWidth / 2, offsetY);
  
  
  
  // przygotowanie dolnego tekstu
ctx.textBaseline = "bottom";
ctx.strokeText(textBottom, canvasWidth / 2, canvasHeight - offsetY);
ctx.fillText(textBottom, canvasWidth / 2, canvasHeight - offsetY);

}



// Konwertujemy canvas do obrazka po klknięciu przycisku pobierz
downloadButton.addEventListener("click", function() {

    
});
