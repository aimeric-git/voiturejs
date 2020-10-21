/*
var variable1 = 'La valeur ici';
console.log(variable1);

var myH1 = document.querySelector('h1');
console.log('Log 1', myH1);
function alertUser() {
  alert(variable1);
}

function coloreTitre() {
  console.log('Log 2', myH1);
  document.querySelector('h1').style.color = 'red';
}
*/
var maVoiture = document.querySelector('.voiture');
var positionInitiale = maVoiture.style.left;
var positionInitial = maVoiture.style.transform;
console.log('Voiture style: ', maVoiture.style);
let voitureRotation = false;
alert(maVoiture.style);


 function faireBouger(direction, rotation) {
     
     positionInitiale = +positionInitiale + direction + +positionInitial;
     if(voitureRotation === false) {
         document.querySelector('.voiture').style.left = positionInitiale + 'px';
     } else {
        document.querySelector('.voiture').style.top = positionInitiale + 'px';
     }
     

     
   }
   
   function faireTourner() {
    var positionInitial = maVoiture.style.transform;
    document.querySelector('.voiture').style.transform = positionInitial + 'rotate(90deg)';
    voitureRotation = !voitureRotation
  }
//    function faireBouger(direction, rotation) {
//     console.error('============================');
//     console.log('Rotation', rotation);
//     console.log('Direction >>>>>', direction);
//     console.log('Position initiale >>>>>', positionInitiale);
//     positionInitiale = +positionInitiale + direction;
//     console.log('Nouvelle position >>>>>', positionInitiale);
//     document.querySelector('.voiture').style.left = positionInitiale + 'px';
//   }



