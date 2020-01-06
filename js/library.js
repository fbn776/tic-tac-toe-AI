function animate(o){this.o=o;
this.start=function(){
o.style.opacity="0";
o.style.transform="translateX(10%)";
o.style.display="block";
setTimeout(function(){
o.style.opacity="1";
o.style.transform="translateX(0%)"},200)}
this.end=function(){
o.style.transform="translateX(0%)";
o.style.opacity="1";
setTimeout(function(){
o.style.opacity="0";
o.style.transform="translateX(-10%)";
setTimeout(function(){
o.style.display="none";},200)},200)}};

function sound(src){
this.sound = document.createElement("audio");this.sound.src = src;
this.sound.setAttribute("preload", "auto");
this.sound.setAttribute("controls", "none");
this.sound.style.display="none";
document.body.appendChild(this.sound);
this.play = function(n){this.n=n;
if(this.n==true){this.sound.play()}};
this.stop = function(){this.sound.pause();}}

function random(minNum,maxNum){this.minNum=minNum;this.maxNum=maxNum;
if(typeof this.minNum===typeof string|| typeof this.maxNum===typeof string){
console.log("You have entered a string in the random function. It only takes number");}
return Math.floor(Math.random()*(this.maxNum-this.minNum+1)+this.minNum);};
