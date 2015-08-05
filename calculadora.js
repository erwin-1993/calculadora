var operacion=' ';
var resultado=' ';
function enviarNumero(arg) {
	
	operacion=operacion+arg;
	alert(arg);
	inserttesxt();
}
function enviarSigno(arg) {
	
	operacion=operacion+arg;
	alert(arg);	
	inserttesxt();
}
function solucion() {
	resultado=eval(operacion);
	alert(resultado);	
	finaloperacion(resultado);
}
function restore() {
	operacion='';
	resultado='';
	document.getElementById("bonus").innerHTML="";
}
function inserttesxt(){
	document.getElementById("bonus").innerHTML=operacion;
}
function finaloperacion(arg){
	document.getElementById("bonus").innerHTML=operacion+"="+resultado;
}



