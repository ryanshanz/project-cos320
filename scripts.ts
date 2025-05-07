
console.log('Script is running');

const first_square: Array<string> = ["star wars revenge of the sith", "star wars episode iii", "star wars episode 3", "star wars Episode III Revenge of the Sith"];
const second_square: Array<string> = ["Moulin Rouge", "The Beginning Making Episode I", "R2-D2 Beneath the Dome", "Black Hawk Down", ];
const third_square: Array<string> = ["Star Wars Episode II", "Star Wars the Force Awakens", "Star Wars Episode I", "Birds of Prey", "T2 Trainspotting","Angels and Demons"];
const fourth_square: Array<string> = ["The Accountant 2"];
const fifth_square: Array<string> = ["Pearl Harbor", "Daddy and Then", "Jay and Silent Bob Strike Back"];
const sixth_square: Array<string> = ["Mallrats", "Jay and Silent Bob Strike Back", "Dogma", "Clerks 2", "Clerks II", "Batman v Superman Dawn of Justice", "The Accountant 2", "Justice League", "Jay and Silent Bob Reboot","Zack Snyder's Justice League","Clerks 3", "Clerks III"];
const seventh_square: Array<string> = ["Sinners"];
const eighth_square: Array<string> = ["Hardball"];
const ninth_square: Array<string> = ["Creed", "Creed 2", "Creed II", "Creed 3", "Creed III", "Space Jam: a New Legacy", "Black Panther Wakanda Forever"];

const submit = document.getElementById('submit-button') as HTMLInputElement;

const answers = [
first_square,
second_square,
third_square,
fourth_square,
fifth_square,
sixth_square,
seventh_square,
eighth_square,
ninth_square
] ;
 
const submissions : Array<HTMLElement> = [];
const first = document.getElementById('input1');
const second = document.getElementById('input2');
const third = document.getElementById('input3');
const fourth = document.getElementById('input4');
const fifth = document.getElementById('input5');
const sixth = document.getElementById('input6');
const seventh = document.getElementById('input7');
const eighth = document.getElementById('input8');
const ninth = document.getElementById('input9');

submissions.push(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
const reset = document.getElementById('reset-button') as HTMLInputElement;
const result = document.getElementById('result') as HTMLParagraphElement;

submit.addEventListener('click', () => {
    console.log("submit clicked");
    let correct : boolean = false;
    let number_correct : number = 0;
    for (let i = 0; i<submissions.length; i++){
        for (let j = 0; j < answers[i].length; j++){
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
    }
    else{
        result.textContent = `You got ${number_correct} answers correct`;
    }
})

reset.addEventListener('click', () => {
    console.log('reset');
    for (let i = 0; i < submissions.length; i++) {
        submissions[i].style.backgroundColor = 'white';
        submissions[i].style.color = 'black';
        submissions[i].textContent = '';
        result.textContent = '';
    }
})

