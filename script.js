
console.log(typeof para)
var btnclick = document.getElementById('btnclick')
// var totale = document.getElementById('totale')
const button = document.querySelector("button");
const input = document.querySelector("input");
const diV =  document.getElementById("div_globale")

let count = 0;





input?.addEventListener('click',()=>{
    let para1 = document.getElementById('img_1')?document.getElementById('img_1'):0;
let para2 = document.getElementById('img_2')?document.getElementById('img_2'):0;
let para3 = document.getElementById('img_3')?document.getElementById('img_3'):0;
let para4 = document.getElementById('img_4')?document.getElementById('img_4'):0;
let para5 = document.getElementById('img_5')?document.getElementById('img_5'):0;
let totale = 0;
    let timeCompte = 50;
let inter = null;
let numbers = [1,2,3,4,5,6];
    function interval(time) {
        clearInterval(inter);
            inter =  setInterval(()=>{
                let t1 = numbers[Math.floor(Math.random() * numbers.length)];
                let t2 = numbers[Math.floor(Math.random() * numbers.length)];
                let t3 = numbers[Math.floor(Math.random() * numbers.length)];
                let t4 = numbers[Math.floor(Math.random() * numbers.length)];
                let t5 = numbers[Math.floor(Math.random() * numbers.length)];
                if((para1 == 0)){
                    t1 = 0;
                }else {para1.src = "Dice/Side_"+t1+"_Pips.png"}

                if(para2==0){
                    t2 = 0;
                }else para2.src = "Dice/Side_"+t2+"_Pips.png";
                
                if(para3==0){
                    t3 = 0;
                }else  para3.src = "Dice/Side_"+t3+"_Pips.png";
                
                if(para4==0){
                    t4 = 0;
                }else para4.src = "Dice/Side_"+t4+"_Pips.png";
                
                if(para5==0){
                    t5 = 0;
                }else para5.src = "Dice/Side_"+t5+"_Pips.png";
                
                
               
                
                
                
                totale = t1 + t2 +t3 +t4 +t5;
                
            },time) 
    }
    function timeOut() {
        setTimeout(()=>{
            timeCompte += 140;
            if (timeCompte >= 1100) {
                clearInterval(inter)
                alert(totale)
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


function createDice(name){

   const pip = Math.floor(Math.random() * 6) + 1;
   const div = document.createElement("div");
    const img = document.createElement("img");
    const divName = "div_"+ name;
    const imgName = "img_"+ name;
    div.classList.add("divs");
    div.setAttribute("id",divName);
    img.setAttribute("id",imgName);
    img.src="Dice/Side_"+pip+"_Pips.png";
    document.getElementById("div_globale").appendChild(div).appendChild(img);
}

/*Fonction ajout dé, pas plus de 5*/

button.addEventListener("click", ()=>{
    ++count;
    if(count < 6){
        createDice(count)
    }
})

// input.addEventListener("click", eee)

/**/ 
// function eee(){
//     let tab = document.getElementsByClassName("divs");
//     console.log(tab);
    
    
   
   

//     if(tab > 0){
//         for(let i = 0; i < tab; i++){
//        let ti = i;
        
//     }
   
//     console.log(t1,t2,t3)
// }}