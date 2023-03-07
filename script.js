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

	if (saldo >= 1 && saldo <= 500) {
		aliquota = 0.5;
		parcela = 0;
	} else if (saldo > 500 && saldo <= 1000) {
		aliquota = 0.4;
		parcela = 50;
	} else if (saldo > 1000 && saldo <= 5000) {
		aliquota = 0.3;
		parcela = 150;
	} else if (saldo > 5000 && saldo <= 10000) {
		aliquota = 0.2;
		parcela = 650;
	} else if (saldo > 10000 && saldo <= 15000) {
		aliquota = 0.15;
		parcela = 1150;
	} else if (saldo > 15000 && saldo <= 20000) {
		aliquota = 0.1;
		parcela = 1900;
	} else if (saldo > 20000) {
		aliquota = 0.05;
		parcela = 2900;
	} else {
		alert("Saldo inválido.");
		return;
	}

	resultado = saldo * aliquota + parcela;
	resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("resultado").value = resultadoFormatado}