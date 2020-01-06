var player="Player";
var win=localStorage.getItem("win");
var lose=localStorage.getItem("lose");
var draw=localStorage.getItem("draw");
var arr=[];
////console.log(win);
//console.log(lose);
//console.log(draw);
function s(n){this.n=n;var x=document.querySelector(this.n);return x;}
var m=s(".message");
var cont=s(".cont");
var gameA=s(".gameM");
var menuM=s(".menuM");
var tab=s("table");
var op=s(".optionM");
var nW=s(".iwin");
var nL=s(".ilose");
var nD=s(".idraw");
var XB=s("#X");
var OB=s("#O");
var ratio=s(".iratio");
var tdOfTable=document.getElementsByClassName("tdata");
var t=document.getElementsByTagName("td");
var table=document.getElementById("table");
var div=document.getElementById("i");
var btnCl=document.getElementsByTagName("button");
var intv;

var ani=new animate(cont);
var gA=new animate(gameA);
var mM=new animate(menuM);
var oA=new animate(op);
setInterval(function(){
for(i=0;i<tdOfTable.length;i++){
tdOfTable[i].innerHTML=arr[i];
}
var total=localStorage.getItem("lose");
var dra=localStorage.getItem("draw");
var rat=localStorage.getItem("win");
ratio.innerHTML=rat+":"+total+":"+dra;

},0);
function c(a){this.a=a;
for(i=0;i<this.a.length;i++){
tdOfTable[this.a[i]].style.backgroundColor="#212121";
//console.log(this.a[i]);
}};
function res(n){this.n=n;ani.start();
for(i=0;i<t.length;i++){
t[i].innerHTML="";
setInterval(function(){
t[i].style.color="#D84315";
},100);
}
if(this.n==="X"){
m.innerHTML="You Won";win++;localStorage.setItem("win",win);}
else if(this.n==="O"){
m.innerHTML="You Lose";lose++;localStorage.setItem("lose",lose);}
else if(this.n==="D"){
m.innerHTML="Draw";draw++;localStorage.setItem("draw",draw);}
nW.innerHTML=localStorage.getItem("win");
nL.innerHTML=localStorage.getItem("lose");
nD.innerHTML=localStorage.getItem("draw");}
var snd=new sound("audio/btn click.mp3");
var cellC=new sound("audio/cell click.mp3");
var chC=new sound("audio/check.mp3");
var tC=new sound("audio/touch.mp3");
var selt=0;
table.addEventListener('click',function(){
selt++;
if(selt%2===1){
XB.style.color="#212121";
OB.style.color="#FF3D00";
}
else{
XB.style.color="#FF3D00";
OB.style.color="#212121";
}
t[0].addEventListener('click',function(){if(t[0].innerHTML==""){t[0].innerHTML="X"}else{log("sorry")}});t[1].addEventListener('click',function(){if(t[1].innerHTML==""){t[1].innerHTML="X"}else{log("sorry")}});t[2].addEventListener('click',function(){if(t[2].innerHTML==""){t[2].innerHTML="X"}else{log("sorry")}});t[3].addEventListener('click',function(){if(t[3].innerHTML==""){t[3].innerHTML="X"}else{log("sorry")}});t[4].addEventListener('click',function(){if(t[4].innerHTML==""){t[4].innerHTML="X"}else{log("sorry")}});t[5].addEventListener('click',function(){if(t[5].innerHTML==""){t[5].innerHTML="X"}else{log("sorry")}});t[6].addEventListener('click',function(){if(t[6].innerHTML==""){t[6].innerHTML="X"}else{log("sorry")}});t[7].addEventListener('click',function(){if(t[7].innerHTML==""){t[7].innerHTML="X"}else{log("sorry")}});t[8].addEventListener('click',function(){if(t[8].innerHTML==""){t[8].innerHTML="X"}else{log("sorry")}});setTimeout(function(){if(t[0].innerHTML=="X"&&t[8].innerHTML=="X"&&t[4].innerHTML==""){t[4].innerHTML="O"}
else if(t[2].innerHTML=="X"&&t[6].innerHTML=="X"&&t[4].innerHTML==""){t[4].innerHTML="O"}
else if(t[0].innerHTML=="X"&&t[4].innerHTML=="X"&&t[8].innerHTML==""){t[8].innerHTML="O"}
else if(t[2].innerHTML=="X"&&t[4].innerHTML=="X"&&t[6].innerHTML==""){t[6].innerHTML="O"}
else if(t[4].innerHTML=="X"&&t[8].innerHTML=="X"&&t[0].innerHTML==""){t[0].innerHTML="O"}
else if(t[4].innerHTML=="X"&&t[6].innerHTML=="X"&&t[2].innerHTML==""){t[2].innerHTML="O"}
else if(t[0].innerHTML=="X"&&t[2].innerHTML=="X"&&t[1].innerHTML==""){t[1].innerHTML="O"}
else if(t[3].innerHTML=="X"&&t[5].innerHTML=="X"&&t[4].innerHTML==""){t[4].innerHTML="O"}
else if(t[6].innerHTML=="X"&&t[8].innerHTML=="X"&&t[7].innerHTML==""){t[7].innerHTML="O"}
else if(t[0].innerHTML=="X"&&t[1].innerHTML=="X"&&t[2].innerHTML==""){t[2].innerHTML="O"}
else if(t[3].innerHTML=="X"&&t[4].innerHTML=="X"&&t[5].innerHTML==""){t[5].innerHTML="O"}
else if(t[6].innerHTML=="X"&&t[7].innerHTML=="X"&&t[8].innerHTML==""){t[8].innerHTML="O"}
else if(t[1].innerHTML=="X"&&t[2].innerHTML=="X"&&t[0].innerHTML==""){t[0].innerHTML="O"}
else if(t[4].innerHTML=="X"&&t[5].innerHTML=="X"&&t[3].innerHTML==""){t[3].innerHTML="O"}
else if(t[7].innerHTML=="X"&&t[8].innerHTML=="X"&&t[6].innerHTML==""){t[6].innerHTML="O"}
else if(t[0].innerHTML=="X"&&t[6].innerHTML=="X"&&t[3].innerHTML==""){t[3].innerHTML="O"}
else if(t[1].innerHTML=="X"&&t[7].innerHTML=="X"&&t[4].innerHTML==""){t[4].innerHTML="O"}
else if(t[2].innerHTML=="X"&&t[8].innerHTML=="X"&&t[5].innerHTML==""){t[5].innerHTML="O"}
else if(t[0].innerHTML=="X"&&t[3].innerHTML=="X"&&t[6].innerHTML==""){t[6].innerHTML="O"}
else if(t[1].innerHTML=="X"&&t[4].innerHTML=="X"&&t[7].innerHTML==""){t[7].innerHTML="O"}
else if(t[2].innerHTML=="X"&&t[5].innerHTML=="X"&&t[8].innerHTML==""){t[8].innerHTML="O"}
else if(t[3].innerHTML=="X"&&t[6].innerHTML=="X"&&t[0].innerHTML==""){t[0].innerHTML="O"}
else if(t[4].innerHTML=="X"&&t[7].innerHTML=="X"&&t[1].innerHTML==""){t[1].innerHTML="O"}
else if(t[5].innerHTML=="X"&&t[8].innerHTML=="X"&&t[2].innerHTML==""){t[2].innerHTML="O"}
else{var i=random(0,8);if(i==0&&t[0].innerHTML===""){i=0}
else if(t[1].innerHTML===""){i=1}
else if(t[2].innerHTML===""){i=2}
else if(t[3].innerHTML===""){i=3}
else if(t[4].innerHTML===""){i=4}
else if(t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else{log("Draw")}
if(i==1&&t[1].innerHTML===""){i=1}
else if(t[2].innerHTML===""){i=2}
else if(t[3].innerHTML===""){i=3}
else if(t[4].innerHTML===""){i=4}
else if(t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==2&&t[2].innerHTML===""){i=2}
else if(t[3].innerHTML===""){i=3}
else if(t[4].innerHTML===""){i=4}
else if(t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")};
if(i==3&&t[3].innerHTML===""){i=3}
else if(t[4].innerHTML===""){i=4}
else if(t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==4&&t[4].innerHTML===""){i=4}
else if(t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[3].innerHTML===""){i=3}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==5&&t[5].innerHTML===""){i=5}
else if(t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[4].innerHTML===""){i=4}
else if(t[3].innerHTML===""){i=3}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==6&&t[6].innerHTML===""){i=6}
else if(t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[5].innerHTML===""){i=5}
else if(t[4].innerHTML===""){i=4}
else if(t[3].innerHTML===""){i=3}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==7&&t[7].innerHTML===""){i=7}
else if(t[8].innerHTML===""){i=8}
else if(t[6].innerHTML===""){i=6}
else if(t[5].innerHTML===""){i=5}
else if(t[4].innerHTML===""){i=4}
else if(t[3].innerHTML===""){i=3}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
if(i==8&&t[8].innerHTML===""){i=8}
else if(t[7].innerHTML===""){i=7}
else if(t[6].innerHTML===""){i=6}
else if(t[5].innerHTML===""){i=5}
else if(t[4].innerHTML===""){i=4}
else if(t[3].innerHTML===""){i=3}
else if(t[2].innerHTML===""){i=2}
else if(t[1].innerHTML===""){i=1}
else if(t[0].innerHTML===""){i=0}
else{log("Draw")}
t[i].innerHTML="O"}},100)
arr[0]=t[0].innerHTML;
arr[1]=t[1].innerHTML;
arr[2]=t[2].innerHTML;
arr[3]=t[3].innerHTML;
arr[4]=t[4].innerHTML;
arr[5]=t[5].innerHTML;
arr[6]=t[6].innerHTML;
arr[7]=t[7].innerHTML;
arr[8]=t[8].innerHTML;
});
intv=setInterval(inr,100);
function inr(){
if(t[0].innerHTML==="X"&&t[1].innerHTML==="X"&&t[2].innerHTML==="X"){res("X");c([0,1,2])};
if(t[3].innerHTML==="X"&&t[4].innerHTML==="X"&&t[5].innerHTML==="X"){res("X");c([3,4,5])};
if(t[6].innerHTML==="X"&&t[7].innerHTML==="X"&&t[8].innerHTML==="X"){res("X");c([6,7,8])};
if(t[0].innerHTML==="X"&&t[3].innerHTML==="X"&&t[6].innerHTML==="X"){res("X");c([0,3,6])};
if(t[1].innerHTML==="X"&&t[4].innerHTML==="X"&&t[7].innerHTML==="X"){res("X");c([1,4,7])};
if(t[2].innerHTML==="X"&&t[5].innerHTML==="X"&&t[8].innerHTML==="X"){res("X");c([2,5,8])};
if(t[0].innerHTML==="O"&&t[1].innerHTML==="O"&&t[2].innerHTML==="O"){res("O");c([0,1,2])};
if(t[3].innerHTML==="O"&&t[4].innerHTML==="O"&&t[5].innerHTML==="O"){res("O");c([3,4,5])};
if(t[6].innerHTML==="O"&&t[7].innerHTML==="O"&&t[8].innerHTML==="O"){res("O");c([6,7,8])};
if(t[0].innerHTML==="O"&&t[3].innerHTML==="O"&&t[6].innerHTML==="O"){res("O");c([0,3,6])};
if(t[1].innerHTML==="O"&&t[4].innerHTML==="O"&&t[7].innerHTML==="O"){res("O");c([1,4,7])};
if(t[2].innerHTML==="O"&&t[5].innerHTML==="O"&&t[8].innerHTML==="O"){res("O");c([2,5,8])};
if(t[0].innerHTML==="O"&&t[4].innerHTML==="O"&&t[8].innerHTML==="O"){res("O");c([0,4,8])};
if(t[2].innerHTML==="O"&&t[4].innerHTML==="O"&&t[6].innerHTML==="O"){res("O");c([2,4,6])};
if(t[0].innerHTML==="X"&&t[4].innerHTML==="X"&&t[8].innerHTML==="X"){res("X");c([0,4,8])};
if(t[2].innerHTML==="X"&&t[4].innerHTML==="X"&&t[6].innerHTML==="X"){res("X");c([2,4,6])};
setInterval(function(){
if(t[0].innerHTML!=""&&t[1].innerHTML!="" &&t[2].innerHTML!="" &&t[3].innerHTML!="" &&t[4].innerHTML!="" &&t[5].innerHTML!="" &&t[6].innerHTML!="" &&t[7].innerHTML!="" ){
log("hahah");
res("D");
}
nW.innerHTML=localStorage.getItem("win");
nL.innerHTML=localStorage.getItem("lose");
nD.innerHTML=localStorage.getItem("draw");
},100);
};