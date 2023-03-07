function calcular() {
	var saldo = document.getElementById("saldo").value;	
	var data = new Date(document.getElementById("data").value);
	var mes = data.getMonth() + 1;
	var aliquota = 0;
	var parcela = 0;
	var resultado = 0;

	if (saldo <= 0) {
		alert("Saldo deve ser maior do que zero.");
		return;
	}

	if (mes >= 1 && mes <= 3) {
		aliquota = 0.5;
		parcela = 0;
	} else if (mes >= 4 && mes <= 6) {
		aliquota = 0.4;
		parcela = 50;
	} else if (mes >= 7 && mes <= 9) {
		aliquota = 0.3;
		parcela = 150;
	} else if (mes >= 10 && mes <= 12) {
		aliquota = 0.2;
		parcela = 250;
	} else {
		alert("Data de aniversário inválida.");
		return;
	}

	resultado = saldo * aliquota + parcela;
	resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("resultado").value = resultadoFormatado}