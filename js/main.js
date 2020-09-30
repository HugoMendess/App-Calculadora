// Código Javascript



function pegaInput(idOpcao){
	var op = document.getElementById(idOpcao).value;

	

	if(op == 'C'){
		document.getElementById("resultado-mostra").value = "0";
	}

	if(op === '+' || op === '-' || op === "*" || op === "/" || op === "."){
		document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +" " +op+" ";
	}
	

	if(op == '=' && document.getElementById("resultado-mostra").value != 0){

		if(parseFloat(document.getElementById("resultado-mostra").value) == 0){
			document.getElementById("resultado-mostra").value = 0;
		}


	}

	if(op == '0'){

		if(parseFloat(document.getElementById("resultado-mostra").value) == 0){
		
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value + op;
		}
		
	}

	if(op == '1'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			numero1 = parseFloat(op);
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '2'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			numero2 = parseFloat(op);
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '3'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '4'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}



	if(op == '5'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '6'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '7'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '8'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}


	if(op == '9'){

		if(document.getElementById("resultado-mostra").value == 0){
			document.getElementById("resultado-mostra").value = op;
		}

		else{
			document.getElementById("resultado-mostra").value = document.getElementById("resultado-mostra").value +op;
		}
		
	}

	

}