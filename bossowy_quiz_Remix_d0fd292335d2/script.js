//zmienna przechowująca liczbę dodanych pytań w naszym quizie
const iloscPytan = document.querySelectorAll(".pytanieKontener").length;
//alert('Twój bossowy quiz posiada aktualnie '+iloscPytan+' pytań');

//zmienna na poprawne odpowiedzi
let poprawneOdpowiedzi= 0;
//zdarzenie na kliknięcie przycisku
document.getElementById("sprawdz").addEventListener("click", function() {
  //alert('Przycisk został kliknięty');
  
  //resetowanie quizu
  poprawneOdpowiedzi= 0;
  //po każdym kliknięciu usuwamy klasy nadające kolory naszym pytaniom
  for (let i = 1; i <= iloscPytan; i++) {
    
      document.querySelector("#pytanie" + i).classList.remove("poprawna");
      document.querySelector("#pytanie" + i).classList.remove("bledna");
    
  }
  
  for (let i = 1; i <= iloscPytan; i++) {
    //alert('Właśnie sprawdzam '+i+'pytanie');
    
    for (let j = 1; j <= 3; j++) {
      
      //alert('Właśnie sprawdzam odpowiedź '+j+' w '+i+'pytanie');
      
      //odpowiedź będzie uznana za poprawną jeśli będzie zaznaczona(checked) i będzie posiadać w swoim znaczniku input klasę „poprawna”
      if (document.getElementById("p" + i + "-" + "odp" + j).checked && document.getElementById("p" + i + "-" + "odp" + j).classList.contains("poprawna")) {
        //odpowiedź zaliczona
        poprawneOdpowiedzi--;
        document.querySelector("#pytanie" + i).classList.remove("bledna");
        document.querySelector("#pytanie" + i).classList.add("poprawna");
        //przerywamy działanie pętli dla tego pytania ponieważ jest już znaleziona poprawna odpowiedź
        break;
      }
        
      else{
        
        document.querySelector("#pytanie" + i).classList.add("bledna");
      
      }
    }
    
  }
  

  document.getElementById("wynik").textContent ="Poprawne odpowiedzi " +poprawne Odpowiedzi+ "/" + iloscPytan;
});
