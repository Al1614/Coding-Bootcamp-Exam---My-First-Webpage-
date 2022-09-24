var signUp = document.querySelector("#join");
function remove(element){
    var signUp = element.remove(this);
}

var searcher = document.querySelector("#search");
var goButton = document.querySelector("#go");


function go(){
    var goButton = alert("You are searching for " + searcher.value);
}

var likes = [68,212,33]
var nums = [document.querySelector("#num1"),
document.querySelector("#num2"),
document.querySelector("#num3")
];
function like(id) {
    likes[id]++;
    nums[id].innerText = likes[id];
}