const calculate_btn = document.querySelector('.calculate');
const amount = document.querySelector('.amount');
const service = document.querySelector('.service');
const people = document.querySelector('.people');
const bad = document.querySelector('.bad');
const average = document.querySelector('.average');
const good = document.querySelector('.good');
const tipjar = document.querySelector('.container2');
const tipresult = document.querySelector('.tipresult');
const exiticon = document.getElementById('exit');

let tip;

function calculate(){
    calculate_btn.addEventListener('click', function(){
        if(amount.value === '' || people.value === ''){
            alert('Enter in values');
            } else {
                tipjar.classList.add('active');
            }

        if(bad){
            tip = (amount.value * .1) / people.value;
        }

        if(average){
            tip = (amount.value * .12) / people.value;
        }

        if(good){
            tip = (amount.value * .15) / people.value;
        }

        tipresult.innerHTML = `Your tip will be $${tip} per person`;
        console.log(tip);
    })

    exiticon.addEventListener('click', function(){
        tipjar.classList.remove('active');
        amount.value = '';
        service.value = '';
        people.value = '';
    })
}
calculate();

