function openLetter(){document.getElementById('letter').style.display='block';}
function createFlower(){
const flower=document.createElement('div');
flower.classList.add('flower');
const flowers=['🌸','🌷','💖','💕','✨'];
flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];
flower.style.left=Math.random()*100+'vw';
flower.style.animationDuration=(4+Math.random()*6)+'s';
document.body.appendChild(flower);
setTimeout(()=>flower.remove(),10000);
}
setInterval(createFlower,300);
