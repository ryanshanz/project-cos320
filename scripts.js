"use strict";

console.log('Script is running');
var first_square = ["star wars revenge of the sith", "star wars episode iii", "star wars episode 3", "star wars Episode III Revenge of the Sith"];
var second_square = ["Moulin Rouge", "The Beginning Making Episode I", "R2-D2 Beneath the Dome", "Black Hawk Down"];
var third_square = ["Star Wars Episode II", "Star Wars the Force Awakens", "Star Wars Episode I", "Birds of Prey", "T2 Trainspotting", "Angels and Demons"];
var fourth_square = ["The Accountant 2"];
var fifth_square = ["Pearl Harbor", "Daddy and Then", "Jay and Silent Bob Strike Back"];
var sixth_square = ["Mallrats", "Jay and Silent Bob Strike Back", "Dogma", "Clerks 2", "Clerks II", "Batman v Superman Dawn of Justice", "The Accountant 2", "Justice League", "Jay and Silent Bob Reboot", "Zack Snyder's Justice League", "Clerks 3", "Clerks III"];
var seventh_square = ["Sinners"];
var eighth_square = ["Hardball"];
var ninth_square = ["Creed", "Creed 2", "Creed II", "Creed 3", "Creed III", "Space Jam: a New Legacy", "Black Panther Wakanda Forever"];
var submit = document.getElementById('submit-button');
var answers = [first_square, second_square, third_square, fourth_square, fifth_square, sixth_square, seventh_square, eighth_square, ninth_square];
var submissions = [];
var first = document.getElementById('input1');
var second = document.getElementById('input2');
var third = document.getElementById('input3');
var fourth = document.getElementById('input4');
var fifth = document.getElementById('input5');
var sixth = document.getElementById('input6');
var seventh = document.getElementById('input7');
var eighth = document.getElementById('input8');
var ninth = document.getElementById('input9');
submissions.push(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
var reset = document.getElementById('reset-button');
var result = document.getElementById('result');
submit.addEventListener('click', function () {
  console.log("submit clicked");
  var correct = false;
  var number_correct = 0;
  for (var i = 0; i < submissions.length; i++) {
    for (var j = 0; j < answers[i].length; j++) {
      if (submissions[i].textContent.toLowerCase() == answers[i][j].toLowerCase()) {
        submissions[i].style.backgroundColor = 'rgb(54, 116, 54)';
        submissions[i].style.color = 'white';
        correct = true;
        number_correct++;
      }
    }
    if (correct == false) {
      submissions[i].style.backgroundColor = 'rgb(212, 77, 77)';
      submissions[i].style.color = 'white';
    }
    correct = false;
  }
  if (number_correct == 9) {
    result.textContent = 'You got all the answers correct!';
  } else {
    result.textContent = "You got ".concat(number_correct, " answers correct");
  }
});
reset.addEventListener('click', function () {
  console.log('reset');
  for (var i = 0; i < submissions.length; i++) {
    submissions[i].style.backgroundColor = 'white';
    submissions[i].style.color = 'black';
    submissions[i].textContent = '';
    result.textContent = '';
  }
});