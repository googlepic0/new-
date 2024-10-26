let inc =document.querySelector('.inc');
let dec = document.querySelector(".dec");
let input =document.querySelector(".input");

inc.addEventListener("click", function(){
    if(Number(input.value) <6){
        input.value =Number(input.value) + 1;
        dec.style.cursor = "pointer"
    }else{
        inc.style.cursor = "not-allowed"
    }
});


dec.addEventListener('click', function(){
    if(Number(input.value) >1){
        input.value =Number(input.value) -1;
        inc.style.cursor = "pointer"
    }else{
        dec.style.cursor = "not-allowed"
    }
});




// ======================COLOR START======================
// let btn =document.querySelector('.btn');
// let bgClr =document.querySelector("#clr");

// btn.addEventListener('click', function(){

//     let red = Math.floor(Math.random() *255);
//     let green = Math.floor(Math.random() *255);
//     let blue = Math.floor(Math.random() *255);

//     bgClr.style.background = `rgb(${red}, ${green}, ${blue})`;
// })

let btn =document.querySelector('.btn');
let bgClr = document.querySelector("#clr");

btn.addEventListener('click', function(){
    let green = Math.floor(Math.random() * 255);
    let red = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    bgClr.style.background = `rgb(${green}, ${red}, ${blue})`;
})


// ======================COLOR END======================