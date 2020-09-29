// Código Javascript


var mult = false;
var soma = false;
var div = false;
var sub = false;
var numero1;
var numero2;


function pegaInput(idOpcao){
	var op = document.getElementById(idOpcao).value;

	if(op == 'C'){
		document.getElementById("resultado-mostra").value = "0";
	}

	if(op == '/' && document.getElementById("resultado-mostra").value != 0){

		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
	}

	if(op == '*'){
	
		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +' '+op+' ';
	}

	if(op == '+'){
		soma = true;

		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +' '+op+' ';
	}

	if(op == '.'){
		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +''+op;
	}

	if(op == '-'){
		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +''+op;
	}

	if(op == '='){

		if(parseFloat(document.getElementById("resultado-mostra").value) == 0){
			document.getElementById("resultado-mostra").value = 0;
		}


	}

	
}

function pegaInputNum(idOpcao){
	var num = document.getElementById(idOpcao).value;
	if(num == '0'){

		if(parseFloat(document.getElementById("resultado-mostra").value) == 0){
		
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value + op;
		}
		
	}

	if(num == '1'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			numero1 = parseFloat(num);
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '2'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			numero2 = parseFloat(num);
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '3'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '4'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}



	if(num == '5'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '6'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '7'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '8'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}


	if(num == '9'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = num;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +num;
		}
		
	}

}