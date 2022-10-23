//document.addEventListener("click", display1);

function display1() {
document.getElementById("demo3").style.display='none';
document.getElementById("demo2").style.display='block';

 }

 function imprimirValor(){

 let select = document.getElementById("num");
 let total=select.value
 console.log(total)
document.getElementById('result').innerHTML = total; 
}

function valor(){
  let sele=document.getElementById("num2");
  sele=sele.value
  document.getElementById('result').innerHTML = sele; 
}

function valor3(){
  let sele=document.getElementById("num3");
  sele3=sele.value
  document.getElementById('result').innerHTML = sele3; 
}

function valor4(){
  let sele=document.getElementById("num4");
  sele=sele.value
  document.getElementById('result').innerHTML = sele; 
}

function valor5(){
  let sele=document.getElementById("num5");
  sele=sele.value
  document.getElementById('result').innerHTML = sele; 
}