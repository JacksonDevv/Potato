const botaoHamburguer = document.getElementById("botaoHamburguer");
const menuDeslizante = document.getElementById("menuDeslizante");


botaoHamburguer.addEventListener("click", ()=>{
botaoHamburguer.classList.toggle("ativo");
menuDeslizante.classList.toggle("ativo");
});

