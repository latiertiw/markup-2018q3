var names = ["John Doe", "Johny Doe", "Jonhnathan Doe"];
var i = 1;
document.getElementById("button-1").style.backgroundColor = "white";

function func() {
  let str = "button-";
  let name = " ";

  for (let j = 1; j <= 3; j++) {
    name = str + j;
    document.getElementById(name).style.backgroundColor = "#ffffff00";
  }

  name = str + i;
  document.getElementById(name).style.backgroundColor = "white";
  document.getElementById("name").textContent = names[i - 1];

  i++;
  if (i == 4) {
    i = 1;
  }
}


function disp(){
    document.getElementById('menu').style.display='block';
    document.getElementById('right').textContent=' ';
}
function co(){
    document.getElementById('menu').style.display='none';
    document.getElementById('right').textContent='.com';
}
function ne(){
    document.getElementById('menu').style.display='none';
    document.getElementById('right').textContent='.net';
}

function or(){
    document.getElementById('menu').style.display='none';
    document.getElementById('right').textContent='.org';
}


var timer = setInterval(func, 3000);
