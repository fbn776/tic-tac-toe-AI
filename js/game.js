var op=s(".optionM");
var opB=s(".optionsB");
var o=s(".option");
var cl=s(".close");
var main=s(".main");
var txtB=s(".txtB");
var nm=s(".name");
var tn=s("#name");
var pNv=s(".ival");
var avt=s(".avatarM");
var XB=s("#X");
var OB=s("#O");
var pM=s("#pauseM");
var bBg=s(".bgBlack");
var abt=s(".about");
var aTB=new animate(txtB);
var avtA=new animate(avt);
var pAm=new animate(pM);
var blcBg=new animate(bBg);
var optM=new animate(o);
var optB=new animate(opB);
var abtA=new animate(abt);
var inp=document.getElementsByTagName("input");
var img=document.getElementsByTagName("img");
function re(){
ani.end();
for(i=0;i<tdOfTable.length;i++){
tdOfTable[i].style.backgroundColor="rgba(0,0,0,0)";}}
function startG(){
gA.start();mM.end();
var intv=setInterval(inr,100);}
function openS(){
o.style="display:block;";
opB.style.opacity="1";oA.start();
opB.addEventListener('click',closeO);
cl.addEventListener('click',closeO);
function closeO(){oA.end();
opB.style.opacity="0";
setTimeout(function(){
o.style="display:none;";
},400)}};
var tf=true;var tS=false;
inp[0].addEventListener('input',function(){
if(inp[0].checked===true){
return tf=true;}
else{return tf=false;}});
inp[1].addEventListener('input',function(){
if(inp[1].checked===true){
return tS=true;}
else{return tS=false;}});
for(i=0;i<inp.length;i++){
inp[i].addEventListener('click',function(){
chC.play(tf);})}
for(i=0;i<img.length;i++){
img[i].addEventListener('click',function(){
snd.play(tf);})}
for(i=0;i<btnCl.length;i++){
btnCl[i].addEventListener('click',function(){
snd.play(tf);});}
for(i=0;i<t.length;i++){
t[i].addEventListener('click',function(){
cellC.play(tf);});}
document.addEventListener('click',function(){
tC.play(tS);});
main.addEventListener('click',function(){
aTB.start();});
function opAvt(){avtA.start();}
function closeN(){aTB.end();};
function pro(){aTB.end();
localStorage.setItem("playerName",tn.value);
var cName=localStorage.getItem("playerName");
nm.innerHTML=cName;
pNv.innerHTML=cName;}
var cName=localStorage.getItem("playerName");
nm.innerHTML=cName;
pNv.innerHTML=cName;
function clearD(){
localStorage.removeItem("playerName");
localStorage.removeItem("win");
localStorage.removeItem("lose");
localStorage.removeItem("draw");
res();chC.play(tf);}
function extA(){
avtA.end();aTB.end();}
function openP(){
pAm.start();blcBg.start();}
function resumeG(){
pAm.end();blcBg.end();}
function reAll(){
for(i=0;i<t.length;i++){
t[i].innerHTML="";}
pAm.end();blcBg.end();}
function openSett(){
optM.start();optB.start();}
function goHome(){
gA.end();mM.start();
optM.end();optB.end();
pAm.end();blcBg.end();}
function closeAb(){
abtA.end();}
function openAbt(){
abtA.start();}