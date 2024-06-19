const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const main=document.getElementById("main");

one.addEventListener("click",function(){
    main.setAttribute("src","./images/camilian.jpg");
})
two.addEventListener("click",function(){
    main.setAttribute("src","./images/cangaru.jpg");
})
three.addEventListener("click",function(){
    main.setAttribute("src","./images/cat.jpg");
})
four.addEventListener("click",function(){
    main.setAttribute("src","./images/eagle.jpg");
})
five.addEventListener("click",function(){
    main.setAttribute("src","./images/bird.jpg");
})
six.addEventListener("click",function(){
    main.setAttribute("src","./images/lizard.jpg");
})

