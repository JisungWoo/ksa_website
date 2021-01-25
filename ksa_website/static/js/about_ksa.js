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

//changing languages
function toggle_Ko() {
    var ko_bt = document.getElementById("a_koBt");
    var en_bt = document.getElementById("a_enBt");
    console.log(ko_bt.style.visibility);
    console.log(en_bt.style.visibility);
    if (ko_bt.style.visibility === "hidden" && en_bt.style.visibility === "visible") {
        ko_bt.style.visibility = "visible";
        en_bt.style.visibility = "hidden";
    }
}


function toggle_En() {
    var ko_bt = document.getElementById("a_koBt");
    var en_bt = document.getElementById("a_enBt");
    console.log(ko_bt.style.visibility);
    console.log(en_bt.style.visibility);
    if (en_bt.style.visibility === "hidden" && ko_bt.style.visibility ==="visible") {
      en_bt.style.visibility = "visible";
      ko_bt.style.visibility = "hidden";
    }
}