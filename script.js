function crearFlor(){

const flor=document.createElement("div")

const flores=["🌸","🌺","🌷","🌹","💮"]

flor.innerHTML=flores[Math.floor(Math.random()*flores.length)]

flor.classList.add("flower")

flor.style.left=Math.random()*100+"vw"

flor.style.animationDuration=(5+Math.random()*5)+"s"

document.body.appendChild(flor)

setTimeout(()=>{
flor.remove()
},10000)

}

setInterval(crearFlor,300)



function crearCorazon(){

const corazon=document.createElement("div")

corazon.innerHTML="💖"

corazon.classList.add("corazon")

corazon.style.left=Math.random()*100+"vw"

corazon.style.bottom="0"

document.body.appendChild(corazon)

setTimeout(()=>{
corazon.remove()
},4000)

}

setInterval(crearCorazon,800)



function mostrarCarta(){
document.getElementById("carta").classList.add("activa")
}

function cerrarCarta(){
document.getElementById("carta").classList.remove("activa")
}