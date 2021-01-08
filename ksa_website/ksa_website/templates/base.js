let target = document.querySelector("#a_header");

function randomString(){
    let stringArr = ["KSA 소개","About KSA"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//reset typing
function resetTyping(){
    target.textContent="";
    a_header(randomString());
}

//print each letter
function a_header(randomArr){
    console.log(randomArr);
    //recursion function
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            a_header(randomArr);
        },80);
    }
    else{
        setTimeout(resetTyping,2000);
    }
}

a_header(randomString());

console.log(selectString);
console.log(selectStringArr);

// //cursor blink effect
// function cursorBlink(){
//     target.classList.toggle("active");
// }
// setInterval(cursorBlink,450);
//, "acerca de KSA?", "关于KSA？","KSAについて?"(other languages)