var para1 = document.getElementById('para1')
var para2 = document.getElementById('para2')
var para3 = document.getElementById('para3')
var btnclick = document.getElementById('btnclick')
var totale = document.getElementById('totale')
var button = document.querySelector("button");


btnclick.addEventListener('click',()=>{
    let timeCompte = 80;
let inter = null;
let numbers = [1,2,3,4,5,6];
    function interval(time) {
        clearInterval(inter);
            inter =  setInterval(()=>{
                let t1 = numbers[Math.floor(Math.random() * numbers.length)];
                let t2 = numbers[Math.floor(Math.random() * numbers.length)];
                let t3 = numbers[Math.floor(Math.random() * numbers.length)];
                para1.textContent = t1
                para2.textContent = t2
                para3.textContent = t3

                totale.textContent = t1+t2+t3
            },time) 
    }
    function timeOut() {
        setTimeout(()=>{
            timeCompte += 80;
            if (timeCompte >= 1100) {
                clearInterval(inter)
            }
            else{
                interval(timeCompte);
                timeOut()
            } 
        },1000); 
    }
    
    interval(timeCompte);
    timeOut()
})


/*Fonction pour créer un élément pour représenter un dé*/


function createDice()