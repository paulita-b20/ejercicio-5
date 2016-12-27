

function alcanzoPromedio(){
	var puntosSquad=document.getElementById("puntos_squad").value;
var maxPuntos = document.getElementById("puntaje_maximo").value;
	var resultado =document.getElementById("resultado");

	var porcentaje = (puntosSquad * 100)/maxPuntos;
	
	
	if(porcentaje>=80){
	   resultado.innerHTML ="Muy bien Squad";
	}
	else {
		resultado.innerHTML="Pueden hacerlo mejor";
	}
} 
