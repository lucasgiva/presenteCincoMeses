//capturando ids: 
var btn = document.getElementById('button')
var easterEgg = document.getElementById('easterEgg')
var point = document.getElementById('eaterEggPoint')
var back = document.getElementById('back')

//adicionando evento de click e passando função: 
btn.addEventListener('click', clickButton)
point.addEventListener('click', clickLink)
back.addEventListener('click', backHome)
//função de click, que aciona alerta: 
function clickButton (){
  alert("Feliz 5 meses meu amor, Obrigado por ser tão incrivel para mim, EU TE AMO =)")
}
//função de click que aciona todo o container do easter egg:
function clickLink(){
 easterEgg.style.display = "block";
 easterEgg.style.transition = ".5s linear"; 
}
// função de click que volta ao site original, desabilitando o easter egg:
function backHome (){
  easterEgg.style.display = "none"; 
}