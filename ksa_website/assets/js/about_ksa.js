(function(window, document, undefined){

    // code that should be taken care of right away

    window.onload = init;

      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        a_header(randomString());
      }

})(window, document, undefined);

function randomString(){
    var stringArr = ["KSA 소개","About KSA"];
    var selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    var selectStringArr = selectString.split("");

    return selectStringArr;
}

//reset typing
function resetTyping(){
    var target = document.getElementById("a_header");
    target.textContent="";
    a_header(randomString());
}

//print each letter
function a_header(randomArr){
    var target = document.getElementById("a_header");
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

//changing languages - About KSA
function toggle_Ko() {
    document.getElementById("a_enBt").style.display = "none"
    document.getElementById("a_koBt").style.display = "block"
}

function toggle_En() {
    document.getElementById("a_koBt").style.display = "none"
    document.getElementById("a_enBt").style.display = "block"
}
