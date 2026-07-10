//tablica na wyrazy

const wyrazy

//tablica na adresy do grafik
const tabObrazki = ["wisielec0.png", 
                    "wisielec1.png", 
                    "wisielec2.png", 
                    "wisielec3.png", 
                    "wisielec4.png", 
                    "wisielec5.png", 
                    "wisielec6.png", 
                    "wisielec7.png", 
                    "wisielec8.png", 
                    "wisielec9.png", 
                    "wisielec10.png"];

// losowy wyraz z tablicy wyrazy
const wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)];

// tablica z odpowiedziami zawiera przesłonięte hasło które stopniowo będziemy odsłaniać w grze
const odpowiedzi =

//zmienna informująca czy po podaniu literki udało się trafić
let czyTrafiony =

//szanse w grze musi być taka wartość ponieważ mamy tyle grafik
let szanse =

//tablica przechowująca użyte już litery

const uzyte =



//przygotowanie zakrytego wylosowanego wyrazu
for (let i = 0; i < wyraz.length; i++) {
   
  odpowiedzi
 
}

//zmienna przechowująca info ile pozostało liter do odgadnięcia
let pozostaleLitery =

//wyświetlanie tablicy zasłoniętego hasła każdy element w tablicy czyli _ łączymy ze spacją
document.getElementById('').textContent = 




//zdarzenie na kliknięcie przycisku ok
function klikniecie() {

    // przed każdym nowym zatwierdzeniem literki ustawiamy tą zmienna na false
    czyTrafiony = 

  //czyścimy wyświetlanie komunikatu
  document.getElementById('').textContent = 

  //zmienna przechowująca literkę gracza
  const strzal = document.getElementById('').value
 

  document.getElementById('litera').value = '';

  if (strzal.length == 0) {
    document
  } 
  
  else if(uzyte.includes(strzal)){
    document.getElementById('komunikat').textContent = ""; 
  }
  else {
   
    uzyte.push(strzal);

    //przeszukujemy dane slowo litera po literce i sprawdzamy czy gdzieś jest ta sama litera co nasz strzal jeśli tak to odsłaniamy w tablicy odpowiedzi tą literę
    for (let j = 0; j < wyraz.length; j++) {
      if (wyraz[j] == strzal) {
        czyTrafiony = true;
        odpowiedzi[j] = strzal;//odsłonięcie litery w haśle
        pozostaleLitery--;

        //aktualizujemy wyświetlanie naszego hasła
        document
      }
    }

    //zwyciestwo

    if (pozostaleLitery == 0) {
      document.getElementById('ok').disabled = true;
      document.getElementById('litera').disabled = true;
      document.getElementById('komunikat').textContent =
        'Brawo odgadnięte hasło to:' + wyraz;
      
    }

    //utrata szansy, rysowanie wisielca 

    if (czyTrafiony == false) {
      ustawObrazek();
      szanse--;
      
      //pzegrana
      if (szanse == 0) {
        document.getElementById('ok').disabled = true;
        document.getElementById('litera').disabled = true;
        document.getElementById('komunikat').textContent =
          'Przegrana,szukane słowo to:' + wyraz;
      }
    }
  }
}

document.getElementById('').addEventListener('', );



function ustawObrazek() {
   
  //wybieramy z tablicy odpowiedni adres zdjęcia i ustawiamy jako source obrazka
  document.getElementById('wisielec').src=tabObrazki[szanse-1];
  //wyświetlanie obrazka
  document.getElementById('wisielec').style.display='block';
}



function reset()
